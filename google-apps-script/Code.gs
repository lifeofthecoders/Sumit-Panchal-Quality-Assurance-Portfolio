
/**
 * SUMIT PANCHAL
 * Senior Quality Assurance Portfolio
 *
 * Professional Contact Form Email Service
 *
 * Deployment:
 * Execute as: Me
 * Who has access: Anyone
 */

const RECIPIENT_EMAIL = 'sumitpanchal5225@gmail.com';

const PORTFOLIO_NAME =
  'Sumit Panchal - Senior Quality Assurance Portfolio';

const PORTFOLIO_URL =
  'https://sumit-panchal-quality-assurance-por.vercel.app/';

const SENDER_NAME = 'Sumit Panchal Portfolio';


// ==========================================
// CONTACT FORM EMAIL HANDLER
// ==========================================

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};

    const name = String(params.name || '').trim();
    const senderEmail = String(params.email || '').trim();
    const projectType = String(params.projectType || '').trim();
    const message = String(params.message || '').trim();

    // Validate required fields
    if (!name || !senderEmail || !projectType || !message) {
      return jsonResponse({
        ok: false,
        error: 'Please complete all required fields.'
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return jsonResponse({
        ok: false,
        error: 'Invalid email address.'
      });
    }

    // Escape visitor input before inserting into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(senderEmail);
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

    // Email subject
    const subject =
      'New Project Enquiry | ' + projectType +
      ' | Sumit Panchal QA Portfolio';

    // Plain-text fallback
    const plainBody = [
      'NEW PROJECT ENQUIRY',
      '',
      'SUMIT PANCHAL - SENIOR QUALITY ASSURANCE PORTFOLIO',
      '',
      'Portfolio Website: ' + PORTFOLIO_URL,
      'Enquiry Source: Portfolio Contact Form',
      '',
      'VISITOR INFORMATION',
      'Name: ' + name,
      'Email: ' + senderEmail,
      'Project Type: ' + projectType,
      '',
      'PROJECT REQUIREMENTS',
      message,
      '',
      'PORTFOLIO SOURCE',
      PORTFOLIO_URL,
      '',
      'Thank you.',
      'Sumit Panchal',
      'Senior Quality Assurance Analyst'
    ].join('\n');

    // Professional HTML email
    const htmlBody = `
      <div style="
        margin:0;
        padding:35px 15px;
        background-color:#f4f5f7;
        font-family:Arial,Helvetica,sans-serif;
        color:#252525;
      ">

        <div style="
          max-width:650px;
          margin:0 auto;
          background:#ffffff;
          border:1px solid #e7e7e7;
        ">

          <!-- Header -->
          <div style="
            padding:28px 32px;
            background:#111111;
            border-bottom:4px solid #dc263b;
          ">
            <div style="
              color:#ffffff;
              font-size:21px;
              font-weight:bold;
              letter-spacing:1px;
              text-align:center;
            ">
              SUMIT PANCHAL
            </div>

            <div style="
              margin-top:8px;
              color:#bcbcbc;
              font-size:11px;
              letter-spacing:2px;
              line-height:1.7;
              text-align:center;
            ">
              SENIOR QUALITY ASSURANCE PORTFOLIO
            </div>
          </div>

          <!-- Main content -->
          <div style="padding:32px;">

            <div style="
              color:#dc263b;
              font-size:11px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              New Website Enquiry
            </div>

            <h1 style="
              margin:12px 0 10px;
              font-size:25px;
              line-height:1.3;
              color:#171717;
              font-weight:700;
            ">
              You have received a new project enquiry.
            </h1>

            <p style="
              margin:0 0 28px;
              color:#666666;
              font-size:14px;
              line-height:1.8;
            ">
              ${safeName} has reached out to you regarding a potential project. 
              Here are the details of their enquiry.
            </p>

            <!-- Visitor Information -->
            <div style="
              padding:20px;
              background:#f8f8f8;
              border-left:3px solid #dc263b;
              margin-bottom:25px;
            ">
              <h2 style="
                margin:0 0 18px;
                font-size:14px;
                color:#171717;
                letter-spacing:1px;
              ">
                VISITOR INFORMATION
              </h2>

              <table style="
                width:100%;
                border-collapse:collapse;
                font-size:13px;
              ">
                <tr>
                  <td style="padding:9px 0;color:#777;width:115px;">
                    Name
                  </td>
                  <td style="padding:9px 0;color:#222;font-weight:600;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">
                    Email
                  </td>
                  <td style="padding:9px 0;">
                    <a href="mailto:${safeEmail}"
                       style="color:#d5253b;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">
                    Project Type
                  </td>
                  <td style="padding:9px 0;color:#222;font-weight:600;">
                    ${safeProjectType}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Project Message -->
            <div style="margin-bottom:28px;">

              <h2 style="
                margin:0 0 14px;
                font-size:14px;
                color:#171717;
                letter-spacing:1px;
              ">
                PROJECT REQUIREMENTS
              </h2>

              <div style="
                padding:20px;
                background:#ffffff;
                border:1px solid #e8e8e8;
                color:#444444;
                font-size:14px;
                line-height:1.9;
                word-break:break-word;
              ">
                ${safeMessage}
              </div>

            </div>

            <!-- Portfolio Source -->
            <div style="
              padding:20px;
              background:#fafafa;
              border:1px solid #e9e9e9;
              margin-bottom:28px;
            ">

              <h2 style="
                margin:0 0 14px;
                font-size:13px;
                color:#171717;
                letter-spacing:1px;
              ">
                ENQUIRY SOURCE
              </h2>

              <p style="
                margin:0 0 10px;
                color:#777777;
                font-size:12px;
              ">
                Portfolio Name
              </p>

              <p style="
                margin:0 0 16px;
                color:#222222;
                font-size:13px;
                font-weight:600;
                line-height:1.6;
              ">
                ${PORTFOLIO_NAME}
              </p>

              <p style="
                margin:0 0 9px;
                color:#777777;
                font-size:12px;
              ">
                Source Website URL
              </p>

              <a href="${PORTFOLIO_URL}"
                 target="_blank"
                 style="
                   color:#d5253b;
                   font-size:13px;
                   font-weight:600;
                   text-decoration:none;
                   word-break:break-all;
                 ">
                ${PORTFOLIO_URL}
              </a>

              <p style="
                margin:16px 0 0;
                color:#777777;
                font-size:12px;
              ">
                Submission Method: Portfolio Contact Form
              </p>

            </div>

            <!-- Call to Action -->
            <div style="text-align:center;margin:30px 0;">

              <a href="${PORTFOLIO_URL}"
                 target="_blank"
                 style="
                   display:inline-block;
                   padding:14px 26px;
                   background:#dc263b;
                   color:#ffffff;
                   font-size:12px;
                   font-weight:bold;
                   letter-spacing:1px;
                   text-decoration:none;
                 ">
                VISIT YOUR PORTFOLIO
              </a>

            </div>

          </div>

          <!-- Footer -->
          <div style="
            padding:23px 30px;
            background:#111111;
            text-align:center;
          ">

            <div style="
              color:#ffffff;
              font-size:14px;
              font-weight:bold;
              letter-spacing:1px;
            ">
              SUMIT PANCHAL
            </div>

            <div style="
              margin-top:8px;
              color:#aaaaaa;
              font-size:11px;
              line-height:1.8;
            ">
              Senior Quality Assurance Analyst<br>
              Manual Testing | Functional Testing | Software Quality
            </div>

            <div style="
              margin-top:16px;
              padding-top:15px;
              border-top:1px solid #333333;
              color:#777777;
              font-size:10px;
              line-height:1.7;
            ">
              This email was automatically generated by your
              portfolio contact form.<br>
              Portfolio: Sumit Panchal - Senior Quality Assurance Portfolio
            </div>

          </div>

        </div>
      </div>
    `;

    // Send professional HTML email
    GmailApp.sendEmail(
      RECIPIENT_EMAIL,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        replyTo: senderEmail,
        name: SENDER_NAME
      }
    );

    return jsonResponse({
      ok: true,
      message: 'Your enquiry has been sent successfully.'
    });

  } catch (error) {

    console.error('Contact Form Error:', error);

    return jsonResponse({
      ok: false,
      error: 'Unable to send your enquiry. Please try again.'
    });
  }
}


// ==========================================
// HTML ESCAPING
// ==========================================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


// ==========================================
// ENDPOINT HEALTH CHECK
// ==========================================

function doGet() {
  return jsonResponse({
    ok: true,
    service: PORTFOLIO_NAME,
    website: PORTFOLIO_URL,
    status: 'Contact endpoint is running.'
  });
}


// ==========================================
// JSON RESPONSE
// ==========================================

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
