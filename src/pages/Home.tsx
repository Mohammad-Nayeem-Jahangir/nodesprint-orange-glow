
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Code, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Empowering Healthcare <br />
                <span className="gradient-text">Through Technology</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Nodesprint Technologies provides cutting-edge outsourcing solutions for healthcare providers, enhancing efficiency and improving patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-gray-800 p-1 rounded-xl border border-gray-700 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Healthcare professionals working"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-nodesprint-orange text-white px-4 py-2 rounded-lg font-medium">
                  Trusted by 100+ Healthcare Providers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Healthcare Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive healthcare outsourcing services to help medical practices optimize operations and focus on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Credentialing */}
            <div className="service-card bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-nodesprint-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Credentialing</h3>
              <p className="text-gray-400 mb-4">
                Streamline provider enrollment with insurance panels for optimal reimbursement.
              </p>
              <Link to="/services" className="text-nodesprint-orange hover:underline flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Medical Billing */}
            <div className="service-card bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-nodesprint-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Billing</h3>
              <p className="text-gray-400 mb-4">
                Maximize revenue with accurate claims processing and follow-up services.
              </p>
              <Link to="/services" className="text-nodesprint-orange hover:underline flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Medical Coding */}
            <div className="service-card bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-nodesprint-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Coding</h3>
              <p className="text-gray-400 mb-4">
                Ensure accurate code assignment for proper reimbursement and compliance.
              </p>
              <Link to="/services" className="text-nodesprint-orange hover:underline flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Locum Tenens */}
            <div className="service-card bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-nodesprint-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Locum Tenens</h3>
              <p className="text-gray-400 mb-4">
                Connect with qualified healthcare professionals for temporary staffing needs.
              </p>
              <Link to="/services" className="text-nodesprint-orange hover:underline flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <p className="text-gray-400">Healthcare Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. See what healthcare professionals have to say about our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700 relative">
            <div className="text-nodesprint-orange text-6xl font-serif absolute -top-5 left-6">"</div>
            <blockquote className="text-xl text-gray-300 italic mb-6 mt-6">
              Nodesprint Technologies has transformed our medical billing process. We've seen a 30% increase in collections and significantly fewer denied claims. Their team is responsive and professional.
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <div className="font-medium">Dr. Sarah Johnson</div>
                <div className="text-sm text-gray-400">Medical Director, Wellness Medical Center</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                Read More Testimonials <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Healthcare Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Nodesprint Technologies and focus on what matters most: patient care.
            </p>
            <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg">
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
