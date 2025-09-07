import { motion } from 'framer-motion';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <h1 className="text-xl font-display font-bold text-foreground">
              AFY<span className="text-primary">15</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <Lock className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: Diciembre 2024
            </p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="space-y-8 text-foreground">
                <p className="text-muted-foreground leading-relaxed">
                  En AFY15 respetamos tu privacidad. Esta Política explica cómo recopilamos, usamos y protegemos tu información.
                </p>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">1</span>
                    </span>
                    Información que recopilamos
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Datos de registro:</strong> nombre, correo electrónico, contraseña.</p>
                    <p><strong className="text-foreground">Datos de uso:</strong> interacciones con la plataforma, preferencias, búsquedas.</p>
                    <p><strong className="text-foreground">Cookies y tecnologías similares</strong> para mejorar la experiencia.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">2</span>
                    </span>
                    Uso de la información
                  </h2>
                  <div className="pl-11 text-muted-foreground">
                    <p className="mb-2">Utilizamos la información para:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Proporcionar y mejorar el servicio.</li>
                      <li>• Personalizar la experiencia del usuario.</li>
                      <li>• Comunicar actualizaciones y novedades.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">3</span>
                    </span>
                    Compartir información
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>No vendemos ni alquilamos información personal.</p>
                    <p>Podemos compartir datos con proveedores de servicios (hosting, analíticas) bajo acuerdos de confidencialidad.</p>
                    <p>Podremos divulgar datos si lo requiere la ley o una autoridad competente.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">4</span>
                    </span>
                    Seguridad
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Adoptamos medidas razonables para proteger la información, aunque no podemos garantizar seguridad absoluta.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">5</span>
                    </span>
                    Derechos del Usuario
                  </h2>
                  <div className="pl-11 text-muted-foreground">
                    <p className="mb-2">El Usuario puede:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Acceder, rectificar o eliminar sus datos personales.</li>
                      <li>• Solicitar la baja de comunicaciones en cualquier momento.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">6</span>
                    </span>
                    Cambios a esta Política
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Podemos actualizar esta Política. Notificaremos los cambios relevantes a través de la plataforma o correo electrónico.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">7</span>
                    </span>
                    Contacto
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Si tenés dudas sobre esta Política, podés escribirnos a: <a href="mailto:hola@afy15.com" className="text-primary hover:text-primary/80 transition-colors">hola@afy15.com</a></p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Volver al inicio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;