
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, Shield, FileText, Code, Clock, MousePointerClick } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Healthcare Outsourcing Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions tailored to streamline your healthcare operations, improve efficiency, and enhance patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Credentialing Section */}
      <section id="credentialing" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="text-nodesprint-orange h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold">Medical Credentialing</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our comprehensive credentialing services ensure your healthcare providers are properly validated and enrolled with insurance networks to maximize reimbursement opportunities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Provider Enrollment</h4>
                    <p className="text-gray-400">Complete enrollment process with government and private payers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Credential Verification</h4>
                    <p className="text-gray-400">Comprehensive verification of education, training, and licensure</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Payer Enrollment Tracking</h4>
                    <p className="text-gray-400">Systematic monitoring of enrollment status across multiple payers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Re-credentialing Management</h4>
                    <p className="text-gray-400">Timely renewal processing to prevent coverage lapses</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                <a href="#contact">Learn More About Credentialing</a>
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Medical Credentialing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Billing Section */}
      <section id="medical-billing" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
                alt="Medical Billing"
                className="w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="text-nodesprint-orange h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold">Medical Billing</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our expert medical billing services optimize revenue cycles and improve cash flow by ensuring claims are processed accurately and efficiently.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Claims Submission</h4>
                    <p className="text-gray-400">Accurate and timely electronic claims submission to all payers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Denial Management</h4>
                    <p className="text-gray-400">Thorough analysis and resolution of denied claims</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Payment Posting</h4>
                    <p className="text-gray-400">Efficient posting of payments and adjustments to patient accounts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Patient Billing</h4>
                    <p className="text-gray-400">Clear and compassionate billing statements and support</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                <a href="#contact">Learn More About Medical Billing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Coding Section */}
      <section id="medical-coding" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-nodesprint-orange h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold">Medical Coding</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our certified medical coders ensure accurate code assignment for diagnoses and procedures, reducing denials and optimizing reimbursement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">ICD-10 Diagnosis Coding</h4>
                    <p className="text-gray-400">Precise assignment of diagnostic codes reflecting patient conditions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">CPT Procedure Coding</h4>
                    <p className="text-gray-400">Accurate coding of procedures, services, and supplies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">HCPCS Level II Coding</h4>
                    <p className="text-gray-400">Coding for medical supplies, equipment, and non-physician services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Coding Audit & Compliance</h4>
                    <p className="text-gray-400">Regular audits to ensure coding accuracy and regulatory compliance</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                <a href="#contact">Learn More About Medical Coding</a>
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
                alt="Medical Coding"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locum Tenens Section */}
      <section id="locum-tenens" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1666214277655-9a912d9d8b3f"
                alt="Locum Tenens"
                className="w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 bg-nodesprint-orange/20 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="text-nodesprint-orange h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold">Locum Tenens</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our locum tenens services connect healthcare facilities with qualified providers for temporary positions, ensuring continuity of care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Provider Matching</h4>
                    <p className="text-gray-400">Connecting qualified providers with facilities based on specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Credential Verification</h4>
                    <p className="text-gray-400">Thorough background checks and credential verification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Contract Management</h4>
                    <p className="text-gray-400">Handling all contractual aspects of temporary staffing arrangements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-nodesprint-orange h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Transition Support</h4>
                    <p className="text-gray-400">Ensuring smooth transitions between providers for continuity of care</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white">
                <a href="#contact">Learn More About Locum Tenens</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Nodesprint Technologies for comprehensive healthcare outsourcing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-nodesprint-orange hover:bg-nodesprint-orange/80 text-white" size="lg">
                <a href="#contact">
                  <MousePointerClick className="mr-2 h-4 w-4" />
                  Schedule a Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="tel:+15551234567">
                  Call Us Today
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
