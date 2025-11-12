import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wrench, Home as HomeIcon, Droplets, Star } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";
import plumbingImage from "@/assets/service-plumbing.jpg";
import renovationImage from "@/assets/service-renovation.jpg";
import kitchenImage from "@/assets/service-kitchen.jpg";
import bathroomImage from "@/assets/gallery-bathroom.jpg";
import livingImage from "@/assets/gallery-living.jpg";

const Home = () => {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Home Renovation",
      description: "Complete home makeovers with quality craftsmanship and attention to detail.",
      image: renovationImage,
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Kitchen & Bathroom Makeover",
      description: "Transform your kitchen and bathroom into modern, functional spaces.",
      image: kitchenImage,
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Plumbing Services",
      description: "Professional plumbing repairs, installations, and leak detection.",
      image: plumbingImage,
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Tan",
      location: "Taman Taynton View",
      text: "AH Chung fixed our pipe leakage fast and we love the new bathroom! Very professional and affordable.",
      rating: 5,
    },
    {
      name: "Mr. Lee",
      location: "Cheras",
      text: "Excellent renovation work! The team was punctual, clean, and delivered exactly what we wanted.",
      rating: 5,
    },
  ];

  const galleryImages = [
    { src: bathroomImage, alt: "Modern bathroom renovation" },
    { src: livingImage, alt: "Living room makeover" },
    { src: kitchenImage, alt: "Kitchen renovation" },
    { src: renovationImage, alt: "Home renovation project" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Quality home renovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative container text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Quality Home Renovation & Plumbing in Cheras
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Trusted renovation & plumbing experts serving Kuala Lumpur & Selangor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+60186629350">
              <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-background/20">
                Call: 018-6629350
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AH CHUNG RENOVATION?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced, reliable, and affordable renovation & plumbing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "10+ Years of Experience",
              "Licensed & Insured",
              "Quality Workmanship",
              "Affordable Pricing",
              "Timely Completion",
              "Customer Satisfaction Guaranteed",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive renovation and plumbing solutions for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-accent mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="link" className="p-0 h-auto">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-lg text-muted-foreground">
              See the quality of our renovation and plumbing work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">View Project</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button size="lg">See Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+60186629350">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20">
                Call: 018-6629350
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
