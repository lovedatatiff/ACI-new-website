
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Lock, Database, Zap, Code, Workflow, Blocks, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';
import PricingSection from '@/components/PricingSection';

const AnimatedHome = () => {
  const { scrollY } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  // Parallax and opacity effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  // Spring physics for smooth animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  useEffect(() => {
    document.title = 'ACI.dev - Agent-Computer Interface Platform';
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Black hole animation effect
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Black Hole Animation */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute z-0 w-[800px] h-[800px] rounded-full"
          style={{ scale: smoothScale, opacity: smoothOpacity }}
        >
          {/* Black hole effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0f0f17] rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, yoyo: Infinity, ease: "easeInOut" }}
          />
          
          {/* Accretion disk */}
          <motion.div 
            className="absolute inset-[-50px] border-[25px] border-t-primary/40 border-r-secondary/30 border-b-primary/20 border-l-accent/30 rounded-full"
            variants={orbitVariants}
            animate="animate"
            style={{ filter: "blur(10px)" }}
          />
          
          <motion.div 
            className="absolute inset-[-100px] border-[10px] border-t-violet-500/30 border-r-primary/20 border-b-blue-500/30 border-l-primary/30 rounded-full"
            variants={orbitVariants}
            animate="animate"
            style={{ animationDelay: "-2s", filter: "blur(8px)" }}
          />
          
          {/* Event horizon text */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <motion.div
              className="text-7xl font-bold text-center text-white"
              style={{ textShadow: "0 0 20px rgba(124, 58, 237, 0.7)" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              ACI.dev
              <div className="text-[8px] mt-[-8px] text-emerald-400 opacity-70">Aipotheosis Labs</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero text overlay */}
        <div className="container relative z-10 px-4 max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Agent-Computer Interface Platform
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Build powerful AI agents that can call APIs, navigate websites, 
            and access computer systems—all with secure, cross-category authentication.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button className="px-8 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-2">
              <span>View Documentation</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 relative" ref={ref}>
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Three Reasons to Choose ACI.dev
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Value Prop 1 */}
            <SolutionCard 
              icon={<Blocks className="h-10 w-10" />}
              title="Dynamic access to 500+ tools"
              gradient="from-blue-600/10 via-primary/5 to-transparent"
              delay={100}
            >
              <p className="mb-4">Connect your agents to any API or tool through a single unified interface</p>
              <div className="mt-6 pt-4 border-t border-primary/10">
                <motion.div 
                  className="relative h-32 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Tool connection visualization */}
                  <motion.div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-2">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <motion.div 
                        key={i}
                        className="bg-primary/10 rounded-full h-full w-full flex items-center justify-center"
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: i * 0.2 % 2
                        }}
                      >
                        <div className="h-2 w-2 bg-primary/40 rounded-full" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(124, 58, 237, 0.2)",
                        "0 0 20px rgba(124, 58, 237, 0.6)",
                        "0 0 0 rgba(124, 58, 237, 0.2)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Code className="h-6 w-6 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </SolutionCard>
            
            {/* Value Prop 2 */}
            <SolutionCard 
              icon={<Lock className="h-10 w-10" />}
              title="Secure managed authentication"
              gradient="from-purple-600/10 via-primary/5 to-transparent"
              delay={200}
            >
              <p className="mb-4">Allow end-users to authorize AI agents with access to their accounts through OAuth, without token pains</p>
              <div className="mt-6 pt-4 border-t border-primary/10">
                <motion.div 
                  className="relative h-32 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Authentication animation */}
                  <motion.div 
                    className="absolute left-0 top-1/4 h-14 w-14 bg-blue-500/10 rounded-2xl flex items-center justify-center"
                    animate={{ x: [0, 40, 80, 80, 80, 0, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <motion.div 
                      className="h-8 w-8 bg-blue-500/20 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 0, 90, 180, 270, 270, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <div className="h-4 w-4 bg-blue-500/30 rounded-lg" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      backgroundColor: [
                        "rgba(124, 58, 237, 0.2)",
                        "rgba(124, 58, 237, 0.3)",
                        "rgba(124, 58, 237, 0.2)"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <motion.div 
                      className="h-10 w-10 bg-primary/30 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Lock className="h-5 w-5 text-primary" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute right-0 top-1/4 h-14 w-14 bg-green-500/10 rounded-2xl flex items-center justify-center"
                    animate={{ x: [0, -40, -80, -80, -80, 0, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <motion.div 
                      className="h-8 w-8 bg-green-500/20 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 0, -90, -180, -270, -270, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <div className="h-4 w-4 bg-green-500/30 rounded-lg" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </SolutionCard>
            
            {/* Value Prop 3 */}
            <SolutionCard 
              icon={<Database className="h-10 w-10" />}
              title="Scalable infra for production"
              gradient="from-violet-600/10 via-primary/5 to-transparent"
              delay={300}
            >
              <p className="mb-4">Build on infrastructure that scales with your user base while maintaining performance</p>
              <div className="mt-6 pt-4 border-t border-primary/10">
                <motion.div 
                  className="relative h-32 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Scaling animation */}
                  <motion.div className="absolute inset-0 flex items-end justify-between">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div 
                        key={i}
                        className="w-1/6 bg-primary/20 rounded-t-lg flex items-center justify-center"
                        animate={{ 
                          height: [`${20 + (i * 10)}%`, `${60 + (i % 3) * 10}%`, `${20 + (i * 10)}%`],
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <Zap className="h-4 w-4 text-primary/60" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </SolutionCard>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Better AI Agents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides everything you need to create powerful AI agents that 
              can interact with various tools and services securely.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SolutionCard 
              icon={<Workflow className="h-8 w-8" />}
              title="Pre-built Tool Integrations"
              gradient="from-blue-600/10 via-primary/5 to-transparent"
              delay={100}
            >
              <p>Seamlessly integrate essential tools like Gmail, Hubspot, Notion, Slack, and more to your AI agents with little engineering effort.</p>
            </SolutionCard>
            
            <SolutionCard 
              icon={<Lock className="h-8 w-8" />}
              title="Managed Agent Authentication"
              gradient="from-purple-600/10 via-primary/5 to-transparent"
              delay={200}
            >
              <p>Allow end-users to authorize your AI agents with access to their accounts through OAuth. ACI.dev handles all the token pains and OAuth client setups.</p>
            </SolutionCard>
            
            <SolutionCard 
              icon={<Code className="h-8 w-8" />}
              title="Agent Secrets Manager"
              gradient="from-violet-600/10 via-primary/5 to-transparent"
              delay={300}
            >
              <p>Allow end-users to store and manage credentials for web browsing AI agents. Set access policies to enhance security and reliability.</p>
            </SolutionCard>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="px-8 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
              <span>Explore All Features</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-blue-600/20 opacity-90"></div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Powerful AI Agents?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Start building powerful AI agents today with our secure, 
            cross-category authentication infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
              <span>Get Started for Free</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-2 backdrop-blur-sm bg-background/20">
              <span>View Documentation</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default AnimatedHome;
