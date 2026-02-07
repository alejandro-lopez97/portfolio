import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/50 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="section-divider" />
                <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs">
                  Get In Touch
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Let's Create
                <br />
                Something
                <br />
                <span className="text-gradient">Extraordinary</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg max-w-md font-light leading-relaxed">
              Have a project in mind or just want to chat? I'm always excited to 
              discuss new opportunities and bring ideas to life.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between py-4 border-b border-border/50 group hover:border-accent/50 transition-colors duration-300"
                >
                  <span className="font-display text-xl group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="premium-card p-10 space-y-8">
              <h3 className="font-display text-2xl font-medium">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:hello@example.com"
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="font-display text-lg group-hover:text-accent transition-colors duration-300">
                      hello@example.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Phone
                    </p>
                    <p className="font-display text-lg">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="font-display text-lg">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-muted-foreground">
                  Currently available for new projects
                </p>
              </div>
              <a href="mailto:hello@example.com" className="elegant-button w-full justify-center">
                <span>Start a Conversation</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
