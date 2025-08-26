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
        <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
          {/* Decorative ambient elements */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,hsl(221_80%_55%/.20),transparent_60%),radial-gradient(circle_at_85%_75%,hsl(221_75%_50%/.15),transparent_65%)]" />
          <div className="pointer-events-none absolute -top-32 -right-32 w-[38rem] h-[38rem] bg-[conic-gradient(from_210deg,transparent_0deg,hsl(221_80%_55%/.35)_140deg,transparent_300deg)] blur-3xl opacity-40" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_50%_50%,hsl(221_80%_55%/.18),transparent_70%)] blur-2xl opacity-60" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Premium Auto Care
                </span>
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
        <section className="py-20 bg-[hsl(var(--background))] relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 tracking-tight text-foreground">
                Nos Services Professionnels
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[hsl(var(--text-secondary))] leading-relaxed">
                Des services complets d'entretien automobile par des professionnels qualifiés
              </p>
            </div>
            
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
      className="service-card animate-scale-in group relative overflow-hidden bg-[hsl(var(--card)_/_0.85)] border border-[hsl(var(--border)/0.6)] hover:border-[hsl(var(--border)/0.85)] transition-all before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500 before:bg-[radial-gradient(circle_at_50%_35%,hsl(221_80%_55%/.18),transparent_70%)] hover:before:opacity-100 hover:shadow-[0_8px_22px_-6px_hsl(var(--background)_/_0.65),0_3px_10px_-2px_hsl(var(--background)_/_0.55)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-[hsl(var(--text-secondary))]">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-16">
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
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(135deg,hsl(215_14%_9%)_0%,hsl(221_55%_14%)_45%,hsl(221_60%_18%)_100%)]" />
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,hsl(221_83%_30%/_0.35),transparent_65%)]" />
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><path d=\'M0 200H400V201H0z\' fill=\'%23ffffff\' fill-opacity=\'0.06\'/><path d=\'M200 0V400H199V0z\' fill=\'%23ffffff\' fill-opacity=\'0.06\'/></svg>')]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 relative">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 tracking-tight text-foreground">
                Témoignages Clients
              </h2>
              <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed">
                Ce que disent nos clients satisfaits
              </p>
            </div>
            
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name} 
      className="animate-fade-in-up relative bg-[hsl(var(--card)_/_0.88)] backdrop-blur-sm border border-[hsl(var(--border)/0.55)] hover:border-[hsl(var(--border)/0.85)] transition-colors shadow-[0_4px_12px_-4px_hsl(var(--background)_/_0.55),0_2px_4px_-1px_hsl(var(--background)_/_0.35)] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:border before:border-white/5 hover:shadow-[0_6px_18px_-4px_hsl(var(--background)_/_0.65),0_3px_6px_-1px_hsl(var(--background)_/_0.45)]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-[hsl(var(--text-secondary))] mb-4 italic leading-relaxed">
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
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(140deg,hsl(215_14%_9%)_0%,hsl(221_58%_14%)_45%,hsl(221_63%_18%)_70%,hsl(221_66%_22%)_100%)]" />
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_18%_30%,hsl(221_80%_52%/.18),transparent_60%),radial-gradient(circle_at_82%_70%,hsl(221_85%_48%/.15),transparent_65%),radial-gradient(circle_at_50%_100%,hsl(221_70%_35%/.25),transparent_70%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:140px_140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--surface-overlay))] text-[10px] tracking-wider uppercase text-[hsl(var(--text-secondary))]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Besoin d'aide
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight">
              Contactez-nous dès maintenant
            </h2>
            <p className="text-xl mb-12 text-[hsl(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed">
              Notre équipe est prête à prendre soin de votre véhicule
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="btn-hero text-lg px-10 py-5">
                <a href="https://wa.me/224XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="px-10 py-5 text-lg border-[hsl(var(--border)/0.6)] hover:bg-[hsl(var(--card))]">
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
