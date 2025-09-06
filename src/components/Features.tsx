import { motion } from 'framer-motion';
import { Clock, ChefHat, Sparkles, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Buscar por ingredientes',
      description: 'Ingresá lo que tenés en casa y encontrá recetas perfectas para tu AirFryer',
      delay: 0.1
    },
    {
      icon: Clock,
      title: 'Recetas rápidas',
      description: 'Todas nuestras recetas están pensadas para cocinar en menos de 30 minutos',
      delay: 0.2
    },
    {
      icon: ChefHat,
      title: 'Paso a paso',
      description: 'Instrucciones claras y simples, perfectas para cualquier nivel de cocina',
      delay: 0.3
    },
    {
      icon: Sparkles,
      title: 'Resultados perfectos',
      description: 'Temperaturas y tiempos exactos para que cada plato salga delicioso',
      delay: 0.4
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Todo lo que necesitás para cocinar{' '}
            <span className="text-primary">mejor</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            AFY15 te ayuda a aprovechar al máximo tu AirFryer con recetas pensadas para ingredientes que ya tenés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 h-full shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1000+", label: "Recetas disponibles" },
            { number: "15min", label: "Tiempo promedio" },
            { number: "98%", label: "Satisfacción" },
            { number: "24/7", label: "Acceso ilimitado" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;