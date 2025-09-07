import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsAndConditions = () => {
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
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Términos y Condiciones
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
                  Bienvenido a AFY15. Estos Términos y Condiciones regulan el uso de nuestro producto y servicios digitales. Al acceder o utilizar AFY15, aceptás cumplir con estos términos.
                </p>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">1</span>
                    </span>
                    Definiciones
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">AFY15:</strong> el servicio digital de recetas rápidas para AirFryer.</p>
                    <p><strong className="text-foreground">Usuario:</strong> cualquier persona que acceda o use AFY15.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">2</span>
                    </span>
                    Uso del Servicio
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>AFY15 se ofrece "tal cual" está disponible, sin garantías de resultados específicos.</p>
                    <p>El Usuario se compromete a usar el servicio de manera legal y conforme a estos Términos.</p>
                    <p>Nos reservamos el derecho de modificar, suspender o interrumpir el servicio en cualquier momento.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">3</span>
                    </span>
                    Registro y Cuenta
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Para acceder a ciertas funciones puede requerirse crear una cuenta.</p>
                    <p>El Usuario debe proporcionar información verídica y mantenerla actualizada.</p>
                    <p>El Usuario es responsable de la confidencialidad de sus credenciales.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">4</span>
                    </span>
                    Propiedad Intelectual
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Todos los derechos de propiedad intelectual de AFY15 (marca, software, contenidos) son de nuestra titularidad o de terceros licenciantes.</p>
                    <p>El Usuario no adquiere ningún derecho sobre ellos por el uso del servicio.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">5</span>
                    </span>
                    Limitación de Responsabilidad
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>AFY15 no será responsable por daños directos o indirectos derivados del uso del servicio.</p>
                    <p>No garantizamos la disponibilidad continua del servicio ni la ausencia de errores.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">6</span>
                    </span>
                    Modificaciones
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Podemos actualizar estos Términos en cualquier momento.</p>
                    <p>El uso continuo del servicio implica aceptación de los cambios.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">7</span>
                    </span>
                    Ley Aplicable y Jurisdicción
                  </h2>
                  <div className="pl-11 space-y-2 text-muted-foreground">
                    <p>Estos Términos se regirán por las leyes de Argentina.</p>
                    <p>Cualquier controversia será sometida a los tribunales competentes de Buenos Aires.</p>
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

export default TermsAndConditions;