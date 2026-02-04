# Box It Storage - Landing Page

Production-ready HTML landing page for Box It Storage.

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `boxit-landing` (or whatever you prefer)
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Your Files
Two options:

**Option A: Using GitHub Web Interface (Easiest)**
1. Click "uploading an existing file"
2. Drag and drop both `index.html` AND `Boxit_logo.png`
3. Commit directly to main branch

**Option B: Using Git Command Line**
```bash
git clone https://github.com/YOUR-USERNAME/boxit-landing.git
cd boxit-landing
cp /path/to/index.html .
cp /path/to/Boxit_logo.png .
git add index.html Boxit_logo.png
git commit -m "Add landing page and logo"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main` and folder: `/ (root)`
5. Click "Save"

**Your site will be live at:**
`https://YOUR-USERNAME.github.io/boxit-landing/`

(Takes ~1 minute to deploy)

---

## 🎨 Replace Hero Image

The hero section has a placeholder on the left side. To add your own image:

1. **Get a good photo:**
   - Customer in their clean, spacious apartment
   - Driver picking up boxes
   - Happy customer with delivered boxes
   - Organized storage facility
   - Recommended size: 600x500px minimum

2. **Add the image to your repo:**
   - Upload image file (e.g., `hero-image.jpg`)
   - Or use a stock photo URL

3. **Update the HTML:**
   Find this section in `index.html`:
   ```html
   <div class="hero-image">
       <div class="hero-image-placeholder">
   ```
   
   Replace with:
   ```html
   <div class="hero-image" style="background-image: url('hero-image.jpg'); background-size: cover; background-position: center;">
   ```

---

## 🔧 Configure Stripe

Before going live, you need to add your Stripe Pricing Table:

1. **Create Stripe Pricing Table:**
   - Go to Stripe Dashboard → Products → Pricing tables
   - Click "Create pricing table"
   - Add your "Box It Membership" product ($25/month)
   - Configure fields to collect: Name, Email, Phone, Address, City, Zip
   - Set mode to "Setup" (saves card, $0 charged)
   - Click "Publish"

2. **Copy Embed Code:**
   - Stripe will give you code that looks like:
   ```html
   <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
   <stripe-pricing-table 
       pricing-table-id="prctbl_XXXXXX"
       publishable-key="pk_live_XXXXXX">
   </stripe-pricing-table>
   ```

3. **Replace Placeholder in index.html:**
   - Find the comment `<!-- REPLACE THIS SECTION WITH YOUR STRIPE CODE -->`
   - Replace the placeholder paragraph with your Stripe embed code
   - Commit and push changes

---

## 🌐 Add Custom Domain (Optional)

### Option 1: Use a Subdomain
If you own `familylaundry.com`:
1. Add DNS record: `CNAME storage.familylaundry.com → YOUR-USERNAME.github.io`
2. In GitHub Pages settings, add custom domain: `storage.familylaundry.com`

### Option 2: Buy New Domain
Popular registrars:
- Namecheap (~$10/year for `.com`)
- Google Domains
- Cloudflare

Then follow same steps as Option 1.

---

## 📝 Customization

### Update Contact Info
Find this section in the footer:
```html
<a href="mailto:hello@boxitstorage.com">Email</a>
<a href="tel:+15105551234">Phone</a>
```

Replace with your actual email and phone.

### Change Colors
Main brand colors are defined at the top of the `<style>` section:
- Purple gradient: `#667eea` and `#764ba2`
- Blue accent: `#3498DB`
- Dark text: `#2C3E50`

### Add Analytics (Optional)
Before `</body>`, add Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Pre-Launch Checklist

- [ ] Stripe Pricing Table embedded and tested
- [ ] Contact email/phone updated in footer
- [ ] Test on mobile (just resize browser window)
- [ ] Test signup flow with Stripe test mode
- [ ] Custom domain configured (optional)
- [ ] Share link with 2-3 friends for feedback

---

## 🐛 Troubleshooting

**"Stripe embed not showing"**
- Make sure you used `publishable-key` not `secret-key`
- Check browser console for errors (F12)
- Verify Stripe Pricing Table is published (not draft)

**"Site not updating"**
- GitHub Pages can take 1-2 minutes to rebuild
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check GitHub Actions tab for build status

**"Custom domain not working"**
- DNS changes take 24-48 hours to propagate
- Verify CNAME record points to `YOUR-USERNAME.github.io` (not the repo name)

---

## 💰 Costs

- GitHub Pages: **FREE**
- Custom domain: **~$10-15/year** (optional)
- Stripe: **2.9% + $0.30 per transaction** (only when customers pay)

**Total monthly cost: $0** ✨

---

## 🚀 Next Steps

After landing page is live:
1. Set up Airtable database
2. Configure Zapier automations
3. Build Softr customer portal
4. Test complete flow with beta customers

Good luck! 🎉
