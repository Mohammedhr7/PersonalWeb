# Quick EmailJS Setup (5 minutes)

## Step 1: Create EmailJS Account
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (it's free)
3. Use your email: m.harrous9240@uca.ac.ma

## Step 2: Add Email Service
1. In dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your email provider)
4. Connect your Gmail account
5. **Copy the Service ID** (starts with "service_")

## Step 3: Create Email Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `New message from {{from_name}}`

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Set "To Email" to: `m.harrous9240@uca.ac.ma`
5. Click "Save"
6. **Copy the Template ID** (starts with "template_")

## Step 4: Get Public Key
1. Click "Account" in the menu
2. **Copy the Public Key** (also called User ID)

## Step 5: Update Your Code
Replace these lines in components/Contact.tsx:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Test
1. Run: `npm run dev`
2. Go to contact form
3. Fill it out and send a test message
4. Check your email!

## Need Help?
If you get stuck, just tell me and I'll help you with any step!
