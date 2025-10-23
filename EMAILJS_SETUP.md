# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form actually send emails to your inbox.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Set the "To Email" field to: `m.harrous9240@uca.ac.ma`
5. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Code

Replace the placeholder values in `components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## Step 6: Test Your Contact Form

1. Run your project: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Free Plan Limits

- EmailJS free plan allows 200 emails per month
- Perfect for personal portfolio websites
- Upgrade to paid plan if you need more emails

## Security Note

The public key is safe to use in frontend code. EmailJS handles the security on their end.
