import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600/10 to-red-700/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-['Poppins']">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Poppins']">
            Get in touch with us for inquiries, orders, or partnerships
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection animation="fade-in-left">
            <Card className="border-2 border-red-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-['Poppins']">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 font-['Poppins']">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 font-['Poppins']">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 font-['Poppins']">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 font-['Poppins']">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your poultry equipment requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 font-['Poppins']">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 font-['Poppins']">
                  Reach out to us through any of the following channels. We're here to help with all your poultry equipment needs!
                </p>
              </div>

              <Card className="hover-lift border-2 border-red-100">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-['Poppins']">Visit Us</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">
                      Factory: Industrial Park Kondapur,<br />
                      Kondapur Village, Medak District<br />
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-red-100">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-['Poppins']">Call Us</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">
                      Phone: +91 94404 06200<br />
                      Landline: 040-2374 4683
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-red-100">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-['Poppins']">Email Us</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">
                      General: info@saikrishnapoultry.com<br />
                      Sales: sales@saikrishnapoultry.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-red-100">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-['Poppins']">Website</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">
                     www.saikrishnapoultry.co.in
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-red-100">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-['Poppins']">Business Hours</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
  {/* Map Section */}
<section className="py-16 bg-muted/50">
  <div className="container mx-auto px-4">
    <Card className="overflow-hidden max-w-6xl mx-auto border-2 border-red-100">
      <div className="aspect-[21/9] bg-muted flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62012520.540350445!2d79.097002!3d18.440857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdfd080c233b3%3A0xdffdfa7ea808c2b6!2sSai%20krishna%20poultry%20equipments!5e0!3m2!1sen!2sin!4v1763564213785!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sai Krishna Poultry Equipments Location"
        />
      </div>
    </Card>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Contact;
