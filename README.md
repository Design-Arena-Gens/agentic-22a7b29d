# Website Banane Ka Tarika

Ek end-to-end Next.js guide jo website banane ke practical steps ko cover karta hai &mdash; planning se lekar Vercel deployment tak.

## 🚀 Local Development

1. Dependencies install karein:

   ```bash
   npm install
   ```

2. Development server chalayein:

   ```bash
   npm run dev
   ```

3. Browser mein `http://localhost:3000` open karein.

## 🛠️ Scripts

- `npm run dev` – Next.js dev server
- `npm run build` – Production build generate karta hai
- `npm run start` – Production server
- `npm run lint` – ESLint checks

## 🧱 Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Primary landing page
├── components/           # UI building blocks
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies & scripts
└── tsconfig.json         # TypeScript settings
```

## 📦 Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript

## 📄 Deployment

Project Vercel ke saath ready hai. Production deploy ke liye:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-22a7b29d
```
