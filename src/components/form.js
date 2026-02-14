import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! Check your email for confirmation.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: 'New Project Inquiry',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Status Alert */}
      {status.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl flex items-center gap-3 ${
            status.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}
        >
          {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <p className="text-sm font-medium">{status.message}</p>
        </motion.div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={isSubmitting}
            className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={isSubmitting}
            className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Subject Field */}
     <div className="space-y-2 relative">
  <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
    Subject
  </label>
  <div className="relative">
    <select
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      disabled={isSubmitting}
      className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/10"
    >
      <option className="bg-slate-900 text-white">New Project Inquiry</option>
      <option className="bg-slate-900 text-white">Hiring / Recruitment</option>
      <option className="bg-slate-900 text-white">System Consultation</option>
      <option className="bg-slate-900 text-white">Other</option>
    </select>
    
    {/* Custom Arrow Icon */}
    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
      <svg 
        className="w-5 h-5 text-slate-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </div>
  </div>
</div>

      {/* Message Field */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can I help you architect the next big thing?"
          disabled={isSubmitting}
          className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-black rounded-xl flex items-center justify-center transition-all shadow-lg shadow-cyan-500/20 disabled:shadow-none"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send size={18} className="ml-2" />
          </>
        )}
      </motion.button>
    </form>
  );
}