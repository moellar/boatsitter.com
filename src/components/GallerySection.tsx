import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Real boat images from Boat Sitter Mauritius
  const galleryImages = [
    {
      src: "/lovable-uploads/433a1cd9-9ff8-44f6-be6a-daa31909b425.png",
      alt: "SEABOB boat - Professional marine service"
    },
    {
      src: "/lovable-uploads/e4f3f8a7-4058-4ade-9ba5-5a184ac1b5a1.png", 
      alt: "Red and white boat restoration project"
    },
    {
      src: "/lovable-uploads/c3c9bd1e-09e2-457e-827b-56871058ad45.png",
      alt: "White speedboat on trailer - Marina services"
    },
    {
      src: "/lovable-uploads/7fbcc849-34ec-4a85-ac64-9263b2617660.png",
      alt: "Blue boat in Grand Baie waters"
    },
    {
      src: "/lovable-uploads/73063f0e-8c10-4178-8812-3839ad3962a5.png",
      alt: "Orange and white boat on trailer - Professional maintenance"
    },
    {
      src: "/lovable-uploads/28895600-9069-4bee-82c3-665681e083de.png",
      alt: "Marina scene with boats and salvage operations"
    },
    {
      src: "/lovable-uploads/43a9afce-739f-4e8d-81f7-c71e3623854a.png",
      alt: "Small fishing boat - Local marine services"
    },
    {
      src: "/lovable-uploads/e432d3ec-89c4-4e73-896c-45faac7fa6c9.png",
      alt: "UNDERSEA WALK boat - Professional boat maintenance"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            See our professional marine services in action
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-poppins text-sm font-medium text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;