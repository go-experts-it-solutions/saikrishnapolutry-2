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
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://saikrishnapolutary-backend.onrender.com/api/contact/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ fullName: "", email: "", phone: "", message: "" });

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-2 font-['Poppins']"
                    >
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 font-['Poppins']"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 font-['Poppins']"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 font-['Poppins']"
                    >
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
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
                    <h3 className="font-semibold mb-1 font-['Poppins']">
                      Visit Us
                    </h3>
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
                    <h3 className="font-semibold mb-1 font-['Poppins']">
                      Website
                    </h3>
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
                    <h3 className="font-semibold mb-1 font-['Poppins']">
                      Business Hours
                    </h3>
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
<section className="py-16 bg-muted/50 font-[Poppins]">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

      {/* Factory Address */}
      <Card className="overflow-hidden rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3544988222253!2d78.54009187575546!3d17.441547683437794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c3177907f7%3A0xcedd81a503d62422!2sSai%20Krishna%20Poultry%20Farm!5e0!3m2!1sen!2sin!4v1733049600000!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-52"
          allowFullScreen
        ></iframe>
        <div className="p-6">
          <h3 className="text-xl font-semibold font-[Poppins] mb-3">🏭 Factory Address</h3>
          <p className="text-sm text-muted-foreground font-[Poppins] leading-relaxed">
            Sai Krishna Poultry Equipments,  
            Dharmaram, Karimnagar,  
            Telangana, India – 505416.
          </p>
        </div>
      </Card>

      {/* Head Office */}
      <Card className="overflow-hidden rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.520972766073!2d78.42888657575544!3d17.43377608344149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9789dc32b0c1%3A0xabcd12345789abcd!2sAttapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1733049800000!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-52"
          allowFullScreen
        ></iframe>
        <div className="p-6">
          <h3 className="text-xl font-semibold font-[Poppins] mb-3">🏢 Head Office</h3>
          <p className="text-sm text-muted-foreground font-[Poppins] leading-relaxed">
            2nd Floor, Business Center Plaza,  
            KPHP Road, Kukatpally,  
            Hyderabad, Telangana – 500072.
          </p>
        </div>
      </Card>

      {/* Warehouse */}
      <Card className="overflow-hidden rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.270539670953!2d78.4279552757549!3d17.39761298345778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb965e3f8a2dd1%3A0x4d6596883536c3a9!2sShadnagar!5e0!3m2!1sen!2sin!4v1733049700000!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-52"
          allowFullScreen
        ></iframe>
        <div className="p-6">
          <h3 className="text-xl font-semibold font-[Poppins] mb-3">📦 Warehouse</h3>
          <p className="text-sm text-muted-foreground font-[Poppins] leading-relaxed">
            Industrial Estate, Shed No. 14,  
            Bypass Road, Warangal,  
            Telangana – 506002.
          </p>
        </div>
      </Card>

    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Contact;
