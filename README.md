# Email Kitchen with RedwoodSDK

A [RedwoodSDK](https://rwsdk.com) demo project with email functionality using [Resend](https://resend.com) and [react-email](https://https://react.email).

👉 [Documentation for Sending Email](https://docs.rwsdk.com/guides/email/sending-email)

## Quick Start

```shell
pnpm install
pnpm dev
```

## Prerequisites

- You'll need a [Cloudflare](https://cloudflare.com) account (only if deploying)
- [Resend](https://resend.com) account and an API Key
- [Node.js v22+](https://nodejs.org/en/download)

## Environment Setup

1. Copy `.env.example` to `.env`
2. Add your `RESEND_API_KEY` to the `.env` file

## Email Development

This project includes the react-email-starter for email template development:

```shell
cd react-email-starter
pnpm install
pnpm dev
```

### Email Templates

- `src/app/email/` directory contains email templates
  - `WelcomeEmail.tsx`: Welcome email template

### Testing Emails

1. Start the development server `pnpm dev`
2. Navigate to `http://localhost:5173/send` in your browser to test sending emails

## RedwoodSDK Features

This project is built on RedwoodSDK and includes:

- React
- Vite
- Database (Prisma via D1)
- Session Management (via DurableObjects)
- Passkey authentication (Webauthn)

## Deploying

```shell
pnpm release
```

Then, you'll need to deploy your `RESEND_API`:

```
npx wrangler secret put RESEND_API
```

THen, when prompted, provide the your Resend API key.


## Documentation

- [RedwoodSDK Documentation](https://docs.rwsdk.com/)
- [Cloudflare Workers Secrets](https://developers.cloudflare.com/workers/runtime-apis/secrets/)
- [Resend](https://resend.com)
- [React Email](https://react.email/)
