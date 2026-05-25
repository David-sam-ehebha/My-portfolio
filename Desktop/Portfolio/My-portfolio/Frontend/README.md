# MyFolio - Professional Portfolio

This is a modern, responsive portfolio built with Next.js, Tailwind CSS, and Firebase.

## Features

- **Responsive Design**: Optimized for all devices.
- **Firebase Integration**: Contact form messages are stored in Firestore.
- **Admin Dashboard**: View and manage incoming inquiries at `/admin`.
- **AI Assistant**: Tools to help generate project descriptions and bio drafts.

## How to push to GitHub

To push this code to your repository (`https://github.com/David-sam-ehebha/My-portfolio.git`), follow these steps in your terminal:

1. **Initialize the repository**:
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Initial commit: MyFolio with Firebase and Admin Dashboard"
   ```

4. **Add the remote origin**:
   ```bash
   git remote add origin https://github.com/David-sam-ehebha/My-portfolio.git
   ```

5. **Rename branch to main**:
   ```bash
   git branch -M main
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

## How to Deploy to Firebase

To make your portfolio live on the internet:

1. **Go to the Firebase Console**: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. **Create a Project**: Click "Add project" and follow the setup steps.
3. **Set up App Hosting**:
   - In the left sidebar, click **Build** -> **App Hosting**.
   - Click **Get started**.
   - Connect your GitHub account and select your `My-portfolio` repository.
   - Choose your branch (e.g., `main`).
   - Firebase will automatically detect it's a Next.js app and start the deployment.
4. **Access your Database**:
   - Go to **Firestore Database** in the console to see your contact form messages.

## Quick Tips: Opening the Terminal

If you're not sure how to open the terminal:
- **VS Code**: Press `Ctrl + \`` (the backtick key).
- **Windows**: Search for `PowerShell` or `Command Prompt`.
- **Mac**: Press `Cmd + Space` and search for `Terminal`.

## Getting Started Locally

To run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
