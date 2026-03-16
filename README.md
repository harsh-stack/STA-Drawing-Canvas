# Interactive Drawing Canvas WebApp (STA Final Project)


Software Testing & Automation (STA) Final Project at University of Massachusetts Dartmouth. Full-stack web application featuring interactive HTML5 canvas drawing, localStorage theme persistence, responsive toolbar, and comprehensive Selenium/Mocha test automation suite.

Team: Harsh Malviya (02197137) + Rohit Shirkeli (02186822)
​

Live Demo: https://harsh-stack.github.io/WebApp

## 🎨 Features
Feature	Description
Drawing Canvas	HTML5 <canvas> with mouse/touch support, variable brush size (1-20px)
Color Picker	Real-time color selection + preview
Toolbar Controls	Clear canvas, save/load themes (localStorage), brush size slider
Responsive Design	Mobile-first CSS: touch drawing + adaptive layout 
​
Navigation	Home/About/Gallery pages with sticky navbar
Persistence	Canvas themes auto-save/load across sessions 
​
## 🧪 Test Automation Coverage
100% Feature Coverage with dual testing approach:

1. Selenium E2E Tests (defaultSuite.spec.js)
​
Test ID	Tests
T1	Drawing → Save canvas (alert verification)
T2	Navigation: About→Home→Color picker toggle
T3	Drawing → Clear canvas (double-click)
T4	Toolbar: Eraser toggle + drawing
T5	Save theme → Reload → Verify persistence
T6	Multi-tool: Draw → Clear → Save → Load
Run: npx mocha defaultSuite.spec.js

2. Raw Selenium IDE Recordings (tests/*.side)
7 detailed test cases (TestCase1-2.side → TestCase6-7.side)

Import to Selenium IDE → Edit/Export to any language

Covers edge cases + full user flows

3. Whitebox Generator (test_tool.py)
​
Parses project specs + codebase

Auto-generates unit tests + GitHub Actions YAML

AST-based code analysis for function coverage

## 📁 Repository Structure
text
WebApp/
├── 📄 README.md                    # This file
├── 🖼️ index.html                   # Main drawing interface
├── 👥 about.html                    # Team + project info
├── 🖼️ gallery.html                 # Saved themes gallery
├── 🎨 style.css                     # Responsive design
├── ⚙️ script.js                     # Canvas + localStorage logic
├── 📦 package.json                  # Mocha + Selenium deps
├── 🔒 package-lock.json             # Locked dependencies
├── 🧪 defaultSuite.spec.js          # Compiled E2E tests
├── 🤖 test_tool.py                  # Whitebox test generator
├── 📁 tests/                        # Raw Selenium IDE projects
│   ├── TestCase1-2.side
│   ├── TestCase3-4.side
│   ├── TestCase4-5.side
│   ├── TestCase5-6.side
│   ├── TestCase6-7.side
│   └── TestCase7.side
└── 📱 screenshots/ (optional)
    ├── drawing-demo.png
    └── tests-passing.png
## 🚀 Quick Start & Deployment
Local Development
bash
## Clone
git clone https://github.com/harsh-stack/WebApp.git
cd WebApp

## Install (optional, static files)
npm install

## Live server
npx live-server    # or open index.html directly

## Run tests
npx mocha defaultSuite.spec.js
Production Deploy (GitHub Pages)
Settings → Pages → Deploy from main

Live: https://harsh-stack.github.io/WebApp

## 🛠️ Tech Stack & Architecture
text
Frontend: Vanilla JS + HTML5 Canvas API + CSS Grid/Flexbox
State: localStorage (themes, brush settings)
Testing: Selenium WebDriver + Mocha BDD
Automation: GitHub Actions-ready (test_tool.py)
Deployment: Static hosting (GitHub Pages/Netlify/Vercel)
No frameworks = lightweight (60KB total) + maximum learning.

## 📱 Responsive Breakpoints
Screen	Features
Mobile (<768px)	Touch drawing, stacked toolbar
Tablet (768-1024px)	Horizontal toolbar
Desktop (>1024px)	Full canvas + sidebar preview
🎯 Learning Outcomes Demonstrated
✅ Canvas API mastery: Mouse events, path drawing, stroke styles
✅ State persistence: localStorage serialization/deserialization
✅ Test automation: E2E Selenium + whitebox generation
✅ Responsive design: CSS media queries + flexible layouts
✅ CI/CD ready: Automated testing pipeline

## 📈 Demo Screenshots
Drawing Interface

Toolbar Controls

Mocha Tests Passing

Mobile View

## 👥 Team
Name	Enrollment ID
Harsh Malviya	02197137
Rohit Shirkeli	02186822
Course: Software Testing & Automation Final Project
Institution: University of Massachusetts Dartmouth
​

## 📄 License & Citation
text
Malviya, H., & Shirkeli, R. (2025). Interactive Drawing Canvas WebApp 
with Selenium Test Automation. UMass Dartmouth STA Final Project.
GitHub: https://github.com/harsh-stack/WebApp
License: MIT
## 💼 Author
Harsh Malviya
MS Data Science Candidate | Full-Stack + Testing
🌐 Portfolio: https://harshmalviya.com/ | 🐙 GitHub

