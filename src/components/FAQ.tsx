import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: '¿Es gratis usar AFY15?',
      answer: 'Sí, AFY15 es completamente gratuito. Podés acceder a todas las recetas y funcionalidades sin costo alguno.'
    },
    {
      question: '¿Necesito registrarme para usar las recetas?',
      answer: 'No es necesario registrarse para usar AFY15. Podés buscar y ver todas las recetas sin crear una cuenta.'
    },
    {
      question: '¿Las recetas funcionan solo con AirFryer?',
      answer: 'Sí, todas nuestras recetas están específicamente diseñadas y probadas para AirFryer, con temperaturas y tiempos exactos.'
    },
    {
      question: '¿Puedo sugerir nuevas recetas?',
      answer: 'Por supuesto. Tenemos un sistema para que los usuarios puedan enviar sus recetas favoritas y las incluiremos después de probarlas.'
    },
    {
      question: '¿AFY15 funciona en móviles?',
      answer: 'Sí, AFY15 está optimizado para funcionar perfectamente en cualquier dispositivo: computadora, tablet o móvil.'
    },
    {
      question: '¿Cómo sé qué ingredientes marcar?',
      answer: 'Simplemente revisá tu heladera y alacena, y marcá todo lo que tenés disponible. AFY15 se encarga del resto.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Preguntas{' '}
            <span className="text-primary relative">
              frecuentes
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-primary/20 rounded-full"
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Todas las respuestas que necesitás sobre AFY15
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-accent/30 transition-colors duration-200"
                whileHover={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    backgroundColor: openIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--accent))'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              ¿Tenés otra pregunta?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Escribinos y te respondemos lo antes posible. Estamos acá para ayudarte.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold shadow-brand hover:shadow-large transition-all duration-300"
            >
              Contactanos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;