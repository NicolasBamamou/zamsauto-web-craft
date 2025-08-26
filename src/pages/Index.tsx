import { Link } from 'react-router-dom';
import { Star, CheckCircle, Car, Droplets, Gauge, Settings, Wrench, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-car.jpg';

const Index = () => {
  const services = [
    {
      title: 'Lavage Premium',
      description: 'Lavage complet intérieur et extérieur',
      icon: Droplets,
      color: 'text-blue-500'
    },
    {
      title: 'Changement d\'huile',
      description: 'Vidange moteur et boîte de vitesse',
      icon: Gauge,
      color: 'text-green-500'
    },
    {
      title: 'Changement pneus',
      description: 'Montage et équilibrage professionnel',
      icon: Car,
      color: 'text-orange-500'
    },
    {
      title: 'Entretien préventif',
      description: 'Contrôles réguliers pour éviter les pannes',
      icon: Settings,
      color: 'text-purple-500'
    },
    {
      title: 'Diagnostic rapide',
      description: 'Batterie, freins, liquides, éclairage',
      icon: Wrench,
      color: 'text-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Amadou Diallo',
      rating: 5,
      comment: 'Service impeccable ! Mon véhicule n\'a jamais été aussi propre. Je recommande vivement ZAMSA.'
    },
    {
      name: 'Fatoumata Camara',
      rating: 5,
      comment: 'Équipe professionnelle et prix raisonnables. La vidange a été faite rapidement et proprement.'
    },
    {
      name: 'Ibrahima Condé',
      rating: 5,
      comment: 'Excellent service client et travail de qualité. Je suis client fidèle depuis 2 ans.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                  ZAMSA
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-normal opacity-90">
                    Zaly Multi-Services Auto
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Votre partenaire de confiance pour l'entretien automobile à Nzérékoré. 
                  Services professionnels, qualité garantie, prix abordables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="btn-hero text-lg px-8 py-4">
                    <Link to="/booking">
                      Prendre rendez-vous
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild className="contact-btn text-lg px-8 py-4">
                    <a href="tel:+224XXXXXXXX">
                      <Phone className="h-5 w-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <img 
                  src={heroImage} 
                  alt="Véhicule après lavage professionnel ZAMSA"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Nos Services Professionnels
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Des services complets d'entretien automobile par des professionnels qualifiés
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="service-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-hero">
                <Link to="/services">
                  Voir tous nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Témoignages Clients
              </h2>
              <p className="text-lg text-muted-foreground">
                Ce que disent nos clients satisfaits
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-2" />
                      <span className="font-semibold">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Contactez-nous dès maintenant
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Notre équipe est prête à prendre soin de votre véhicule
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="whatsapp-btn text-lg px-8 py-4">
                <a href="https://wa.me/224XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild className="contact-btn text-lg px-8 py-4">
                <Link to="/contact">
                  Nous localiser
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
