# Alternative: Backend Email Solution

If you prefer to have your own backend server, here's how to set up a simple Node.js/Express server with email functionality.

## Option 2: Simple Backend with Nodemailer

### 1. Create Backend Directory

```bash
mkdir backend
cd backend
npm init -y
```

### 2. Install Dependencies

```bash
npm install express nodemailer cors dotenv
npm install -D @types/node @types/express @types/nodemailer typescript ts-node nodemon
```

### 3. Create Backend Server

Create `backend/server.js`:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS  // your email password or app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: 'm.harrous9240@uca.ac.ma',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 4. Create Environment File

Create `backend/.env`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 5. Update Frontend

Update your Contact component to use the backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 6. Run Backend

```bash
cd backend
node server.js
```

## Option 3: Netlify Forms (If hosting on Netlify)

If you're hosting on Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to your form
2. Add hidden input for Netlify
3. Netlify will handle form submissions automatically

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- your form fields -->
</form>
```

## Recommendation

For a personal portfolio, **EmailJS is the easiest and most reliable option** as it requires no backend server and works immediately after setup.
