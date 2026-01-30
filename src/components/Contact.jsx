import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import GradientText from './ui/GradientText';

const Contact = () => {
  const CONTACT_EMAIL = 'your.email@example.com';
  const CONTACT_LINKEDIN = 'https://linkedin.com';
  const CONTACT_GITHUB = 'https://github.com';
  const CONTACT_TWITTER = 'https://twitter.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      setSubmitMessage('Thanks! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            <GradientText
                              colors={["#4079ff", "#40ffaa", "#4079ff","#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                          >Contact
                          </GradientText>
            </h2>
          <p className="section-subtitle">
            Let's connect or collaborate
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card--info">
            <div className="contact-card-header">
              <h3 className="contact-card-title">
              Let's work together
              </h3>
              <p className="contact-card-text">
                I'm open to internships, freelance projects, and collaborations. If you have an idea or opportunity, send a message and I’ll get back to you.
              </p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-left">
                  <span className="contact-link-icon"><Mail size={18} /></span>
                  <span className="contact-link-text">{CONTACT_EMAIL}</span>
                </span>
                <span className="contact-link-right">Email</span>
              </a>

              <a href={CONTACT_LINKEDIN} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-left">
                  <span className="contact-link-icon"><Linkedin size={18} /></span>
                  <span className="contact-link-text">LinkedIn</span>
                </span>
                <span className="contact-link-right">Connect</span>
              </a>

              <a href={CONTACT_GITHUB} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-left">
                  <span className="contact-link-icon"><Github size={18} /></span>
                  <span className="contact-link-text">GitHub</span>
                </span>
                <span className="contact-link-right">Follow</span>
              </a>

              <a href={CONTACT_TWITTER} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-left">
                  <span className="contact-link-icon"><Twitter size={18} /></span>
                  <span className="contact-link-text">Twitter</span>
                </span>
                <span className="contact-link-right">DM</span>
              </a>
            </div>
          </div>

          <div className="contact-card contact-card--form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  placeholder="Tell me about your project..."
                  rows="6"
                ></textarea>
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Thanks') ? 'submit-message--success' : 'submit-message--error'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
