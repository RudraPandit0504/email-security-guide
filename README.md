# Email Attack Awareness Guide

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

An interactive educational website that explains how email-based cyber attacks work, how to spot red flags, and what practical steps people can take to stay safer online.

This project is designed for awareness and presentation use. It is not a real email scanning or security tool.

## What the Website Includes

- A hero section and stats banner that introduce why email attacks matter
- An interactive inbox demo with realistic mock email examples
- Attack examples covering BEC, quishing, malware/ransomware, and AiTM
- A "Reveal Red Flags" view that explains suspicious details inside each email
- Supporting sections such as:
  - How to Verify an Email
  - What Happens After One Click
  - Real-World Consequences
  - How to Protect Yourself
  - What to Do If You Already Interacted

## Theme Support

- The website includes both light mode and dark mode
- The default theme on first launch is light mode
- If a user changes the theme, that preference is saved in local storage

## Built With

- React
- Tailwind CSS
- Lucide React
- Vite

## Project Purpose

The goal of this project is to make email security easier to understand for non-technical users. Instead of using dense cybersecurity jargon, the website focuses on:

- common attacker tactics
- realistic inbox examples
- simple habits people can actually follow
- presentation-friendly explanations for awareness sessions or class demos

## Running Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Presentation Use

This project works well for a group presentation because it naturally breaks into sections:

- One person can introduce email attacks and explain the statistics
- One person can walk through the interactive inbox examples
- One person can cover consequences, protection habits, and response steps

## Notes

- Mock email content is stored in `src/data/mockEmails.jsx`
- The main page layout is in `src/App.jsx`
- Reusable UI pieces such as cards and defense items are inside `src/components`
