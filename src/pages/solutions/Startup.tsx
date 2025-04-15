
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Sparkles, ArrowRight, Check, Code, Shield, Timer, Lightbulb, Workflow } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

const Startup = () => {
  useEffect(() => {
    document.title = 'AI Agent Platform for Startups & Builders | ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-28"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Your First AI Agent — Fast
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Whether you're shipping an MVP or hacking together a GPT-powered product, ACI.dev gets you from idea to working integration in minutes.
            </motion.p>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="px-8 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
                <span>Try It Free</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <ScrollReveal>
            <div className="mb-28">
              <h2 className="text-3xl font-bold mb-14 text-center">You're building fast — we help you ship faster</h2>
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SolutionCard 
                  icon={<Code className="h-7 w-7" />}
                  gradient="from-blue-500/10 via-primary/5 to-transparent"
                  delay={100}
                >
                  <p className="text-lg">One-line setup to connect GPT to tools like Slack, Gmail, Notion, HubSpot</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Shield className="h-7 w-7" />}
                  gradient="from-purple-500/10 via-primary/5 to-transparent"
                  delay={200}
                >
                  <p className="text-lg">No OAuth headaches — we handle auth and API logic</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Lightbulb className="h-7 w-7" />}
                  gradient="from-amber-500/10 via-primary/5 to-transparent"
                  delay={300}
                >
                  <p className="text-lg">Add AI-powered actions to your app with just a few lines of code</p>
                </SolutionCard>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Why Startups Love ACI.dev */}
          <ScrollReveal>
            <div className="mb-28 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 p-12 rounded-3xl backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-12 text-center">Why Startups Love ACI.dev</h2>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <SolutionCard 
                    icon={<Rocket className="h-8 w-8" />}
                    title="Prebuilt actions for 250+ tools"
                    gradient="from-transparent to-transparent"
                    delay={100}
                    className="bg-transparent backdrop-blur-sm"
                  >
                    <p>Connect to any API with our prebuilt library of integrations</p>
                  </SolutionCard>

                  <SolutionCard 
                    icon={<Zap className="h-8 w-8" />}
                    title="Works with any LLM: OpenAI, Anthropic, Mistral, and more"
                    gradient="from-transparent to-transparent"
                    delay={200}
                    className="bg-transparent backdrop-blur-sm"
                  >
                    <p>Use your preferred model or easily switch between providers</p>
                  </SolutionCard>

                  <SolutionCard 
                    icon={<Shield className="h-8 w-8" />}
                    title="Secure agent execution with built-in rate limiting and retries"
                    gradient="from-transparent to-transparent"
                    delay={300}
                    className="bg-transparent backdrop-blur-sm"
                  >
                    <p>Ensure reliable performance with automatic error handling</p>
                  </SolutionCard>

                  <SolutionCard 
                    icon={<Sparkles className="h-8 w-8" />}
                    title="Free tier for early projects"
                    gradient="from-transparent to-transparent"
                    delay={400}
                    className="bg-transparent backdrop-blur-sm"
                  >
                    <p>Get started at no cost and scale as your project grows</p>
                  </SolutionCard>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Use Cases */}
          <ScrollReveal>
            <div className="mb-28">
              <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SolutionCard 
                  icon={<Workflow className="h-7 w-7" />}
                  gradient="from-emerald-500/10 via-primary/5 to-transparent"
                  delay={100}
                >
                  <p className="text-lg">AI assistant that reads emails and updates Notion</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Zap className="h-7 w-7" />}
                  gradient="from-violet-500/10 via-primary/5 to-transparent"
                  delay={200}
                >
                  <p className="text-lg">GPT bot that pings Slack and updates HubSpot tasks</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Timer className="h-7 w-7" />}
                  gradient="from-pink-500/10 via-primary/5 to-transparent"
                  delay={300}
                >
                  <p className="text-lg">One-person team automating investor updates via Gmail</p>
                </SolutionCard>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Startup Success Stories */}
          <ScrollReveal>
            <div className="mb-28">
              <h2 className="text-3xl font-bold mb-12 text-center">Startup Success Stories</h2>
              <motion.div 
                className="bg-gradient-to-br from-accent/20 via-purple-500/5 to-transparent p-10 rounded-3xl backdrop-blur-sm shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-2xl italic mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  "ACI.dev helped us go from demo to production in under 2 days."
                </motion.p>
                <motion.p 
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  – Alice Zhang, Founder @ seed-stage SaaS company
                </motion.p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <motion.div 
              className="text-center rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/5 p-14 rounded-3xl backdrop-blur-sm shadow-lg">
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready to ship your first AI agent?
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button className="px-8 py-7 rounded-full text-lg bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
                    <span>Start Building</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Startup;
