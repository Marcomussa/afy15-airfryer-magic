import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de familia',
      content: 'AFY15 cambió completamente mi forma de cocinar. Ahora siempre sé qué hacer con los ingredientes que tengo en casa.',
      rating: 5,
      image: '👩‍🍳'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Chef aficionado',
      content: 'Las recetas son súper fáciles de seguir y los resultados siempre son perfectos. Mi AirFryer nunca estuvo tan aprovechado.',
      rating: 5,
      image: '👨‍🍳'
    },
    {
      name: 'Ana López',
      role: 'Estudiante universitaria',
      content: 'Perfecto para mi vida ocupada. Recetas rápidas, ingredientes simples y resultados deliciosos. Lo recomiendo 100%.',
      rating: 5,
      image: '👩‍🎓'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Lo que dicen nuestros{' '}
            <span className="text-primary">usuarios</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 10,000 personas ya están cocinando mejor con AFY15
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-large border border-border/50 relative"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 left-8 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center"
            >
              <Quote className="w-6 h-6 text-primary" />
            </motion.div>

            <div className="text-center">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl mb-6"
              >
                {testimonials[currentTestimonial].image}
              </motion.div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-primary fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                "{testimonials[currentTestimonial].content}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="font-display font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary shadow-brand scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "4.9/5", label: "Calificación promedio" },
            { number: "10,000+", label: "Usuarios activos" },
            { number: "50,000+", label: "Recetas cocinadas" },
            { number: "95%", label: "Recomiendan AFY15" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;