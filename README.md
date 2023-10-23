```markdown
# Soft Quantifier Survey Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About

This application is designed to collect and analyze user data on vague quantifier interpretations. The application is hosted on [vaguequantifiers.com](http://vaguequantifiers.com).

## Firebase Function

A serverless function is implemented in `functions/index.js` that triggers on the creation of a document in the `responses` collection. This function iterates over each field in `response.responses` and updates the corresponding document in the `quantifiers` collection in a transaction. This ensures that the quantifiers are updated in real-time as new responses are added.

### Testing the Function

To test the function locally, you can use the Firebase Emulator Suite. Follow these steps:

1. Install the Firebase CLI and login to your Firebase account.
2. Initialize the Firebase Emulator Suite in your project directory.
3. Start the emulators with `firebase emulators:start`.
4. Add a new document to the `responses` collection and verify that the corresponding document in the `quantifiers` collection is updated correctly.

### Deploying the Function

Once you have tested the function and confirmed that it works as expected, you can deploy it to Firebase with the following command:

```bash
firebase deploy --only functions
```

This will make the function live and it will start processing new responses as they are added to the `responses` collection.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```