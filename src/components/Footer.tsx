import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border mt-20 font-['Poppins']">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary font-['Poppins']">
              Sai Krishna Plastic Industries
            </h3>
            <p className="text-sm text-muted-foreground">
              Leading manufacturer of poultry equipment and systems in India, serving the industry since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ourprojects" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Poultry Drinkers & Feeders</li>
              <li>Brooders & Heating Systems</li>
              <li>Poultry Exhaust Fans</li>
              <li>Pan Feeding Systems</li>
              <li>Nipple Drinker Systems</li>
              <li>Cages & Housing Equipment</li>
              <li>Climate Control Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Industrial Park Kondapur,<br />Kondapur Village, Medak District,<br />Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 94404 06200</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@saikrishnapoultry.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">www.saikrishnapoultry.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sai Krishna Plastic Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
