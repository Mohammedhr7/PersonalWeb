# GitHub Setup Guide

Your project is now ready to be pushed to GitHub! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `personal-portfolio` (or any name you prefer)
   - **Description**: "Personal portfolio website for Mohammed Harrous"
   - **Visibility**: Choose "Public" or "Private"
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** check "Add .gitignore" (we already have one)
   - **DO NOT** check "Choose a license"
5. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files uploaded
3. Your README.md should display on the main page

## Step 4: Deploy to GitHub Pages (Optional)

If you want to host your portfolio on GitHub Pages:

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/personal-portfolio`

## Future Updates

To update your repository after making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Need Help?

If you encounter any issues:
- Make sure you're logged into GitHub in your browser
- Check that the repository URL is correct
- Ensure you have write permissions to the repository
