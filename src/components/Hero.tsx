import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="decorative-line left-12 top-0 h-full opacity-20 hidden lg:block" />
      <div className="decorative-line right-12 top-0 h-full opacity-20 hidden lg:block" />
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs">
                  Creative Developer & Designer
                </span>
              </motion.div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  Crafting Digital
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-gradient"
                >
                  Experiences
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-muted-foreground/70"
                >
                  With Purpose.
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-lg text-muted-foreground text-lg md:text-xl leading-relaxed font-light"
            >
              I specialize in creating refined, high-performance web experiences 
              that elevate brands and engage users. With 5+ years of expertise 
              in modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <a href="#work" className="elegant-button">
                <span>View Portfolio</span>
              </a>
              <a href="#about" className="outline-button">
                About Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-8 pt-8 border-t border-border/50"
            >
              <div>
                <p className="text-3xl font-display font-semibold text-gradient">50+</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Projects</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-semibold text-gradient">5+</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Years Exp.</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-semibold text-gradient">100%</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl" />
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-accent/20 rounded-full" />
              <div className="absolute -inset-8 border border-border/30 rounded-full" />
              
              {/* Main image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                  style={{
                    boxShadow: '0 25px 50px -12px hsl(var(--foreground) / 0.2), inset 0 1px 0 hsl(var(--warm-white) / 0.3)'
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-effect rounded-2xl px-5 py-3"
              >
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Available for</p>
                <p className="font-display text-lg font-medium">Freelance Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-500"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
