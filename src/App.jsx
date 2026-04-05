import React, { useState } from 'react';
import { ShieldAlert, Mail, Search, AlertTriangle, CheckCircle, ShieldCheck, FileText, Smartphone, UserX, Link as LinkIcon, Server, Eye } from 'lucide-react';
import { MOCK_EMAILS } from './data/mockEmails';
import AttackCard from './components/AttackCard';
import DefenseItem from './components/DefenseItem';

export default function App() {
  const [activeEmailId, setActiveEmailId] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const activeEmail = MOCK_EMAILS.find(e => e.id === activeEmailId);

  const handleEmailSelect = (id) => {
    setActiveEmailId(id);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* HERO SECTION */}
      <header className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-10 h-10 text-red-400" />
            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">Email Security Awareness</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Email Attacks</span> Pull People In
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Over 90% of cyber breaches begin with an email. Attackers use deceptive tactics, fake urgency, and psychological manipulation to trick you. Learn how to spot the red flags and avoid getting scammed.
          </p>
        </div>
      </header>

      {/* STATS BANNER */}
      <div className="bg-blue-600 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-blue-400/50">
          <div className="px-4 text-center">
            <div className="text-3xl font-bold mb-1">3.4 Billion+</div>
            <div className="text-blue-100 text-sm">Malicious emails sent every single day</div>
          </div>
          <div className="px-4 text-center">
            <div className="text-3xl font-bold mb-1">90%</div>
            <div className="text-blue-100 text-sm">Of successful cyber attacks start with a phishing email</div>
          </div>
          <div className="px-4 text-center">
            <div className="text-3xl font-bold mb-1">400%</div>
            <div className="text-blue-100 text-sm">Increase in "Quishing" (QR code attacks) since 2023</div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* INTERACTIVE DEMO SECTION */}
        <section id="interactive-demo" className="scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Interactive Threat Analyzer</h2>
            <p className="text-slate-600">
              Step into the shoes of a security analyst. Browse the mock inbox below. Select an email, read it carefully, and click "Analyze Email" to reveal hidden social engineering and technical red flags.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row h-[600px]">
            {/* Inbox Sidebar */}
            <div className="w-full md:w-1/3 border-r border-slate-200 bg-slate-50 flex flex-col h-full">
              <div className="p-4 border-b border-slate-200 bg-slate-100 font-semibold text-slate-700 flex items-center justify-between">
                <span>Inbox</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{MOCK_EMAILS.length}</span>
              </div>
              <div className="overflow-y-auto flex-1">
                {MOCK_EMAILS.map((email) => (
                  <button
                    key={email.id}
                    onClick={() => handleEmailSelect(email.id)}
                    className={`w-full text-left p-4 border-b border-slate-100 hover:bg-slate-100 transition-colors ${activeEmailId === email.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'border-l-4 border-l-transparent'
                      }`}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-slate-800 truncate pr-2">{email.sender}</span>
                      <span className="text-xs text-slate-500 whitespace-nowrap">{email.date}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-700 truncate">{email.subject}</div>
                    <div className="text-xs text-slate-500 truncate mt-1">{email.emailAddress}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Content Area */}
            <div className="w-full md:w-2/3 flex flex-col h-full bg-white relative">
              {/* Email Header */}
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{activeEmail.subject}</h3>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                      {activeEmail.sender.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{activeEmail.sender}</div>
                      <div className="text-sm text-slate-500 flex items-center gap-1">
                        &lt;{activeEmail.emailAddress}&gt;
                        {isAnalyzing && activeEmail.isMalicious && (
                          <span className="inline-flex items-center text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full ml-2">
                            <AlertTriangle className="w-3 h-3 mr-1" /> Spoofed/Fake
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">{activeEmail.date}</div>
                </div>
              </div>

              {/* Email Body */}
              <div className="p-6 flex-1 overflow-y-auto text-slate-700 relative">
                {activeEmail.content}

                {/* Analysis Overlay */}
                {isAnalyzing && (
                  <div className="mt-8 pt-6 border-t border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      Security Analysis Results
                    </h4>

                    {activeEmail.isMalicious ? (
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-start gap-3 mb-4">
                          <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Malicious Intent Detected.</strong> This email exhibits multiple indicators of a coordinated cyber attack.
                          </div>
                        </div>

                        {activeEmail.flags.map((flag, idx) => (
                          <div key={idx} className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
                            <div className="text-xs uppercase font-bold text-orange-600 mb-1 tracking-wider">{flag.type}</div>
                            <div className="font-mono text-sm bg-slate-100 px-2 py-1 rounded inline-block mb-2 border border-slate-200">"{flag.text}"</div>
                            <p className="text-sm text-slate-600">{flag.reason}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>No Threats Detected.</strong>
                          <p className="text-sm mt-1">Domain matches known internal records, language is standard, and no malicious payloads were found. However, always remain vigilant.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setIsAnalyzing(!isAnalyzing)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${isAnalyzing
                      ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    }`}
                >
                  {isAnalyzing ? (
                    <><Eye className="w-4 h-4" /> Hide Analysis</>
                  ) : (
                    <><Search className="w-4 h-4" /> Analyze Email</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES OF ATTACKS GRID */}
        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Common Attack Vectors</h2>
            <p className="text-slate-600">
              Threat actors continuously evolve their tactics. Understanding the specific mechanics of these attacks is the first step in defending against them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttackCard
              icon={<Mail className="w-6 h-6 text-blue-500" />}
              title="Phishing & Spear Phishing"
              description="Emails that use social engineering to trick you into revealing passwords or clicking bad links. They often look exactly like official emails from banks or popular services."
            />
            <AttackCard
              icon={<UserX className="w-6 h-6 text-purple-500" />}
              title="Business Email Compromise (BEC)"
              description="Attackers impersonate executives or trusted vendors to trick finance teams into wiring money or changing payroll details. No malicious links are used; it relies entirely on authority and deception."
            />
            <AttackCard
              icon={<FileText className="w-6 h-6 text-red-500" />}
              title="Malware & Ransomware"
              description="Emails carrying disguised executable files, malicious scripts (.vbs, .js), or macro-laden documents. Once opened, they encrypt the network and demand payment."
            />
            <AttackCard
              icon={<LinkIcon className="w-6 h-6 text-orange-500" />}
              title="Typosquatting & Spoofing"
              description="Registering domains that look visually identical to legitimate ones (e.g., rnicrosoft.com instead of microsoft.com) to bypass casual human inspection."
            />
            <AttackCard
              icon={<Smartphone className="w-6 h-6 text-teal-500" />}
              title="Quishing (QR Phishing)"
              description="Embedding malicious QR codes in emails. Security scanners can't easily read them, and they force users to switch to personal, less-secure mobile devices to complete the attack."
            />
            <AttackCard
              icon={<Server className="w-6 h-6 text-indigo-500" />}
              title="AiTM (Adversary-in-the-Middle)"
              description="Advanced phishing that intercepts the login process in real-time, allowing attackers to bypass traditional Multi-Factor Authentication (MFA) by stealing session cookies."
            />
          </div>
        </section>

        {/* DEFENSE STRATEGIES */}
        <section id="defense-strategies" className="scroll-mt-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                How to Protect Yourself
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Technical Defenses */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-emerald-400 border-b border-slate-700 pb-2">Behind the Scenes</h3>

                  <DefenseItem
                    title="Spam Filters & Gateways"
                    desc="Email providers like Gmail and Outlook use complex rules to analyze incoming messages and block obvious scams from ever reaching your inbox."
                  />
                  <DefenseItem
                    title="Domain Authentication (SPF/DKIM/DMARC)"
                    desc="Invisible digital signatures that help your email provider verify if a message claiming to be from 'Bank of America' actually came from them."
                  />
                  <DefenseItem
                    title="Browser Warnings"
                    desc="Modern web browsers maintain lists of dangerous websites and will show a bright red warning page if you click a known phishing link."
                  />
                </div>

                {/* Human Defenses */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400 border-b border-slate-700 pb-2">Everyday Habits for You</h3>

                  <DefenseItem
                    title="Verify Before You Trust"
                    desc="If an email asks for money, passwords, or urgent action, do not click the links. Visit the website manually or call the organization directly."
                  />
                  <DefenseItem
                    title="Pause and Think"
                    desc="Scammers rely on panic. If an email says your account will be deleted in 2 hours, take a breath. Urgency is the #1 sign of a scam."
                  />
                  <DefenseItem
                    title="Use Two-Factor Authentication (2FA)"
                    desc="Enable 2FA on all your important accounts. Even if a scammer tricks you into giving them your password, they still can't log in."
                  />
                  <DefenseItem
                    title="Report and Block"
                    desc="Don't just delete bad emails. Use the 'Report Spam' or 'Report Phishing' button to help protect yourself and others in the future."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <ShieldAlert className="w-5 h-5 text-slate-500" />
            <span className="font-semibold text-slate-300">CyberEdu Project</span>
          </div>
          <p className="text-sm">
            Educational purposes only. Always consult IT security professionals for implementing enterprise defense systems. <br />
            Statistics referenced reflect cybersecurity landscape data up to 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
