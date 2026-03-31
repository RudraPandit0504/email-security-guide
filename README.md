# 🛡️ Email Security Interactive Guide

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An interactive platform designed to dismantle the mechanics of modern email attacks. Learn to spot deception before clicking.

🔗 **[View Live Demo](https://email-security-guide.vercel.app/)**

---

## 🚀 The Mission
Over **90% of cyber breaches** begin with a simple email. As attackers shift toward "Quishing" (QR Phishing) and social engineering, technical filters aren't enough. This project bridges the gap between complex security concepts and everyday digital habits through hands-on simulation.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🔍 Threat Analyzer** | A mock inbox where you can "scan" emails to reveal hidden red flags. |
| **🎭 Real-World Scenarios** | Simulate BEC (Business Email Compromise) and sophisticated phishing. |
| **📱 QR-Code Test** | A functional test demonstrating how link shorteners mask dangerous destinations. |
| **🛡️ Proactive Defenses** | Actionable advice on MFA, sender verification, and identifying psychological triggers. |

---

## 🛠️ Tech Stack
* **Frontend:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React

---

## 📸 How It Works
The **"Security Analysis"** mode deconstructs malicious emails into three core pillars:

1.  **Domain Integrity:** Highlighting subtle typosquatting (e.g., `rnicrosoft.com` vs `microsoft.com`).
2.  **Psychological Warfare:** Identifying "False Urgency" used to bypass critical thinking.
3.  **Technical Masking:** Explaining how QR codes and shortlinks bypass traditional email scanners.



---

## 🏁 Getting Started

### Project Structure
* `src/` — Core React logic and components.
* `public/` — Static assets and QR demonstration files.
* `tailwind.config.js` — Custom styling configurations.

### Local Setup
```bash
# Clone the repository
git clone [https://github.com/RudraPandit0504/email-security-guide.git](https://github.com/RudraPandit0504/email-security-guide.git)

# Install dependencies
npm install

# Launch development server
npm run dev