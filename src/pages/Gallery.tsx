import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";
import bathroomImage from "@/assets/gallery-bathroom.jpg";
import livingImage from "@/assets/gallery-living.jpg";
import kitchenImage from "@/assets/service-kitchen.jpg";
import renovationImage from "@/assets/service-renovation.jpg";
import plumbingImage from "@/assets/service-plumbing.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      title: "Modern Living Room Renovation",
      location: "Cheras",
      image: livingImage,
      category: "Living Room",
    },
    {
      title: "Luxury Bathroom Makeover",
      location: "Taman Taynton View",
      image: bathroomImage,
      category: "Bathroom",
    },
    {
      title: "Contemporary Kitchen Design",
      location: "Kuala Lumpur",
      image: kitchenImage,
      category: "Kitchen",
    },
    {
      title: "Complete Home Renovation",
      location: "Selangor",
      image: heroImage,
      category: "Full House",
    },
    {
      title: "Home Renovation in Progress",
      location: "Cheras",
      image: renovationImage,
      category: "Renovation",
    },
    {
      title: "Professional Plumbing Installation",
      location: "Petaling Jaya",
      image: plumbingImage,
      category: "Plumbing",
    },
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Browse through our completed renovation and plumbing projects across Kuala Lumpur & Selangor
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="text-primary-foreground font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={handleClose}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4 text-white">
              <span className="text-accent font-medium">{projects[selectedImage].category}</span>
              <h3 className="text-xl font-bold mt-2">{projects[selectedImage].title}</h3>
              <p className="text-white/80">{projects[selectedImage].location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Before & After Note */}
      <section className="py-16 bg-secondary">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">See the Transformation</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Each project showcases our commitment to quality workmanship and attention to detail. From small plumbing
            repairs to complete home renovations, we deliver results that exceed expectations.
          </p>
          <p className="text-muted-foreground">
            Want to see more of our work or discuss your own project? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Renovation Journey</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us transform your home with the same quality and care shown in these projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+60186629350">
              <Button size="lg">
                Call: 018-6629350
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
