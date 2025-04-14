
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex items-center justify-center h-screen px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="px-6 py-6 rounded-full text-lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
