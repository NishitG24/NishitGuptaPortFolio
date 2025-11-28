# Free Deployment Guide - Vercel (₹0 Cost)

## Step 1: Prepare Your Code

1. Make sure `.env` is in `.gitignore` ✅ (Already done)
2. Build your project locally to test:
```bash
npm run build
```

## Step 2: Deploy to Vercel (FREE)

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts and deploy!

### Option B: Using Vercel Dashboard (Easier)

1. Go to https://vercel.com
2. Sign up with GitHub (free)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings
6. Click "Deploy"

## Step 3: Secure Environment Variables

### In Vercel Dashboard:

1. Go to your project → Settings → Environment Variables
2. Add variable:
   - **Name**: `GMAIL_APP_PASSWORD`
   - **Value**: `eejtughwmcoolfas` (your actual password)
   - **Environment**: Production, Preview, Development
3. Click "Save"

### Important Security Notes:

✅ **DO**: 
- Keep `.env` in `.gitignore`
- Use Vercel's environment variables dashboard
- Use Gmail App Passwords (not your actual Gmail password)
- Rotate passwords regularly

❌ **DON'T**:
- Commit `.env` to Git
- Share your `.env` file
- Use your actual Gmail password

## Step 4: Update API URLs for Production

Your app will automatically work on Vercel because:
- Frontend is served from `/dist`
- Backend API is at `/api/*`
- Vercel handles routing via `vercel.json`

## Alternative Free Hosting Options:

### 1. **Render.com** (FREE)
- Free tier: 750 hours/month
- Deploy: https://render.com
- Add environment variables in dashboard

### 2. **Railway.app** (FREE)
- $5 free credit monthly
- Deploy: https://railway.app
- Add environment variables in settings

### 3. **Netlify + Netlify Functions** (FREE)
- 100GB bandwidth/month
- Deploy: https://netlify.com
- Use Netlify Functions for backend

## Recommended: Vercel

**Why Vercel?**
- ✅ Completely FREE for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Easy environment variable management
- ✅ Automatic deployments from Git
- ✅ Zero configuration needed

## Post-Deployment Checklist:

1. ✅ Test contact form (send yourself a test email)
2. ✅ Verify book images load
3. ✅ Test resume download
4. ✅ Check all sections display correctly
5. ✅ Test on mobile devices

## Your Live URL:
After deployment, you'll get a URL like:
`https://your-portfolio-name.vercel.app`

You can also add a custom domain for FREE!

## Need Help?
- Vercel Docs: https://vercel.com/docs
- Contact form issues? Check Vercel logs
