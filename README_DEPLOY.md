# Deploying to GitHub Pages

This guide explains how to deploy your static HTML site to GitHub Pages and add a custom domain.

## Deployment to GitHub Pages

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub.
   - Link your local repo: `git remote add origin https://github.com/username/repo-name.git`
   - Push: `git push -u origin main`

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder.
   - Click **Save**.

## Adding a Custom Domain

1. **Configure GitHub Pages**:
   - In the same **Pages** settings menu, look for **Custom domain**.
   - Enter your domain name (e.g., `www.example.com`) and click **Save**.

2. **Configure DNS Records** (at your domain provider):
   - **A Records**: Point your domain to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record**: Point `www` to your GitHub Pages URL (e.g., `username.github.io`).

3. **Enforce HTTPS**:
   - Once DNS propagates, check **Enforce HTTPS** in GitHub Pages settings.
