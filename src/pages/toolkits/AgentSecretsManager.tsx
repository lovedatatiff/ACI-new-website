
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Key, Shield, ArrowRight, UserCheck, RefreshCw, Database, FileKey } from 'lucide-react';
import Navbar from '@/components/Navbar';

const AgentSecretsManager = () => {
  useEffect(() => {
    document.title = 'Agent Secrets Manager - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Agent Secrets Manager</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Securely store and manage credentials for your AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Lock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-muted-foreground">
                  End-to-end encrypted storage for API keys, passwords, and other sensitive credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Key className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Control</h3>
                <p className="text-muted-foreground">
                  Fine-grained access policies that limit which agents can access which secrets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Audit Logging</h3>
                <p className="text-muted-foreground">
                  Comprehensive audit logs of all access to secrets for security compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <UserCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground">
                  Robust authentication system with API key management and role-based access control.
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full mb-16">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What is Agent Secrets Manager?</h3>
                  <p className="text-muted-foreground mb-4">
                    Agent Secrets Manager is a specialized service for securely storing, managing, and accessing sensitive credentials required by AI agents. It provides a secure way to handle API keys, passwords, and other secrets without exposing them in your code or configuration files.
                  </p>
                  <p className="text-muted-foreground">
                    With Agent Secrets Manager, your AI agents can securely access the credentials they need while maintaining robust security practices.
                  </p>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8 flex justify-center">
                      <Lock className="h-32 w-32 text-primary/60" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="authentication" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Authentication Methods</h3>
                <p className="text-muted-foreground mb-6">
                  Agent Secrets Manager supports multiple authentication methods to ensure secure access to your AI agent systems and services.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Key className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">API Key Authentication</h3>
                    <p className="text-muted-foreground">
                      Use API keys for simple and secure authentication. Each key has specific permissions and can be rotated or revoked as needed.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">OAuth 2.0</h3>
                    <p className="text-muted-foreground">
                      Integrate with OAuth 2.0 providers for delegated authorization, enabling secure third-party access without sharing credentials.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <FileKey className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">JWT Authentication</h3>
                    <p className="text-muted-foreground">
                      Use JSON Web Tokens for stateless authentication with built-in expiration and signature verification.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Database className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Secrets Rotation</h3>
                    <p className="text-muted-foreground">
                      Automatic credential rotation to maintain security without disrupting your AI agents' operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="implementation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Implementation Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementing Agent Secrets Manager in your AI systems involves several key steps:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Set up the Agent Secrets Manager service in your environment</li>
                    <li>Store your sensitive credentials in the secure vault</li>
                    <li>Configure access policies to control which agents can access which secrets</li>
                    <li>Integrate the Secrets Manager SDK with your AI agents</li>
                    <li>Implement authentication using one of the supported methods</li>
                    <li>Set up monitoring and audit logging for security compliance</li>
                  </ul>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-md bg-background border mb-4">
                      <pre className="text-xs text-muted-foreground overflow-auto"><code>{`// Example of accessing a secret
import { AgentSecretsManager } from '@aci/secrets-manager';

const secretsManager = new AgentSecretsManager({
  apiKey: process.env.SECRETS_MANAGER_API_KEY
});

async function getApiCredentials() {
  const credentials = await secretsManager.getSecret(
    'my-service-api-key'
  );
  return credentials;
}`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Get Started with Agent Secrets Manager</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSecretsManager;
