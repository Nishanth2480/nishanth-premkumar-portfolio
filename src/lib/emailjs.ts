
import emailjs from '@emailjs/browser';

export const emailjsConfig = {
  serviceId: 'service_fwopx89',
  templateId: 'template_mkllq5h',
  publicKey: 'iD3WEXK8GnwlIGzRR'
};

// Initialize EmailJS
emailjs.init(emailjsConfig.publicKey);

export { emailjs };
