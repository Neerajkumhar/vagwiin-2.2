# Deployment Guide - SPA Routing Fix

This project is a React Single Page Application (SPA). When deployed, all routes must redirect to `index.html` so React Router can handle the client-side routing.

## Configuration Files Included

### 1. **Netlify** (Most Recommended)
- **File**: `netlify.toml`
- **Steps**:
  1. Connect your GitHub repo to Netlify
  2. Set build command: `npm run build`
  3. Set publish directory: `dist`
  4. Deploy! (netlify.toml handles routing automatically)

### 2. **Vercel**
- **File**: `vercel.json`
- **Steps**:
  1. Connect your GitHub repo to Vercel
  2. Vercel auto-detects React projects
  3. Deploy! (vercel.json handles routing automatically)

### 3. **Apache Server**
- **File**: `.htaccess`
- **Steps**:
  1. Upload `.htaccess` to your `dist/` folder
  2. Ensure `mod_rewrite` is enabled on your server
  3. All routes will redirect to index.html

### 4. **Nginx Server**
Add this to your Nginx configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 5. **GitHub Pages**
Not recommended for SPA routing. Consider Netlify or Vercel instead.

## Testing Locally

```bash
npm run build
npm run preview
```

Then test these URLs:
- http://localhost:4173/
- http://localhost:4173/services
- http://localhost:4173/about

If they all work without 404 errors, production deployment will work too.

## Troubleshooting

**"Page Not Found" error after refresh?**
- Ensure the server redirects ALL requests to index.html
- Check that the appropriate config file (netlify.toml, vercel.json, or .htaccess) is in place
- For custom servers, verify the rewrite rules are configured correctly

**Routes work but assets (CSS/JS) don't load?**
- Check that your base path is correct in vite.config.js
- Verify dist folder is being deployed
- Check browser console for 404 errors on assets
