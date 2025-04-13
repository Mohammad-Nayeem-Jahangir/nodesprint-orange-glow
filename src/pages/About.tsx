
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Award, Target, Users, Clock, BarChart, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. John Anderson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "With over 20 years of healthcare management experience, Dr. Anderson founded Nodesprint Technologies to address critical operational challenges in medical practices."
    },
    {
      name: "Sarah Martinez",
      role: "Director of Medical Billing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "A certified medical biller with 15 years of experience, Sarah leads our billing department with a focus on maximizing reimbursements and reducing claim denials."
    },
    {
      name: "Michael Lee",
      role: "Head of Credentialing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Michael's background in healthcare administration and regulatory compliance ensures our credentialing services exceed industry standards."
    },
    {
      name: "Dr. Emily Chen",
      role: "Medical Coding Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Board-certified in healthcare coding, Dr. Chen brings clinical expertise to our coding department, ensuring accurate code assignment across specialties."
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Nodesprint Technologies</h1>
              <p className="text-xl text-gray-300 mb-6">
                We're a team of healthcare and technology experts dedicated to transforming medical operations through innovative outsourcing solutions.
              </p>
              <p className="text-gray-400 mb-8">
                Founded in 2012, Nodesprint Technologies has grown from a small medical billing company to a comprehensive healthcare outsourcing provider serving hundreds of medical practices and facilities across the country. Our mission is to empower healthcare providers by taking over complex administrative tasks, allowing them to focus on what matters most—patient care.
              </p>
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                <a href="#contact">Contact Our Team</a>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Nodesprint Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-nodesprint-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-nodesprint-orange h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-400">
                  We strive for excellence in every service we provide, setting high standards and continuously improving our processes to deliver exceptional results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-nodesprint-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-nodesprint-orange h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-400">
                  We operate with unwavering integrity in all interactions, maintaining transparency and honesty with our clients and within our team.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-nodesprint-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-nodesprint-orange h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-400">
                  We embrace innovation and leverage technology to develop cutting-edge solutions that address the evolving needs of healthcare providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 rounded-full bg-nodesprint-orange flex items-center justify-center">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">2012: Foundation</div>
                  <p className="text-gray-400 mb-4">
                    Nodesprint Technologies was founded with a focus on medical billing services for small practices, starting with a team of just 5 dedicated professionals.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 rounded-full bg-nodesprint-orange flex items-center justify-center">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">2015: Expansion</div>
                  <p className="text-gray-400 mb-4">
                    Expanded services to include medical coding and provider credentialing, doubling our client base and team size within three years.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 rounded-full bg-nodesprint-orange flex items-center justify-center">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">2018: Innovation</div>
                  <p className="text-gray-400 mb-4">
                    Developed proprietary software platforms for healthcare operations management, enhancing efficiency and accuracy in all service areas.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 rounded-full bg-nodesprint-orange flex items-center justify-center">
                    <span className="font-bold text-white">4</span>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-2">2021: Full-Service Model</div>
                  <p className="text-gray-400 mb-4">
                    Introduced Locum Tenens services, completing our comprehensive healthcare outsourcing solution portfolio and becoming a one-stop solution for medical practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div className="h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-nodesprint-orange mb-3">{member.role}</div>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-nodesprint-orange h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-400">Team Members</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BarChart className="text-nodesprint-orange h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <p className="text-gray-400">Claims Processed</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-nodesprint-orange h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-nodesprint-orange h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-400">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8">
              Contact our team today to discuss how Nodesprint Technologies can help optimize your healthcare operations.
            </p>
            <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg" asChild>
              <a href="#contact">
                Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
