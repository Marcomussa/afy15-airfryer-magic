import { motion } from 'framer-motion';
import { Package, Search, ChefHat } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      title: 'Seleccioná tus ingredientes',
      description: 'Marcá qué ingredientes tenés disponibles en tu cocina',
      step: '01'
    },
    {
      icon: Search,
      title: 'Descubrí recetas posibles',
      description: 'AFY15 te muestra todas las recetas que podés hacer',
      step: '02'
    },
    {
      icon: ChefHat,
      title: 'Cociná fácil con tu AirFryer',
      description: 'Seguí las instrucciones paso a paso y disfrutá el resultado',
      step: '03'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Así de{' '}
            <span className="text-primary relative">
              simple
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-primary/20 rounded-full"
              />
            </span>{' '}
            funciona
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            En solo 3 pasos tenés la receta perfecta para cocinar con tu AirFryer
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-border rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg shadow-brand z-10"
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="w-20 h-20 bg-card rounded-2xl shadow-medium border border-border/50 flex items-center justify-center mb-6 hover:shadow-large hover:border-primary/20 transition-all duration-300"
                >
                  <step.icon className="w-10 h-10 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                >
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector for mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                    className="md:hidden w-1 h-16 bg-gradient-to-b from-primary to-primary/30 rounded-full mt-8 origin-top"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-brand hover:shadow-large transition-all duration-300"
          >
            Empezar ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;