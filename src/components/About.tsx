import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Development",
    description: "Clean, efficient code with modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Thoughtful UI/UX that balances aesthetics with functionality.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized experiences that load fast and run smoothly.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Clear communication and seamless teamwork throughout projects.",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Tailwind CSS", "Framer Motion", "PostgreSQL", "AWS"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="section-divider" />
                <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs">
                  About Me
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Turning Vision
                <br />
                Into <span className="text-gradient">Reality</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                With over five years in the industry, I've had the privilege of 
                working with startups and established brands alike, helping them 
                create digital products that truly resonate with their audiences.
              </p>
              <p>
                My approach combines strategic thinking with meticulous attention 
                to detail, ensuring every project not only meets but exceeds 
                expectations.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 text-sm bg-background border border-border/50 rounded-full hover:border-accent/50 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex elegant-button"
            >
              <span>Let's Connect</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="premium-card p-8 hover-lift group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
