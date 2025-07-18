import { 
  Warehouse, 
  Hammer, 
  Wrench, 
  Zap, 
  Palette, 
  FileText, 
  Settings, 
  Anchor 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Warehouse,
      title: "Boat Storage",
      description: "Secure, climate-controlled storage facilities to protect your vessel year-round."
    },
    {
      icon: Hammer,
      title: "New Boat Construction",
      description: "Custom boat building services from design to completion with expert craftsmanship."
    },
    {
      icon: Settings,
      title: "Renovation & Restoration",
      description: "Complete vessel restoration bringing old boats back to their former glory."
    },
    {
      icon: Wrench,
      title: "Mechanical Work",
      description: "Engine repairs, maintenance, and upgrades by certified marine mechanics."
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Complete electrical system installation, repair, and maintenance services."
    },
    {
      icon: Palette,
      title: "Paint & Gelcoat",
      description: "Professional painting, gelcoat repair, and fiberglass work for lasting beauty."
    },
    {
      icon: FileText,
      title: "Licensing & Survey",
      description: "Complete documentation services including licensing, insurance, and surveys."
    },
    {
      icon: Anchor,
      title: "Boat Management",
      description: "Full-service boat management and salvage services for complete peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marine services to keep your boat in perfect condition
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;