/**
 * Sumit Panchal Portfolio — contact form mail handler.
 * Deploy this script as a Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 * Then paste the deployed /exec URL into src/config/contact.js.
 */
const RECIPIENT_EMAIL = 'sumitpanchal5225@gmail.com';

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};
    const name = String(params.name || '').trim();
    const senderEmail = String(params.email || '').trim();
    const projectType = String(params.projectType || '').trim();
    const message = String(params.message || '').trim();

    if (!name || !senderEmail || !projectType || !message) {
      return jsonResponse({ ok: false, error: 'Missing required fields.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return jsonResponse({ ok: false, error: 'Invalid sender email.' });
    }

    const subject = 'Portfolio enquiry: ' + projectType;
    const body = [
      'A new enquiry was submitted through the Sumit Panchal portfolio.',
      '',
      'Name: ' + name,
      'Email: ' + senderEmail,
      'Project type: ' + projectType,
      '',
      'Message:',
      message
    ].join('\n');

    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, {
      replyTo: senderEmail,
      name: 'Sumit Panchal Portfolio'
    });
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'Unable to send email.' });
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'Sumit Panchal Portfolio contact endpoint' });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
