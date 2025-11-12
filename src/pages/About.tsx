import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering top-quality renovation and plumbing work that stands the test of time.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your needs and work to exceed your expectations.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Timely Completion",
      description: "We respect your time and complete projects on schedule without compromising on quality.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Honest & Transparent",
      description: "Fair pricing, clear communication, and no hidden costs. We build trust through honesty.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AH CHUNG RENOVATION</h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted partner for quality renovation and plumbing services in Cheras, serving all of Kuala Lumpur & Selangor
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Based in Taman Taynton View, Cheras, Selangor, AH CHUNG RENOVATION has been serving the local community
                with dedication and expertise for over a decade. What started as a small plumbing service has grown into
                a comprehensive renovation and plumbing company, trusted by hundreds of satisfied homeowners across
                Kuala Lumpur and Selangor.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Led by Ah Chung, our experienced team brings a wealth of knowledge in all aspects of home renovation and
                plumbing work. From fixing simple pipe leakages to complete home makeovers, we handle every project with
                the same level of care and professionalism.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to quality craftsmanship, honest pricing, and customer satisfaction has made us one of the
                most trusted renovation and plumbing services in the Cheras area. We treat every home as if it were our own,
                ensuring that every project is completed to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Service Area</h2>
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Based in Cheras</h3>
                  <p className="text-muted-foreground">
                    49 Jalan Bee Eng 3, Taman Taynton View, 56000 Cheras, Kuala Lumpur
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3">We Serve:</h4>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-muted-foreground">
                    <li>• Cheras</li>
                    <li>• Kuala Lumpur</li>
                    <li>• Petaling Jaya</li>
                    <li>• Subang Jaya</li>
                    <li>• Shah Alam</li>
                    <li>• Ampang</li>
                    <li>• Kajang</li>
                    <li>• Puchong</li>
                    <li>• All Selangor areas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team Leader</h2>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Ah Chung</h3>
                <p className="text-accent font-medium mb-4">Founder & Lead Contractor</p>
                <p className="text-muted-foreground mb-4">
                  With over 10 years of hands-on experience in renovation and plumbing, Ah Chung leads our team with
                  expertise and dedication. His commitment to quality work and customer satisfaction has built a
                  reputation of trust and excellence throughout Kuala Lumpur and Selangor.
                </p>
                <p className="text-muted-foreground">
                  Ah Chung personally oversees every project, ensuring that each job meets our high standards and
                  exceeds customer expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your renovation or plumbing project. Contact us today for a free consultation.
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

export default About;
