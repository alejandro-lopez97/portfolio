import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxe E-Commerce",
    category: "Web Development",
    year: "2024",
    description: "A premium shopping experience with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    year: "2024",
    description: "Real-time analytics platform for institutional investors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Wanderlust Travel",
    category: "Full-Stack App",
    year: "2023",
    description: "AI-powered travel planning with personalized itineraries.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Artisan Brand",
    category: "Brand Identity",
    year: "2023",
    description: "Complete visual identity for a sustainable fashion label.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/3 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="section-divider" />
              <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs">
                Featured Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium">
              Selected <span className="text-gradient">Projects</span>
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md text-lg font-light">
            A curated collection of my recent work, showcasing expertise in 
            design, development, and digital strategy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className={`group premium-card overflow-hidden hover-lift cursor-pointer ${
                project.featured ? 'lg:row-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.description}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/90 backdrop-blur-sm text-background flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-8 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs tracking-widest uppercase text-accent">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
