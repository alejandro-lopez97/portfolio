import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-2xl mb-2">
              <span className="text-gradient">JD</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences with purpose.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Designed & built with passion.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />
    </footer>
  );
};

export default Footer;
