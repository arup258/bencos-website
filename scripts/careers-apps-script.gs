/**
 * Bencos Careers — CV upload receiver (Google Apps Script)
 *
 * Works like a Google Form with a file-upload question:
 *   • saves each applicant's CV (PDF) into a Google Drive folder
 *   • adds a row to this Google Sheet: Submitted at · Position · Name · Email · Phone · CV link
 *
 * SETUP (one time, ~3 minutes)
 *   1. In Google Drive create a folder, e.g. "Careers CVs". Open it and copy the ID from the URL:
 *        https://drive.google.com/drive/folders/THIS_PART_IS_THE_ID
 *   2. Create a new Google Sheet, e.g. "Careers Applications".
 *   3. In the sheet: Extensions → Apps Script. Delete the sample code and paste this whole file.
 *   4. Paste the folder ID into FOLDER_ID below and click Save.
 *   5. Deploy → New deployment → type "Web app":
 *        Execute as:      Me
 *        Who has access:  Anyone
 *      Click Deploy, allow the permissions, and copy the "Web app URL" (ends in /exec).
 *   6. Paste that URL into CAREERS_UPLOAD_URL in app/careers/page.tsx.
 *
 * CVs stay private in your Drive — only people you share the folder with can open them.
 * If you edit this script later: Deploy → Manage deployments → Edit → Version "New version".
 */

const FOLDER_ID = "1maPynAujT3mRCHn-Oze_SQMZASwdt4Ia"

const MAX_BYTES = 5 * 1024 * 1024 // 5 MB, same limit as the website form

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    let cvUrl = ""

    if (data.fileData) {
      const bytes = Utilities.base64Decode(data.fileData)
      if (bytes.length > MAX_BYTES) return json({ success: false, message: "CV is larger than 5 MB." })

      const applicant = String(data.name || "Applicant").replace(/[\\/:*?"<>|]/g, "").trim()
      const position = String(data.position || "Application").replace(/[\\/:*?"<>|]/g, "").trim()
      const blob = Utilities.newBlob(bytes, data.mimeType || "application/pdf", data.fileName || "cv.pdf")
      blob.setName(applicant + " - " + position + " - " + (data.fileName || "cv.pdf"))

      const file = DriveApp.getFolderById(FOLDER_ID).createFile(blob)
      cvUrl = file.getUrl()
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at", "Position", "Name", "Email", "Phone", "CV (Google Drive)"])
      sheet.setFrozenRows(1)
    }
    sheet.appendRow([new Date(), data.position || "", data.name || "", data.email || "", data.phone || "", cvUrl])

    return json({ success: true, cvUrl: cvUrl })
  } catch (err) {
    return json({ success: false, message: String(err) })
  }
}

// Visiting the Web app URL in a browser shows this — handy to check the deployment is live.
function doGet() {
  return json({ ok: true, service: "Bencos careers CV upload" })
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
