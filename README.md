# Portfolio Website - Alejandro López Robles

A modern, responsive portfolio website showcasing professional experience, expertise, and projects. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy deployment.

## 🚀 Features

- Responsive design that works on all devices
- Video background with modal playback
- Smooth scrolling navigation
- Interactive project showcase
- Professional experience timeline
- Tech stack visualization
- Contact integration with email and social links

## 📁 Project Structure

```
├── assets/
│   ├── images/          # Profile, projects, and brand images
│   ├── landing.mp4      # Background video
│   └── resume.pdf       # Downloadable resume
├── css/
│   ├── style.css        # Main styles
│   └── responsive.css   # Mobile responsive styles
├── js/
│   └── main.js          # Interactive functionality
└── index.html           # Main HTML file
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## 📦 Installation & Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. No build process or dependencies required

```bash
# If you want to use a local server
npx serve .
# or
python -m http.server 8000
```

## 🌐 Deployment Methods

### 1. GitHub Pages (Free)

**Steps:**
1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select branch (usually `main`) and root folder
5. Click Save

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

**Custom Domain:**
- Add a `CNAME` file with your domain name
- Configure DNS with your domain provider:
  - Type: `CNAME`
  - Name: `www` or `@`
  - Value: `yourusername.github.io`

**URL:** `https://yourusername.github.io/repository-name`

---

### 2. Netlify (Free)

**Method A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag your project folder to the deploy zone
4. Done! Your site is live

**Method B: Git Integration**
1. Connect your GitHub/GitLab/Bitbucket account
2. Select your repository
3. Configure build settings (leave empty for static sites)
4. Deploy

**Method C: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS:
  - Type: `CNAME`
  - Name: `www`
  - Value: `your-site.netlify.app`

**Features:**
- Automatic HTTPS
- Continuous deployment from Git
- Form handling
- Serverless functions support

---

### 3. Vercel (Free)

**Method A: Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

**Method B: Git Integration**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Configure project (no build settings needed)
4. Deploy

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain
- Configure DNS:
  - Type: `A`
  - Name: `@`
  - Value: `76.76.21.21`
  - Type: `CNAME`
  - Name: `www`
  - Value: `cname.vercel-dns.com`

**Features:**
- Edge network (fast global delivery)
- Automatic HTTPS
- Preview deployments for PRs
- Analytics

---

### 4. Cloudflare Pages (Free)

**Steps:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Configure build:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy

**Direct Upload:**
```bash
npm install -g wrangler
wrangler login
wrangler pages publish . --project-name=portfolio
```

**Custom Domain:**
- Automatically configured if domain is on Cloudflare
- Or add custom domain in Pages settings

**Features:**
- Cloudflare CDN
- Unlimited bandwidth
- DDoS protection
- Web Analytics

---

### 5. Firebase Hosting (Free)

**Steps:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project or create new one
# Set public directory to: .
# Configure as single-page app: No
# Set up automatic builds: No
firebase deploy
```

**Custom Domain:**
1. Go to Firebase Console → Hosting
2. Add custom domain
3. Verify ownership
4. Configure DNS as instructed

**Features:**
- Google's CDN
- Automatic SSL
- Fast hosting
- Integration with Firebase services

---

### 6. AWS S3 + CloudFront

**Steps:**

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://your-portfolio-bucket
aws s3 website s3://your-portfolio-bucket --index-document index.html
```

2. **Upload Files:**
```bash
aws s3 sync . s3://your-portfolio-bucket --exclude ".git/*"
```

3. **Set Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
  }]
}
```

4. **Create CloudFront Distribution:**
- Origin: Your S3 bucket
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Default Root Object: `index.html`

**Custom Domain:**
- Request SSL certificate in AWS Certificate Manager
- Add domain to CloudFront distribution
- Configure DNS:
  - Type: `CNAME`
  - Name: `www`
  - Value: `d111111abcdef8.cloudfront.net`

---

### 7. Azure Static Web Apps (Free)

**Steps:**
1. Go to [Azure Portal](https://portal.azure.com)
2. Create Static Web App resource
3. Connect to GitHub repository
4. Configure:
   - App location: `/`
   - Output location: (leave empty)
5. Deploy

**Custom Domain:**
- Go to Custom Domains in Azure Portal
- Add domain and configure DNS as instructed

---

### 8. DigitalOcean App Platform (Free Tier)

**Steps:**
1. Go to [DigitalOcean](https://www.digitalocean.com)
2. Create new App
3. Connect GitHub repository
4. Select Static Site
5. Deploy

**Custom Domain:**
- Add domain in App settings
- Configure DNS:
  - Type: `CNAME`
  - Name: `www`
  - Value: `your-app.ondigitalocean.app`

---

### 9. Render (Free)

**Steps:**
1. Go to [render.com](https://render.com)
2. New Static Site
3. Connect repository
4. Configure:
   - Build Command: (leave empty)
   - Publish Directory: `.`
5. Deploy

**Custom Domain:**
- Add custom domain in settings
- Configure DNS as instructed

---

### 10. Surge.sh (Free)

**Steps:**
```bash
npm install -g surge
surge
# Follow prompts to deploy
```

**Custom Domain:**
```bash
surge --domain yourdomain.com
```

Configure DNS:
- Type: `CNAME`
- Name: `www`
- Value: `na-west1.surge.sh`

---

## 🔧 Configuration

### Update Personal Information

Edit `index.html` to update:
- Name and title
- Social media links
- Email address
- Resume PDF
- Project details
- Experience timeline

### Customize Styling

Edit `css/style.css` and `css/responsive.css` to change:
- Colors and theme
- Fonts
- Layout and spacing
- Animations

### Add/Remove Sections

Modify `index.html` structure and update `js/main.js` navigation accordingly.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Alejandro López Robles**
- Email: flowsgzx@gmail.com
- LinkedIn: [linkedin.com/in/alejandro-lopez](https://linkedin.com/in/alejandro-lopez)
- GitHub: [github.com/alejandro-lopez97](https://github.com/alejandro-lopez97)

---

## 🎯 Quick Deploy Commands

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# Firebase
firebase deploy

# Surge
surge

# AWS S3
aws s3 sync . s3://your-bucket --exclude ".git/*"
```

Choose the platform that best fits your needs. All options provide free tiers suitable for portfolio websites.
