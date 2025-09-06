import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import airfryerImage from '@/assets/airfryer-hero.jpg';
import ingredientsImage from '@/assets/ingredients-floating.jpg';

const Hero = () => {
  const floatingIngredients = [
    { id: 1, delay: 0, x: "10%", y: "20%" },
    { id: 2, delay: 0.5, x: "80%", y: "15%" },
    { id: 3, delay: 1, x: "15%", y: "70%" },
    { id: 4, delay: 1.5, x: "85%", y: "75%" },
    { id: 5, delay: 2, x: "50%", y: "10%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce-subtle" />
      </div>

      {/* Floating Ingredients */}
      {floatingIngredients.map((ingredient) => (
        <motion.div
          key={ingredient.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: ingredient.delay,
            type: "spring",
            stiffness: 100 
          }}
          className="absolute w-16 h-16 md:w-20 md:h-20"
          style={{ left: ingredient.x, top: ingredient.y }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + ingredient.id,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <img 
              src={ingredientsImage} 
              alt="Ingrediente"
              className="w-full h-full object-cover rounded-full shadow-lg opacity-80"
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6"
            >
              Cociná más{' '}
              <span className="text-primary relative">
                fácil
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-2 left-0 right-0 h-2 bg-primary/20 rounded-full -z-10"
                />
              </span>{' '}
              con lo que ya tenés en casa
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Recetas rápidas y simples para tu AirFryer. Descubrí qué cocinar con los ingredientes que tenés disponibles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="group text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Probar gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group text-lg font-medium border-2 hover:bg-primary/5"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                Sin registrarse
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                +1000 recetas
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                Fácil y rápido
              </div>
            </motion.div>
          </motion.div>

          {/* AirFryer Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative"
            >
              <img
                src={airfryerImage}
                alt="AirFryer AFY15"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;