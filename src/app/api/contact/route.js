import nodemailer from "nodemailer";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";


export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();


    if (!name || !email || !message) {
      return Response.json({ success: false }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Email to YOU (Notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 New Enquiry: ${subject || 'Portfolio Contact'}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; padding: 10px !important; }
              .content { padding: 20px !important; }
              .header { padding: 20px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f5;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" class="container" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">🚀 New Contact Form Submission</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Someone visited your portfolio and wants to connect!</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td class="content" style="padding: 40px;">
                      
                      <!-- Alert Box -->
                      <table role="presentation" style="width: 100%; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 6px; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 16px;">
                            <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">📅 Received on ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Contact Details -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">From</p>
                            <p style="margin: 0; color: #111827; font-size: 18px; font-weight: 700;">${name}</p>
                            <p style="margin: 4px 0 0 0; color: #3b82f6; font-size: 14px;">
                              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Subject</p>
                            <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${subject || 'No Subject'}</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</p>
                            <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb;">
                              <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Action Button -->
                      <table role="presentation" style="width: 100%; margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: ${subject || 'Your Portfolio Enquiry'}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(102, 126, 234, 0.3);">Reply to ${name}</a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">This email was sent from your portfolio contact form</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // 2️⃣ Auto reply to USER (Confirmation)
    await transporter.sendMail({
      from: `"Rishi | Full Stack Developer" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "👋 Thanks for reaching out! I'll get back to you soon",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; padding: 10px !important; }
              .content { padding: 30px 20px !important; }
              .header { padding: 30px 20px !important; }
              h1 { font-size: 24px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0f172a;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" class="container" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
                  
                  <!-- Header with Pattern -->
                  <tr>
                    <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center; position: relative;">
                      <div style="font-size: 64px; margin-bottom: 10px;">✨</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Thanks for reaching out, ${name}!</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 12px 0 0 0; font-size: 16px; line-height: 1.5;">Your message has been received and I'll get back to you as soon as possible.</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td class="content" style="padding: 40px;">
                      
                      <!-- What to expect -->
                      <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 12px; padding: 24px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🚀</div>
                            <h3 style="margin: 0 0 8px 0; color: #166534; font-size: 16px; font-weight: 700;">Quick Response Time</h3>
                            <p style="margin: 0; color: #15803d; font-size: 14px; line-height: 1.5;">I typically respond within 24-48 hours during business days.</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Summary -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Your Message Summary</p>
                            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
                              <p style="margin: 0 0 8px 0; color: #475569; font-size: 13px; font-weight: 600;">Subject: <span style="color: #1e293b;">${subject || 'No Subject'}</span></p>
                              <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6; font-style: italic;">"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Section -->
                      <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #1e293b; border-radius: 12px; padding: 30px; text-align: center;">
                            <h3 style="margin: 0 0 12px 0; color: #ffffff; font-size: 18px; font-weight: 700;">While you wait...</h3>
                            <p style="margin: 0 0 20px 0; color: #94a3b8; font-size: 14px; line-height: 1.5;">Check out my latest projects and technical articles on my portfolio.</p>
                            <a href="${process.env.PORTFOLIO_URL || '#'}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; transition: all 0.2s;">View My Work →</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Divider -->
                      <table role="presentation" style="width: 100%; margin: 30px 0;">
                        <tr>
                          <td style="border-top: 1px solid #e2e8f0;"></td>
                        </tr>
                      </table>

                      <!-- Signature -->
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 700;">R</div>
                            <h3 style="margin: 0 0 4px 0; color: #1e293b; font-size: 18px; font-weight: 700;">Rishi</h3>
                            <p style="margin: 0 0 12px 0; color: #64748b; font-size: 14px;">Full Stack Developer</p>
                            
                            <!-- Social Links -->
                            <table role="presentation" style="margin: 0 auto;">
                              <tr>
                                <td style="padding: 0 8px;">
                                  <a href="${process.env.GITHUB_URL || '#'}" style="display: inline-block; width: 36px; height: 36px; background-color: #f1f5f9; border-radius: 50%; text-align: center; line-height: 36px; text-decoration: none; color: #475569; font-size: 16px;">💻</a>
                                </td>
                                <td style="padding: 0 8px;">
                                  <a href="${process.env.LINKEDIN_URL || '#'}" style="display: inline-block; width: 36px; height: 36px; background-color: #f1f5f9; border-radius: 50%; text-align: center; line-height: 36px; text-decoration: none; color: #475569; font-size: 16px;">💼</a>
                                </td>
                                <td style="padding: 0 8px;">
                                  <a href="${process.env.TWITTER_URL || '#'}" style="display: inline-block; width: 36px; height: 36px; background-color: #f1f5f9; border-radius: 50%; text-align: center; line-height: 36px; text-decoration: none; color: #475569; font-size: 16px;">🐦</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px;">You received this email because you contacted me through my portfolio.</p>
                      <p style="margin: 0; color: #cbd5e1; font-size: 11px;">© ${new Date().getFullYear()} Rishi. All rights reserved.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}