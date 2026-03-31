# 🛡️ Email Attack Simulator (Educational)

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

A simple, interactive web app built to demonstrate how common email scams work. This is a **learning project** designed to help "normal people" recognize red flags and avoid getting scammed.

🔗 **[View the Project](https://email-security-guide.vercel.app/)**

---

## 📖 What is this?
This isn't a professional security tool. It’s a **demonstration sandbox** created to show the "tricks" attackers use in your inbox. Since 90% of hacks start with an email, the goal here is to bridge the gap between technical jargon and real-life habits.

### What you can do here:
* **🔍 Analyze Scams:** Use the "Analyze" button in the mock inbox to see exactly where a scammer is trying to trick you.
* **🎭 Spot the Fakes:** Look at examples of fake CEO emails, "urgent" IT alerts, and HR updates.
* **📱 The QR Test:** Scan a functional QR code to see how attackers hide where a link is actually taking you (it's a safe surprise!).
* **✅ Learn Defenses:** Simple, non-technical steps anyone can take to keep their accounts safe.

---

## 📸 How the Simulation Works
The app uses an **"Analysis Mode"** to break down a suspicious email into three simple red flags:

1.  **The Sender:** Spotting tiny misspellings in email addresses (like `rnicrosoft` instead of `microsoft`).
2.  **The Panic:** Identifying "False Urgency" designed to make you act before you think.
3.  **The Hidden Link:** Explaining how QR codes and link shorteners mask the final destination.



---

## 🛠️ Built With
* **React** - For the interactive interface.
* **Tailwind CSS** - For a clean, modern design.
* **Lucide React** - For the icons.
* **Vite** - For a fast development experience.

---

## 🏁 Running it Locally
If you want to see how the code works or add your own email examples:

```bash
# Clone the project
git clone [https://github.com/RudraPandit0504/email-security-guide.git](https://github.com/RudraPandit0504/email-security-guide.git)

# Install the parts
npm install

# Run the app
npm run dev