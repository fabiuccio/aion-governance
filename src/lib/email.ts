import { Resend } from "resend";
import { getMaturityStage, SECTIONS, getSectionScore } from "./assessment-data";

const FROM = "AION Governance <onboarding@resend.dev>";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

async function send(params: Parameters<Resend["emails"]["send"]>[0]) {
  const resend = getResend();
  if (!resend) {
    console.error("[email] RESEND_API_KEY is not set");
    return;
  }
  const { data, error } = await resend.emails.send(params);
  if (error) {
    console.error("[email] Resend error:", error);
  } else {
    console.log("[email] Sent:", data?.id, "→", params.to);
  }
}

export async function sendAssessmentReport(params: {
  email: string;
  name: string | null;
  score: number;
  answers: Record<number, number>;
}) {
  const resend = getResend();
  if (!resend) return;

  const { email, name, score, answers } = params;
  const stage = getMaturityStage(score);
  const greeting = name ? `Hi ${name}` : "Hi";

  const sectionRows = SECTIONS.map((section) => {
    const s = getSectionScore(section.id, answers);
    const max = section.questions.length * 4;
    return `<tr>
      <td style="padding:8px 0;font-size:14px;color:#1c1f23;">${section.title}</td>
      <td style="padding:8px 0;font-size:14px;color:#1c1f23;text-align:right;font-weight:600;">${s}/${max}</td>
    </tr>`;
  }).join("");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f1ea;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f1ea;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr>
          <td style="background:#697989;padding:32px 40px;">
            <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">AION Governance</p>
            <h1 style="margin:8px 0 0;font-size:24px;color:#ffffff;font-weight:400;">Your AI Governance Maturity Report</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="font-size:15px;color:#1c1f23;margin:0 0 24px;">${greeting},</p>
            <p style="font-size:15px;color:#1c1f23;margin:0 0 32px;line-height:1.6;">
              Thank you for completing the assessment. Here are your results.
            </p>

            <div style="background:#f5f1ea;border-radius:8px;padding:24px;margin-bottom:32px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#697989;text-transform:uppercase;letter-spacing:1px;">Overall Score</p>
              <p style="margin:0;font-size:48px;color:#1c1f23;font-weight:300;">${score}<span style="font-size:20px;color:#9a9a9a;"> / 100</span></p>
              <p style="margin:8px 0 0;font-size:16px;color:#1c1f23;font-weight:600;">Stage ${stage.stage}: ${stage.name}</p>
            </div>

            <p style="font-size:15px;color:#1c1f23;margin:0 0 8px;line-height:1.6;">${stage.description}</p>

            <div style="border-left:3px solid #697989;padding-left:16px;margin:24px 0;">
              <p style="margin:0 0 4px;font-size:11px;color:#697989;text-transform:uppercase;letter-spacing:1px;">Recommended next step</p>
              <p style="margin:0;font-size:14px;color:#1c1f23;line-height:1.6;">${stage.recommendation}</p>
            </div>

            <h2 style="font-size:14px;color:#1c1f23;font-weight:600;margin:32px 0 8px;">Section breakdown</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e8e4dc;">
              ${sectionRows}
            </table>

            <div style="border-left:3px solid #8FA680;background:#f5f1ea;border-radius:0 6px 6px 0;padding:16px 20px;margin:32px 0 0;">
              <p style="margin:0 0 6px;font-size:12px;color:#697989;text-transform:uppercase;letter-spacing:1px;">One more thing</p>
              <p style="margin:0;font-size:15px;color:#1c1f23;line-height:1.6;">
                Questions about your score? Want to talk through what it means for your organisation, your board, or your team?
                <strong>Just reply to this email.</strong> Fabio reads and replies to every one personally.
              </p>
            </div>
            <hr style="border:none;border-top:1px solid #e8e4dc;margin:32px 0;"/>
          </td>
        </tr>
        <tr>
          <td style="background:#f5f1ea;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9a9a9a;">
              AION Governance · <a href="https://aion-governance.ch" style="color:#697989;">aion-governance.ch</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await send({
    from: FROM,
    to: email,
    subject: `Your AI Governance Maturity Report — Stage ${stage.stage}: ${stage.name} (${score}/100)`,
    html,
  });
}

export async function sendNewsletterConfirmation(email: string) {
  await send({
    from: FROM,
    to: email,
    subject: "Welcome to the AION Governance newsletter",
    html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:40px 20px;background:#f5f1ea;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;">
    <p style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#697989;margin:0 0 8px;">AION Governance</p>
    <h1 style="font-size:22px;font-weight:400;color:#1c1f23;margin:0 0 24px;">You're on the list</h1>
    <p style="font-size:15px;color:#1c1f23;line-height:1.6;margin:0 0 16px;">
      Thank you for subscribing. We'll send you essays, frameworks, and practical guidance on AI governance — no noise, no spam.
    </p>
    <p style="font-size:15px;color:#1c1f23;line-height:1.6;margin:0;">
      In the meantime, explore our <a href="https://aion-governance.ch/essays" style="color:#697989;">latest essays</a> or take the free
      <a href="https://aion-governance.ch/assessment" style="color:#697989;">AI Governance Maturity Assessment</a>.
    </p>
  </div>
</body>
</html>`,
  });
}

export async function sendBookUpdatesConfirmation(email: string) {
  await send({
    from: FROM,
    to: email,
    subject: "You'll hear when Govern or Fail is ready",
    html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:40px 20px;background:#f5f1ea;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;">
    <p style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#697989;margin:0 0 8px;">Govern or Fail</p>
    <h1 style="font-size:22px;font-weight:400;color:#1c1f23;margin:0 0 24px;">You're on the early access list</h1>
    <p style="font-size:15px;color:#1c1f23;line-height:1.6;margin:0 0 16px;">
      We'll let you know as soon as the book is available — along with any early access or pre-order opportunities.
    </p>
    <p style="font-size:15px;color:#1c1f23;line-height:1.6;margin:0;">
      While you wait, the free <a href="https://aion-governance.ch/assessment" style="color:#697989;">AI Governance Maturity Assessment</a>
      is a good place to start.
    </p>
  </div>
</body>
</html>`,
  });
}
