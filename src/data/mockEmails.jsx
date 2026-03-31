import React from 'react';

export const MOCK_EMAILS = [
    {
        id: 1,
        sender: 'IT Support Team',
        emailAddress: 'admin@rnicrosoft-support.com',
        subject: 'URGENT: Your account will be suspended in 2 hours',
        date: '10:42 AM',
        isMalicious: true,
        content: (
            <div className="space-y-4">
                <p>Dear Customer,</p>
                <p>We have detected unusual login activity on your account from an unrecognized device. To protect your data, we will be suspending your account in exactly 2 hours unless you verify your identity.</p>
                <p>Please click the secure link below to update your security credentials immediately:</p>
                <div className="p-3 bg-blue-50 text-blue-600 underline rounded cursor-pointer inline-block">
                    [https://secure-login.rnicrosoft-support.com/auth/verify](https://secure-login.rnicrosoft-support.com/auth/verify)
                </div>
                <p>Failure to complete this verification will result in permanent data loss.</p>
                <p>Thank you,<br />IT Security Desk</p>
            </div>
        ),
        flags: [
            { type: 'domain', text: 'rnicrosoft-support.com', reason: 'Typosquatting: Uses "rn" instead of "m" to mimic Microsoft. Legitimate emails come from known, official domains.' },
            { type: 'urgency', text: 'suspended in 2 hours', reason: 'False Urgency: Attackers use tight deadlines to induce panic and force you to act without thinking.' },
            { type: 'greeting', text: 'Dear Customer', reason: 'Generic Greeting: Legitimate organizations usually address you by your actual name.' },
            { type: 'link', text: 'secure-login.rnicrosoft...', reason: 'Malicious Payload: The link directs to a fake credential-harvesting site, not the official service.' }
        ]
    },
    {
        id: 2,
        sender: 'Sarah Jenkins (CEO)',
        emailAddress: 'sarah.jenkins@company-exec.net',
        subject: 'Confidential: Wire Transfer Request',
        date: '09:15 AM',
        isMalicious: true,
        content: (
            <div className="space-y-4">
                <p>Hi,</p>
                <p>Are you at your desk? I am currently in a closed-door board meeting and cannot take any calls.</p>
                <p>We are finalizing a surprise acquisition and I need you to process an expedited wire transfer of $42,500 to our legal consultant in the next 30 minutes to secure the contract.</p>
                <p>Please reply immediately and I will send you the beneficiary routing details. Keep this strictly confidential.</p>
                <p>Sent from my iPhone</p>
            </div>
        ),
        flags: [
            { type: 'domain', text: '@company-exec.net', reason: 'Domain Spoofing/Alteration: The CEO\'s real email would be @company.com. Attackers register similar domains.' },
            { type: 'procedure', text: 'process an expedited wire transfer', reason: 'Bypassing Procedures: Requests for money that bypass standard financial approval channels are a major red flag.' },
            { type: 'isolation', text: 'cannot take any calls... strictly confidential', reason: 'Isolation Tactics: Attackers isolate the victim so they cannot verify the request with colleagues.' }
        ]
    },
    {
        id: 3,
        sender: 'David Chen',
        emailAddress: 'david.chen@company.com',
        subject: 'Project Alpha Q3 Report',
        date: 'Yesterday',
        isMalicious: false,
        content: (
            <div className="space-y-4">
                <p>Hi Team,</p>
                <p>Attached is the finalized Q3 performance report for Project Alpha. We hit 95% of our target metrics, which is a great result.</p>
                <p>Let's discuss the remaining action items during our sync tomorrow at 10 AM. You can review the document on our internal secure SharePoint drive.</p>
                <p>Best regards,<br />David</p>
            </div>
        ),
        flags: []
    },
    {
        id: 4,
        sender: 'HR Department',
        emailAddress: 'hr-updates@workplace-benefits.io',
        subject: 'Mandatory: Annual Benefits Enrollment QR',
        date: 'Yesterday',
        isMalicious: true,
        content: (
            <div className="space-y-4">
                <p>Hello Employee,</p>
                <p>It is time for your annual benefits enrollment. Starting this year, we are transitioning to a mobile-first secure portal.</p>
                <p>Please open the camera on your smartphone and scan the QR code below to log in and select your health plans for the upcoming year.</p>
                <div className="w-32 h-32 bg-white border border-slate-300 p-2 shadow-sm inline-block">
                    <img
                        src="/Rick Roll.jpeg"
                        alt="Benefits Portal QR Code"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "[https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg](https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg)";
                        }}
                    />
                </div>
                <p>If you do not complete this by Friday, your current benefits will expire.</p>
            </div>
        ),
        flags: [
            { type: 'quishing', text: 'Scannable QR Code', reason: 'Quishing (QR Phishing): Attackers use QR codes to bypass traditional email link scanners and move the attack to your less-protected mobile device.' },
            { type: 'obfuscation', text: 'Hidden shortlink', reason: 'Link Obfuscation: The QR code hides the true destination using a URL shortener (like TinyURL or Bit.ly) so your phone scanner doesn\'t immediately show you the suspicious website.' },
            { type: 'consequence', text: 'benefits will expire', reason: 'Threat of Negative Consequence: Forcing action through fear of losing healthcare or financial benefits.' }
        ]
    }
];
