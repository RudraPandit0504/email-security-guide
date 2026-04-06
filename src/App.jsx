import React, { useEffect, useState } from 'react';
import { ShieldAlert, Mail, Search, AlertTriangle, CheckCircle, ShieldCheck, FileText, Smartphone, UserX, Link as LinkIcon, Eye, Moon, Sun } from 'lucide-react';
import { MOCK_EMAILS } from './data/mockEmails';
import AttackCard from './components/AttackCard';
import DefenseItem from './components/DefenseItem';

export default function App() {
  const [activeEmailId, setActiveEmailId] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeEmail = MOCK_EMAILS.find(e => e.id === activeEmailId);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('email-security-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('email-security-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleEmailSelect = (id) => {
    setActiveEmailId(id);
    setIsAnalyzing(false);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>

      {/* HERO SECTION */}
      <header className={`py-24 px-6 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.22)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-12 h-12 text-sky-400" />
              <span className="text-sky-400 font-semibold tracking-wider uppercase text-base md:text-lg">Email Security Awareness</span>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm md:text-base font-medium transition-colors ${isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border-slate-700/40 bg-white/10 text-white hover:bg-white/20'}`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">Email Attack Awareness Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Over 90% of cyber breaches begin with an email. Attackers use deceptive tactics, fake urgency, and psychological manipulation to trick you. Learn how to spot the red flags and avoid getting scammed.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* INTERACTIVE DEMO SECTION */}
        <section id="interactive-demo" className="scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spot the Red Flags</h2>
            <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Look through the sample inbox below and open any email that catches your attention. When you're ready, click "Reveal Red Flags" to see the warning signs and understand what makes it suspicious.
            </p>
          </div>

          <div className={`rounded-2xl shadow-xl overflow-hidden border flex flex-col md:flex-row h-[720px] transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            {/* Inbox Sidebar */}
            <div className={`w-full md:w-1/3 border-r flex flex-col h-full ${isDarkMode ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
              <div className={`p-5 border-b font-semibold text-lg flex items-center justify-between ${isDarkMode ? 'border-slate-800 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-100 text-slate-700'}`}>
                <span>Inbox</span>
                <span className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-sky-500/15 text-sky-300' : 'bg-sky-100 text-sky-700'}`}>{MOCK_EMAILS.length}</span>
              </div>
              <div className="overflow-y-auto flex-1">
                {MOCK_EMAILS.map((email) => (
                  <button
                    key={email.id}
                    onClick={() => handleEmailSelect(email.id)}
                    className={`w-full text-left p-5 border-b transition-colors ${isDarkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-100 hover:bg-slate-100'} ${activeEmailId === email.id ? (isDarkMode ? 'bg-sky-500/10 border-l-4 border-l-sky-400' : 'bg-sky-50 border-l-4 border-l-sky-600') : 'border-l-4 border-l-transparent'
                      }`}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className={`font-semibold text-base md:text-lg truncate pr-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{email.sender}</span>
                      <span className={`text-sm whitespace-nowrap ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{email.date}</span>
                    </div>
                    <div className={`text-base font-medium truncate ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{email.subject}</div>
                    <div className="text-sm text-slate-500 truncate mt-2">{email.emailAddress}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Content Area */}
            <div className={`w-full md:w-2/3 flex flex-col h-full relative ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
              {/* Email Header */}
              <div className={`p-7 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{activeEmail.subject}</h3>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-500'}`}>
                      {activeEmail.sender.charAt(0)}
                    </div>
                    <div>
                      <div className={`text-lg font-medium ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{activeEmail.sender}</div>
                      <div className={`text-base flex items-center gap-1 flex-wrap ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        &lt;{activeEmail.emailAddress}&gt;
                        {isAnalyzing && activeEmail.isMalicious && (
                          <span className={`inline-flex items-center text-sm px-3 py-1 rounded-full ml-2 ${isDarkMode ? 'text-rose-200 bg-rose-500/15' : 'text-red-600 bg-red-100'}`}>
                            <AlertTriangle className="w-4 h-4 mr-1" /> Spoofed/Fake
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{activeEmail.date}</div>
                </div>
              </div>

              {/* Email Body */}
              <div className={`p-7 flex-1 overflow-y-auto text-lg leading-relaxed relative ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                {activeEmail.content}

                {/* Analysis Overlay */}
                {isAnalyzing && (
                  <div className={`mt-8 pt-6 border-t animate-in fade-in slide-in-from-bottom-4 duration-500 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <h4 className="font-bold text-2xl mb-5 flex items-center gap-2">
                      <Search className={`w-6 h-6 ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`} />
                      Red Flag Breakdown
                    </h4>

                    {activeEmail.isMalicious ? (
                      <div className="space-y-4">
                        <div className={`p-4 border rounded-lg text-lg flex items-start gap-3 mb-4 ${isDarkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-100' : 'bg-red-50 border-red-200 text-red-800'}`}>
                          <AlertTriangle className="w-6 h-6 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Malicious Intent Detected.</strong> This email exhibits multiple indicators of a coordinated cyber attack.
                          </div>
                        </div>

                        {activeEmail.flags.map((flag, idx) => (
                          <div key={idx} className={`border p-5 rounded-lg shadow-sm ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-sky-200'}`}>
                            <div className={`text-sm uppercase font-bold mb-2 tracking-wider ${isDarkMode ? 'text-sky-300' : 'text-sky-700'}`}>{flag.type}</div>
                            <div className={`font-mono text-base px-3 py-2 rounded inline-block mb-3 border break-words ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'}`}>"{flag.text}"</div>
                            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{flag.reason}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`p-5 border rounded-lg text-lg flex items-start gap-3 ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-100' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
                        <CheckCircle className="w-7 h-7 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>No Threats Detected.</strong>
                          <p className="text-base mt-2 leading-relaxed">Domain matches known internal records, language is standard, and no malicious payloads were found. However, always remain vigilant.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className={`p-5 border-t flex justify-end ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <button
                  onClick={() => setIsAnalyzing(!isAnalyzing)}
                  className={`px-7 py-3 rounded-lg text-base md:text-lg font-medium transition-colors flex items-center gap-2 ${isAnalyzing
                      ? (isDarkMode ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300')
                      : (isDarkMode ? 'bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-md' : 'bg-sky-600 text-white hover:bg-sky-700 shadow-md')
                    }`}
                >
                  {isAnalyzing ? (
                    <><Eye className="w-5 h-5" /> Hide Red Flags</>
                  ) : (
                    <><Search className="w-5 h-5" /> Reveal Red Flags</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES OF ATTACKS GRID */}
        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Email Scams</h2>
            <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Threat actors continuously evolve their tactics. Understanding the specific mechanics of these attacks is the first step in defending against them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
            <div className="xl:col-span-2">
              <AttackCard
                icon={<Mail className="w-7 h-7 text-sky-500" />}
                title="Phishing & Spear Phishing"
                description="These emails try to trick you into clicking a link, sharing a password, or giving away personal information. Some are generic, while others are written to target one specific person."
                isDarkMode={isDarkMode}
              />
            </div>
            <div className="xl:col-span-2">
              <AttackCard
                icon={<LinkIcon className="w-7 h-7 text-cyan-500" />}
                title="Typosquatting"
                description="This is when a sender uses a web address that looks almost real at first glance. One small spelling change can make a fake email look trustworthy."
                isDarkMode={isDarkMode}
              />
            </div>
            <div className="xl:col-span-2">
              <AttackCard
                icon={<UserX className="w-7 h-7 text-cyan-500" />}
                title="Business Email Compromise (BEC)"
                description="In this type of scam, someone pretends to be a boss, coworker, or vendor and asks for money or sensitive information. The message often feels urgent so the victim acts without double-checking."
                isDarkMode={isDarkMode}
              />
            </div>
            <div className="xl:col-span-2 xl:col-start-2">
              <AttackCard
                icon={<FileText className="w-7 h-7 text-sky-500" />}
                title="Malware & Ransomware"
                description="These emails carry harmful attachments or files. If someone opens them, they can install malware, lock files, or spread damage through the system."
                isDarkMode={isDarkMode}
              />
            </div>
            <div className="md:col-span-2 xl:col-span-2 xl:col-start-4">
              <AttackCard
                icon={<Smartphone className="w-7 h-7 text-sky-500" />}
                title="Quishing (QR Phishing)"
                description="Instead of a normal link, the email includes a QR code. Scanning it can send you to a fake website or login page without making the danger obvious right away."
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Verify an Email</h2>
            <p className={`text-xl md:text-2xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Before clicking anything, slow down and check the small details. Most suspicious emails reveal themselves when you know where to look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
            {[
              {
                title: 'Sender',
                desc: 'Check whether the display name matches the actual email address.'
              },
              {
                title: 'Domain',
                desc: 'Look for misspellings, extra words, or lookalike characters in the domain.'
              },
              {
                title: 'Urgency',
                desc: 'Be careful with emails pushing deadlines, threats, or emotional pressure.'
              },
              {
                title: 'Links & Attachments',
                desc: 'Hover over links and question unexpected files, especially ZIPs or login prompts.'
              },
              {
                title: 'Tone & Context',
                desc: 'Ask whether the request fits your real work, recent activity, or normal company process.'
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`border rounded-2xl p-7 md:p-8 shadow-sm min-h-[220px] md:col-span-1 xl:col-span-2 ${idx === 3 ? 'xl:col-start-2' : ''} ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <div className={`text-lg md:text-xl font-semibold uppercase tracking-wide mb-4 ${isDarkMode ? 'text-sky-300' : 'text-sky-700'}`}>{item.title}</div>
                <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Happens After One Click</h2>
            <p className={`text-xl md:text-2xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              A single click can lead to far more than one mistake. Attackers use that moment to move quickly from inbox access to real damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'You land on a fake login page and hand over your username and password.',
              'The attacker captures your session and may bypass MFA using stolen cookies.',
              'A malicious file runs in the background and installs malware or ransomware.',
              'The compromised account is then used to target coworkers, customers, or financial systems.'
            ].map((step, idx) => (
              <div key={idx} className={`rounded-2xl p-8 md:p-10 shadow-lg min-h-[250px] ${isDarkMode ? 'bg-slate-900 border border-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-800'}`}>
                <div className={`text-lg md:text-xl font-bold mb-5 ${isDarkMode ? 'text-sky-400' : 'text-sky-700'}`}>Step {idx + 1}</div>
                <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-World Consequences</h2>
            <p className={`text-xl md:text-2xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Email attacks are not just technical problems. They can disrupt daily work, cost money, and damage trust across an entire organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Credential Theft',
                desc: 'A stolen password can expose email, cloud storage, and internal systems.'
              },
              {
                title: 'Financial Fraud',
                desc: 'BEC scams can redirect payments, payroll, or vendor transfers within minutes.'
              },
              {
                title: 'Operational Downtime',
                desc: 'Ransomware can lock files, interrupt work, and delay normal business operations.'
              },
              {
                title: 'Data Exposure',
                desc: 'Sensitive employee, customer, or company information can be leaked or sold.'
              }
            ].map((item) => (
              <div key={item.title} className={`border rounded-2xl p-8 md:p-9 shadow-sm min-h-[240px] ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{item.title}</h3>
                <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      {/* DEFENSE STRATEGIES */}
        <section id="defense-strategies" className="scroll-mt-24">
          <div className={`rounded-3xl overflow-hidden shadow-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className={`p-10 md:p-14 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3">
                <ShieldCheck className={`w-10 h-10 ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`} />
                How to Protect Yourself
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Technical Defenses */}
                <div className="space-y-6">
                  <h3 className={`text-2xl font-semibold border-b pb-3 ${isDarkMode ? 'text-sky-400 border-slate-700' : 'text-sky-700 border-slate-200'}`}>Behind the Scenes</h3>

                  <DefenseItem
                    title="Inbox Filters Catch the Obvious Stuff"
                    desc="Most email services already block a huge number of scam messages before you ever see them, but they are not perfect, which is why some still slip through."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Verified Domains Matter"
                    desc="Checks like SPF, DKIM, and DMARC help mail providers tell whether a message really came from the company it claims to be from."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Browsers Warn You for a Reason"
                    desc="If your browser throws up a phishing or unsafe-site warning, do not click past it just to see what is there. That warning is often the save."
                    isDarkMode={isDarkMode}
                  />
                </div>

                {/* Human Defenses */}
                <div className="space-y-6">
                  <h3 className={`text-2xl font-semibold border-b pb-3 ${isDarkMode ? 'text-cyan-300 border-slate-700' : 'text-cyan-700 border-slate-200'}`}>Everyday Habits for You</h3>

                  <DefenseItem
                    title="Slow Down Before You Click"
                    desc="If an email pushes urgency, asks for money, or wants a login, pause for a moment and check whether the request makes sense."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Check the Sender Properly"
                    desc="Do not stop at the display name. Look at the full email address and the domain, especially when the message claims to be from IT, HR, a bank, or a boss."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Go to the Site Yourself"
                    desc="Instead of using the link in the email, open a new tab and type the website address yourself. That one habit avoids a lot of phishing pages."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Report It Instead of Just Deleting It"
                    desc="Reporting suspicious emails helps other people too, especially in schools and workplaces where the same message may have reached many inboxes."
                    isDarkMode={isDarkMode}
                  />
                  <DefenseItem
                    title="Turn On 2FA Where You Can"
                    desc="If someone does get your password, two-factor authentication can still stop them from getting into the account."
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What to Do If You Already Interacted</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Even if someone clicked, downloaded, or replied, the situation can still be contained. Fast action matters more than panic.
            </p>
          </div>

          <div className={`border rounded-3xl shadow-lg p-8 md:p-10 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Disconnect from suspicious pages or downloads immediately.',
                'Change the password for the affected account as soon as possible.',
                'Revoke active sessions and enable or recheck multi-factor authentication.',
                'Report the incident to IT, your teacher, or the responsible security contact.',
                'Run a malware scan if any file was opened or installed.',
                'Warn anyone else who may have received the same email.'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sky-500 mt-0.5 flex-shrink-0" />
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-10 text-center transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <ShieldAlert className="w-6 h-6 text-sky-400" />
            <span className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Email Attack Awareness Guide</span>
          </div>
          <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Built to help people slow down, spot suspicious emails, and understand how common attacks work. <br />
            A little caution goes a long way when something in your inbox feels off.
          </p>
        </div>
      </footer>
    </div>
  );
}
