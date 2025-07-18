import { MessageCircle, Mail, MapPin, Anchor } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/23057252366", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:boatsitter@gmail.com";
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6" />
              <h3 className="font-poppins text-xl font-bold">Boat Sitter Mauritius</h3>
            </div>
            <p className="font-poppins text-primary-light mb-4">
              Your trusted partner for comprehensive marine services in Grand Baie, Mauritius.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsApp}
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={handleEmailClick}
                className="p-2 bg-primary-light rounded-full hover:bg-primary-dark transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-light">
              <li>• Boat Storage</li>
              <li>• New Boat Construction</li>
              <li>• Renovation & Restoration</li>
              <li>• Mechanical & Electrical Work</li>
              <li>• Paint, Gelcoat & Fiberglass</li>
              <li>• Licensing & Survey</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-light">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>+230 5725 2366</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>boatsitter@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Grand Baie, Mauritius</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light pt-8 text-center">
          <p className="font-poppins text-primary-light">
            © {new Date().getFullYear()} Boat Sitter Mauritius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;