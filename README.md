# 🎬 Hassen Movie Gallery

Next.js 15 · Firebase · Gemini AI · PWA · Gondar, Ethiopia

## Setup

```bash
# 1. Install
npm install

# 2. Environment
cp .env.local.example .env.local
# Fill in Firebase + Google AI keys

# 3. Run
npm run dev
```

## Firebase Setup

1. console.firebase.google.com → New Project
2. Firestore → Create Database
3. Authentication → Anonymous → Enable
4. Project Settings → Web App → Copy config to .env.local

## Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Vercel Deploy

1. Push to GitHub
2. vercel.com → Import repo
3. Add Environment Variables
4. Deploy ✅

## Contact
- Tel: +251920500200
- Telegram: t.me/hassenmoviegallery
