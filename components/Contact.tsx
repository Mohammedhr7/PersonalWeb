
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:m.harrous9240@uca.ac.ma?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
      <h2 className="text-accent font-mono mb-2">04. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
      <p className="max-w-xl mx-auto text-slate mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative vision. Feel free to reach out!
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="text-left">
          <label htmlFor="name" className="block text-lightest-slate text-sm font-mono mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate/10 border border-slate/20 rounded-md text-lightest-slate placeholder-slate focus:border-accent focus:outline-none transition-colors duration-300"
            placeholder="Your name"
          />
        </div>
        
        <div className="text-left">
          <label htmlFor="email" className="block text-lightest-slate text-sm font-mono mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate/10 border border-slate/20 rounded-md text-lightest-slate placeholder-slate focus:border-accent focus:outline-none transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="text-left">
          <label htmlFor="message" className="block text-lightest-slate text-sm font-mono mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-slate/10 border border-slate/20 rounded-md text-lightest-slate placeholder-slate focus:border-accent focus:outline-none transition-colors duration-300 resize-vertical"
            placeholder="Your message..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm">
            Email client opened! Please send the message.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
