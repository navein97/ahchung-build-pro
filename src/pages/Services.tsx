import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Wrench, Droplets, PaintBucket, Hammer, Pipette } from "lucide-react";
import renovationImage from "@/assets/service-renovation.jpg";
import kitchenImage from "@/assets/service-kitchen.jpg";
import plumbingImage from "@/assets/service-plumbing.jpg";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Complete Home Renovation",
      description: "Transform your entire home with our comprehensive renovation services.",
      features: [
        "Full house makeovers",
        "Interior design consultation",
        "Structural modifications",
        "Flooring installation",
        "Painting and finishing",
        "Custom carpentry work",
      ],
      image: renovationImage,
    },
    {
      icon: <PaintBucket className="h-10 w-10" />,
      title: "Kitchen Renovation",
      description: "Create your dream kitchen with modern designs and quality materials.",
      features: [
        "Custom kitchen cabinets",
        "Countertop installation",
        "Backsplash tiling",
        "Kitchen plumbing",
        "Electrical work",
        "Modern appliance fitting",
      ],
      image: kitchenImage,
    },
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "Bathroom Makeover",
      description: "Transform your bathroom into a modern, comfortable space.",
      features: [
        "Complete bathroom renovation",
        "Waterproofing",
        "Tile installation",
        "Shower and bathtub setup",
        "Vanity and storage",
        "Modern fixtures",
      ],
      image: plumbingImage,
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Plumbing Repairs",
      description: "Expert plumbing solutions for all your water system needs.",
      features: [
        "Pipe leak detection and repair",
        "Low water pressure fixes",
        "Drain cleaning",
        "Water heater repairs",
        "Faucet and fixture replacement",
        "Emergency plumbing services",
      ],
      image: plumbingImage,
    },
    {
      icon: <Pipette className="h-10 w-10" />,
      title: "Plumbing Installation",
      description: "Professional installation of new plumbing systems and fixtures.",
      features: [
        "New piping installation",
        "Water filtration systems",
        "Sink and basin installation",
        "Toilet installation",
        "Shower systems",
        "Water pump installation",
      ],
      image: plumbingImage,
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Maintenance Services",
      description: "Regular maintenance to keep your home in perfect condition.",
      features: [
        "Preventive maintenance",
        "Routine inspections",
        "Minor repairs",
        "Touch-up work",
        "Pipe maintenance",
        "Emergency support",
      ],
      image: renovationImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive renovation and plumbing solutions for homes across Kuala Lumpur & Selangor
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">What We Offer:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Licensed & Experienced</h3>
                  <p className="text-muted-foreground">
                    Over 10 years of professional experience with fully licensed and insured services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    We use only high-quality materials and products that ensure lasting results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
                  <p className="text-muted-foreground">
                    Transparent, competitive pricing with no hidden costs or surprises.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    We're not done until you're completely satisfied with the work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your renovation or plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request a Free Quote
              </Button>
            </Link>
            <a href="tel:+60186629350">
              <Button size="lg">
                Call Now: 018-6629350
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
