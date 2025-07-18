import { Shield, Star, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Boat Sitter Mauritius
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="font-poppins text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-12">
            Based in the heart of Grand Baie, Mauritius, Boat Sitter Mauritius is your trusted partner 
            for comprehensive marine services. With years of experience in the maritime industry, we 
            provide reliable, professional boat care services that keep your vessel in pristine condition. 
            From routine maintenance to complex renovations, our expert team handles every aspect of boat 
            ownership with precision and care.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">Trusted & Reliable</h3>
              <p className="text-muted-foreground">Years of experience serving the Mauritian maritime community</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">Quality Service</h3>
              <p className="text-muted-foreground">Professional workmanship with attention to every detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Skilled professionals dedicated to marine excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;