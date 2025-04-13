
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, FileText, Users, Building, Hospital } from "lucide-react";

const Projects = () => {
  const projects = {
    all: [
      {
        id: 1,
        title: "Regional Hospital Network Billing Transformation",
        description: "Comprehensive medical billing system overhaul for a network of 5 regional hospitals, increasing collection rates by 27%.",
        category: "Medical Billing",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        icon: <Hospital className="h-5 w-5" />,
      },
      {
        id: 2,
        title: "Multi-specialty Practice Credentialing",
        description: "Streamlined credentialing process for 35+ providers across 6 specialties, reducing enrollment time by 40%.",
        category: "Credentialing",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        icon: <Users className="h-5 w-5" />,
      },
      {
        id: 3,
        title: "Rural Health Clinic Coding Optimization",
        description: "Implemented specialized coding solutions for rural health clinics, resulting in a 15% increase in appropriate reimbursement.",
        category: "Medical Coding",
        image: "https://images.unsplash.com/photo-1631557777122-a1966aaa4678",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 4,
        title: "Emergency Department Locum Coverage",
        description: "Provided continuous emergency physician coverage for a community hospital during staffing transition.",
        category: "Locum Tenens",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
        icon: <Hospital className="h-5 w-5" />,
      },
      {
        id: 5,
        title: "Telehealth Billing Integration",
        description: "Developed specialized billing processes for a telehealth platform serving over 50,000 patients annually.",
        category: "Medical Billing",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 6,
        title: "Multi-state Provider Enrollment",
        description: "Managed complex credentialing for a telemedicine group operating across 12 states with varying requirements.",
        category: "Credentialing",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39",
        icon: <Building className="h-5 w-5" />,
      },
    ],
    billing: [
      {
        id: 1,
        title: "Regional Hospital Network Billing Transformation",
        description: "Comprehensive medical billing system overhaul for a network of 5 regional hospitals, increasing collection rates by 27%.",
        category: "Medical Billing",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        icon: <Hospital className="h-5 w-5" />,
      },
      {
        id: 5,
        title: "Telehealth Billing Integration",
        description: "Developed specialized billing processes for a telehealth platform serving over 50,000 patients annually.",
        category: "Medical Billing",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    credentialing: [
      {
        id: 2,
        title: "Multi-specialty Practice Credentialing",
        description: "Streamlined credentialing process for 35+ providers across 6 specialties, reducing enrollment time by 40%.",
        category: "Credentialing",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        icon: <Users className="h-5 w-5" />,
      },
      {
        id: 6,
        title: "Multi-state Provider Enrollment",
        description: "Managed complex credentialing for a telemedicine group operating across 12 states with varying requirements.",
        category: "Credentialing",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39",
        icon: <Building className="h-5 w-5" />,
      },
    ],
    coding: [
      {
        id: 3,
        title: "Rural Health Clinic Coding Optimization",
        description: "Implemented specialized coding solutions for rural health clinics, resulting in a 15% increase in appropriate reimbursement.",
        category: "Medical Coding",
        image: "https://images.unsplash.com/photo-1631557777122-a1966aaa4678",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    locum: [
      {
        id: 4,
        title: "Emergency Department Locum Coverage",
        description: "Provided continuous emergency physician coverage for a community hospital during staffing transition.",
        category: "Locum Tenens",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
        icon: <Hospital className="h-5 w-5" />,
      },
    ],
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Healthcare Projects</h1>
            <p className="text-xl text-gray-300">
              Explore some of our successful implementations across various healthcare specialties and services.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="billing">Medical Billing</TabsTrigger>
                <TabsTrigger value="credentialing">Credentialing</TabsTrigger>
                <TabsTrigger value="coding">Medical Coding</TabsTrigger>
                <TabsTrigger value="locum">Locum Tenens</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.all.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="billing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.billing.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="credentialing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.credentialing.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="coding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.coding.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="locum" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.locum.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Case Study</h2>
              <h3 className="text-xl font-medium text-nodesprint-orange mb-4">Comprehensive Revenue Cycle Transformation</h3>
              
              <p className="text-gray-300 mb-6">
                A multi-specialty medical group with 12 locations was struggling with claim denials, slow reimbursement, and provider credentialing delays. We implemented a complete revenue cycle management solution with impressive results.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-nodesprint-orange">32%</div>
                  <div className="text-sm text-gray-400">Increase in Revenue</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-nodesprint-orange">24 Days</div>
                  <div className="text-sm text-gray-400">Reduced A/R Time</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-nodesprint-orange">65%</div>
                  <div className="text-sm text-gray-400">Fewer Claim Denials</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-nodesprint-orange">2 Weeks</div>
                  <div className="text-sm text-gray-400">Credentialing Time</div>
                </div>
              </div>
              
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="Case Study"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-gray-300 mb-8">
              Partner with Nodesprint Technologies to optimize your healthcare operations and achieve measurable results.
            </p>
            <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg">
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    icon: React.ReactNode;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-nodesprint-orange/50 transition-all">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-nodesprint-orange/20 rounded-full flex items-center justify-center mr-2">
            {project.icon}
          </div>
          <span className="text-sm text-gray-400">{project.category}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <Button variant="link" className="text-nodesprint-orange p-0 h-auto hover:text-nodesprint-orange/80">
          View Project Details <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Projects;
