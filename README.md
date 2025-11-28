# Nishit Gupta - Portfolio Website

Modern React portfolio showcasing professional SDET experience and published books.

## Features
- React + Vite frontend
- Node.js backend API
- Email contact form (Gmail)
- Books section with Amazon images
- Professional experience timeline
- Skills & certifications showcase

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Gmail for contact form:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate an app password
   - Create `.env` file:
```bash
GMAIL_APP_PASSWORD=your-16-digit-app-password
```

3. Run development:
```bash
# Terminal 1 - Backend API
npm run server

# Terminal 2 - Frontend
npm run dev
```

4. Build for production:
```bash
npm run build
```
