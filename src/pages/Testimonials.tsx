
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      organization: "Wellness Medical Center",
      content: "Nodesprint Technologies has transformed our medical billing process. We've seen a 30% increase in collections and significantly fewer denied claims. Their team is responsive and professional, addressing our concerns promptly and effectively.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      service: "Medical Billing",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Practice Owner",
      organization: "Family Health Partners",
      content: "The credentialing service from Nodesprint has saved us countless hours and streamlined our entire provider enrollment process. Their team handled the complex paperwork with efficiency and accuracy, allowing us to focus on patient care instead of administrative tasks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      service: "Credentialing",
    },
    {
      id: 3,
      name: "Amanda Miller",
      role: "Office Manager",
      organization: "Northside Pediatrics",
      content: "Our practice was struggling with medical coding accuracy until we partnered with Nodesprint Technologies. Their certified coders have significantly reduced our claim rejections and helped us optimize our reimbursement. I highly recommend their coding services.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      service: "Medical Coding",
    },
    {
      id: 4,
      name: "Dr. Robert Patel",
      role: "Chief Medical Officer",
      organization: "Community Hospital Network",
      content: "When we faced a sudden physician shortage, Nodesprint's Locum Tenens service quickly connected us with qualified providers who seamlessly integrated with our team. The transition was smooth, and patient care remained uninterrupted. Their service was invaluable during a critical time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      service: "Locum Tenens",
    },
    {
      id: 5,
      name: "Jennifer Torres",
      role: "Director of Operations",
      organization: "Coastal Medical Associates",
      content: "Nodesprint's comprehensive billing services have revolutionized our revenue cycle management. Their attention to detail and proactive approach to denials has resulted in faster payments and improved cash flow. Their team feels like an extension of our practice.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      service: "Medical Billing",
    },
    {
      id: 6,
      name: "Dr. Elizabeth Cooper",
      role: "Neurologist",
      organization: "Advanced Neurology Specialists",
      content: "As a specialist starting my own practice, credentialing was overwhelming. Nodesprint Technologies guided me through the entire process with expertise and efficiency. They handled everything from insurance panels to hospital privileges, making the launch of my practice much smoother.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      service: "Credentialing",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-300">
              Hear what healthcare professionals have to say about their experience working with Nodesprint Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-8 text-8xl opacity-20 text-nodesprint-orange">
              <Quote />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              <div className="md:col-span-1">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                  <img 
                    src={testimonials[0].image} 
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <blockquote className="text-xl font-light italic text-gray-100 mb-6">
                  "{testimonials[0].content}"
                </blockquote>
                
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-nodesprint-orange fill-nodesprint-orange" />
                  ))}
                </div>
                
                <div>
                  <div className="font-bold text-lg">{testimonials[0].name}</div>
                  <div className="text-gray-400">
                    {testimonials[0].role}, {testimonials[0].organization}
                  </div>
                  <div className="mt-1 text-sm inline-block bg-nodesprint-orange/20 px-2 py-1 rounded text-nodesprint-orange">
                    {testimonials[0].service}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">More Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-nodesprint-orange fill-nodesprint-orange" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-600" />
                  ))}
                </div>
                
                <div className="absolute top-4 right-4 text-4xl opacity-20 text-nodesprint-orange">
                  <Quote />
                </div>
                
                <blockquote className="text-gray-300 mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.organization}</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6">
                  <span className="text-xs bg-nodesprint-orange/20 px-2 py-1 rounded text-nodesprint-orange">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Trusted By Healthcare Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-800 h-24 rounded-lg flex items-center justify-center p-6">
                <div className="text-xl font-bold text-gray-500">Client Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
            <p className="text-gray-300 mb-8">
              Experience the Nodesprint difference for yourself. Contact us today to learn how we can help optimize your healthcare operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg">
                <a href="#contact">Request a Free Consultation</a>
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
