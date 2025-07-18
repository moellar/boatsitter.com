import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images for the gallery - these represent boat services
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      alt: "Luxury yacht maintenance"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", 
      alt: "Boat storage facility"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      alt: "Engine maintenance work"
    },
    {
      src: "https://images.unsplash.com/photo-1582576076471-7e17e6e0d907?w=800&q=80",
      alt: "Boat renovation project"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      alt: "Marina services"
    },
    {
      src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
      alt: "Professional boat cleaning"
    },
    {
      src: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=800&q=80",
      alt: "Electrical system installation"
    },
    {
      src: "https://images.unsplash.com/photo-1573160103600-b13a15c2cec4?w=800&q=80",
      alt: "Fiberglass repair work"
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