import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests from the contact form and sends an email via SMTP
export async function POST(req: Request) {
  try {
    // Parse JSON body submitted from the client form
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const message = String(body?.message || "").trim();

    // Basic validation: require essential fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // SMTP configuration is provided via environment variables (.env.local)
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    // If using port 465, 'secure' must be true. Otherwise typically false for 587/STARTTLS
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const mailFrom = process.env.MAIL_FROM || user || "";
    const mailTo = process.env.MAIL_TO || user || "";

    // Ensure all required SMTP fields are present
    if (!host || !user || !pass || !mailFrom || !mailTo) {
      return NextResponse.json(
        { error: "SMTP environment variables not set" },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter using provided SMTP settings
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // Plain-text fallback (used by some clients)
    const subject = `New Contact Message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    // Escape user-provided content to avoid HTML injection in the email body
    const escape = (s: string) =>
      s.replace(
        /[&<>"']/g,
        (c) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          }[c] as string)
      );
    const safeName = escape(name);
    const safeEmail = escape(email);
    const safePhone = escape(phone);
    const safeMessage = escape(message).replace(/\n/g, "<br/>");
    // Styled HTML email content
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#166534;color:#ffffff;padding:20px 24px;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;">
              CNG-Tech Edge Limited
            </td>
          </tr>
          <tr>
            <td style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:16px;line-height:1.5;">
              <p style="margin:0 0 16px;">You have received a new contact message.</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Name</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Email</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Phone</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safePhone}</td>
                </tr>
              </table>
              <p style="margin:16px 0 8px;color:#6b7280;">Message</p>
              <div style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;color:#111827;">${safeMessage}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f9fafb;color:#6b7280;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
              Sent via cngtechedgeltd.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>
</html>`;

    // Send message. 'replyTo' allows responding directly to the sender's email
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text,
      html,
      replyTo: email,
    });

    const confirmSubject = "We received your message";
    const confirmText = `Hello ${name},\n\nThank you for contacting CNG-Tech Edge Limited. We have received your message and will get back to you shortly.\n\nSummary:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\n— CNG-Tech Edge Limited`;
    const confirmHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#166534;color:#ffffff;padding:20px 24px;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;">
              CNG-Tech Edge Limited
            </td>
          </tr>
          <tr>
            <td style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:16px;line-height:1.5;">
              <p style="margin:0 0 16px;">Hello ${safeName},</p>
              <p style="margin:0 0 16px;">Thanks for reaching out. We’ve received your message and our team will respond shortly.</p>
              <p style="margin:16px 0 8px;color:#6b7280;">Your Submission</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Name</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Email</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:140px;">Phone</td>
                  <td style="padding:8px 0;color:#111827;font-weight:600;">${safePhone}</td>
                </tr>
              </table>
              <p style="margin:16px 0 8px;color:#6b7280;">Message</p>
              <div style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;color:#111827;">${safeMessage}</div>
              <p style="margin:16px 0 0;color:#6b7280;font-size:14px;">If you didn’t submit this, please ignore this email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f9fafb;color:#6b7280;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
              Sent via cngtechedgeltd.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>
</html>`;

    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
