# Next.js Todo App

This is a full-featured Todo application built with Next.js, React, TypeScript, and Bun. It supports social authentication (Google and GitHub) using NextAuth.js, and is deployed on Netlify.

## Features

- Add, edit, and delete todos
- Pagination and error boundaries
- Social sign-in with Google and GitHub
- Protected routes for authenticated users
- Responsive, modern UI with Material UI
- Error and 404 test pages

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) (package manager)
- [NextAuth.js](https://next-auth.js.org/) (authentication)
- [Material UI](https://mui.com/) (UI components)
- [Netlify](https://www.netlify.com/) (deployment)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/nextjs-todo.git
cd nextjs-todo
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

> **Note:** For local development, use your local OAuth credentials and callback URLs. For production (Netlify), use your production credentials and URLs.

### 4. Run the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication Setup

- **Google:** Register your app in [Google Cloud Console](https://console.cloud.google.com/), add both local and production callback URLs.
- **GitHub:** Register your app in [GitHub Developer Settings](https://github.com/settings/developers). You may need two apps: one for local, one for production.

## Deployment

This app is deployed on Netlify with Bun:

1. Push your code to GitHub (do not commit `.env.local`).
2. Set all environment variables in Netlify’s dashboard.
3. Deploy your site.

## Folder Structure

- `app/` — Next.js app router pages and API routes
- `components/` — React components
- `hooks/` — Custom React hooks
- `lib/` — Auth configuration
- `providers/` — Context providers
- `public/` — Static assets
- `utils/` — Utility functions

## Security Notes

- **Never commit secrets or `.env.local` to your repository.**
- Use Netlify’s environment variables for production secrets.

## License

MIT
