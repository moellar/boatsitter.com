import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marina.jpg";
import boatsitterLogo from "/lovable-uploads/40d62968-1772-4989-9f40-f45c232f3798.png";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/23057252366", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={boatsitterLogo} 
            alt="The Boatsitter - Boat Care Service" 
            className="h-32 md:h-40 mx-auto mb-4"
          />
        </div>
        
        <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your One-Stop Shop for All{" "}
          <span className="text-primary-light">Boat Services</span>{" "}
          in Mauritius
        </h1>
        
        <p className="font-poppins text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Storage, repairs, renovation, licensing, management & more.
        </p>
        
        <Button 
          onClick={handleWhatsApp}
          size="lg"
          className="font-poppins text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white border-0"
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Contact us on WhatsApp
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;