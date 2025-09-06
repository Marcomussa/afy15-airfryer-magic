import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const legalLinks = [
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Cookies', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-t from-accent/10 to-background border-t border-border/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              AFY<span className="text-primary">15</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              La forma más fácil de cocinar con tu AirFryer. Recetas rápidas y simples con los ingredientes que ya tenés en casa.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    color: 'hsl(var(--primary))',
                    transition: { duration: 0.2 }
                  }}
                  className="w-10 h-10 bg-card hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground border border-border/50 hover:border-primary/20 transition-all duration-200 shadow-soft"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Características', href: '#caracteristicas' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Preguntas frecuentes', href: '#faq' },
                { label: 'Iniciar sesión', href: '#' }
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="text-muted-foreground">
                <div className="font-medium">Email</div>
                <a 
                  href="mailto:hola@afy15.com" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  hola@afy15.com
                </a>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium">Soporte</div>
                <span className="text-sm">Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-muted-foreground">
            © 2024 AFY15. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;