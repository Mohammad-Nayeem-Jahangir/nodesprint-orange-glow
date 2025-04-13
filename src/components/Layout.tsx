
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="flex flex-col min-h-screen dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/3d024539-651a-42f8-9c05-25bf8bc5ccca.png" 
                alt="Nodesprint Technologies Logo" 
                className="h-8 w-auto"
              />
              <span className="hidden sm:block font-semibold text-lg">Nodesprint Technologies</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-nodesprint-orange ${
                    location.pathname === link.path ? 'text-nodesprint-orange' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" size="sm" asChild className="bg-nodesprint-orange text-white hover:bg-nodesprint-orange/80">
                <a href="#contact">Contact Us</a>
              </Button>
            </nav>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-background border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-nodesprint-orange ${
                    location.pathname === link.path ? 'text-nodesprint-orange' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" size="sm" asChild className="bg-nodesprint-orange text-white hover:bg-nodesprint-orange/80 w-full">
                <a href="#contact">Contact Us</a>
              </Button>
            </nav>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Contact Section */}
      <section id="contact" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Contact Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help. Reach out to us using any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-nodesprint-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-nodesprint-orange"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-nodesprint-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-nodesprint-orange"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-nodesprint-orange hover:bg-nodesprint-orange/80">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-nodesprint-orange p-3 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-nodesprint-orange p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400 mt-1">contact@nodesprint.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-nodesprint-orange p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400 mt-1">
                      123 Tech Hub Avenue<br />
                      Suite 200<br />
                      Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-white font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-nodesprint-orange transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-nodesprint-orange transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-nodesprint-orange transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-nodesprint-orange transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/3d024539-651a-42f8-9c05-25bf8bc5ccca.png" 
                alt="Nodesprint Technologies Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-white font-semibold">Nodesprint Technologies Ltd.</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-nodesprint-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Nodesprint Technologies Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
