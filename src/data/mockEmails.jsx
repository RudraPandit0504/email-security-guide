import React from 'react';

export const MOCK_EMAILS = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
                        src="/benefits-qr.jpeg"
                        alt="Benefits Portal QR Code"
                        className="w-full h-full object-contain"
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
    },
    {
        id: 4,
        sender: 'Accounts Payable',
        emailAddress: 'billing-notices@secure-vendordocs.com',
        subject: 'Invoice 8841 Overdue - Remittance Copy Attached',
        date: '08:27 AM',
        isMalicious: true,
        content: (
            <div className="space-y-4">
                <p>Hello,</p>
                <p>Our records show invoice 8841 is now 14 days overdue. To avoid service disruption, please review the attached remittance copy and confirm payment today.</p>
                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-700">
                    <span>[Attachment]</span>
                    <span>Invoice_8841_Payment_Copy.zip</span>
                </div>
                <p>The compressed file contains the updated invoice and payment instructions. Open the document and enable editing if prompted so the totals display correctly.</p>
                <p>If we do not receive confirmation by end of day, your account may be placed on hold.</p>
                <p>Regards,<br />Vendor Collections Team</p>
            </div>
        ),
        flags: [
            { type: 'attachment', text: 'Invoice_8841_Payment_Copy.zip', reason: 'Suspicious Attachment: Attackers often hide malware inside ZIP archives to get around basic email filtering and make dangerous files look routine.' },
            { type: 'execution', text: 'enable editing if prompted', reason: 'Malware Delivery Tactic: Instructions to enable editing, content, or macros are a classic sign of document-based malware and ransomware campaigns.' },
            { type: 'pressure', text: 'service disruption... account may be placed on hold', reason: 'Payment Pressure: Financial urgency is used to push victims into opening attachments before verifying whether the invoice is real.' },
            { type: 'context', text: 'generic vendor notice', reason: 'Lack of Business Context: The message gives no specific project, contact, or purchase history that a legitimate invoice reminder would normally include.' }
        ]
    }
];
