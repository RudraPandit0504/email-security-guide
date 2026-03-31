🛡️ Email Security Interactive Guide

An interactive, educational web application designed to demonstrate how modern email attacks work and how everyday users can protect themselves.

Live Demo: https://email-security-guide.vercel.app/

🚀 Overview

Over 90% of cyber breaches begin with a simple email. As attackers move away from easily detectable malware toward sophisticated social engineering and "Quishing" (QR Phishing), user education is the strongest line of defense.

This project was built to bridge the gap between technical security concepts and everyday digital habits.

Key Features:

Interactive Threat Analyzer: A mock inbox where users can "scan" emails to reveal hidden red flags like typosquatting and fake urgency.

Real-World Scenarios: Examples of Business Email Compromise (BEC), Phishing, and QR code attacks.

The "Rick Roll" Test: A functional QR code demonstration showing how attackers use URL shorteners to mask malicious destinations.

Actionable Defenses: Clear, non-technical advice on using MFA, verifying senders, and identifying "False Urgency."

🛠️ Built With

React - UI Framework

Vite - Build Tool

Tailwind CSS - Styling

Lucide React - Icon Library

📸 How It Works

The application uses a "Security Analysis" mode. When a user clicks Analyze Email, the app highlights specific parts of the message:

Domain Check: Points out subtle misspellings in sender addresses.

Psychological Triggers: Identifies language used to create panic.

Technical Obfuscation: Explains how link shorteners and QR codes hide true destinations.

🏁 Getting Started

If you are looking at this code for the first time, here is how the project is organized based on the file structure:

src/: Contains the React source code.

public/: Stores static assets for the QR demonstration.

index.html: The main entry point for the browser.

tailwind.config.js: Configuration for the styling engine.

To run this project locally:

Open your terminal in this folder.

Run npm install to set up dependencies.

Run npm run dev to start the local server.

🛡️ Best Practices for Users

If you take only three things away from this guide, let it be these:

Never scan a QR code from an email unless you were specifically expecting it and have verified the source.

Check the sender's address letter-by-letter. arnazon.com is not amazon.com.

Bypass the link. If your "bank" sends an urgent alert, don't click the link in the email. Close the email and go to the bank's website directly through your browser.

📄 License

This project is for educational purposes. Feel free to use it to teach others about cybersecurity!