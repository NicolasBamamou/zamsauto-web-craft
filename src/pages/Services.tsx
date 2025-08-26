import { Car, Droplets, Gauge, Settings, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Lavage Premium',
      description: 'Lavage complet intérieur et extérieur avec produits écologiques de qualité',
      icon: Droplets,
      features: ['Lavage extérieur haute pression', 'Nettoyage intérieur complet', 'Aspirateur professionnel', 'Produits écologiques'],
      price: 'À partir de 25,000 GNF',
      duration: '45 min',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 2,
      title: 'Changement d\'huile',
      description: 'Vidange moteur et boîte de vitesse avec filtres de qualité premium',
      icon: Gauge,
      features: ['Vidange moteur complète', 'Changement filtre à huile', 'Contrôle niveau liquides', 'Huile de qualité certifiée'],
      price: 'À partir de 80,000 GNF',
      duration: '30 min',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 3,
      title: 'Changement de pneus',
      description: 'Montage, équilibrage et réparation de pneus par des professionnels',
      icon: Car,
      features: ['Montage professionnel', 'Équilibrage de précision', 'Réparation crevaisons', 'Contrôle pression'],
      price: 'À partir de 15,000 GNF',
      duration: '20 min',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: 4,
      title: 'Entretien préventif',
      description: 'Contrôles réguliers pour éviter les pannes et prolonger la vie de votre véhicule',
      icon: Settings,
      features: ['Contrôle général', 'Vérification freins', 'Test batterie', 'Conseil personnalisé'],
      price: 'À partir de 35,000 GNF',
      duration: '60 min',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 5,
      title: 'Diagnostic rapide',
      description: 'Diagnostic complet : batterie, freins, liquides, éclairage et plus',
      icon: Wrench,
      features: ['Test batterie complet', 'Contrôle système freinage', 'Vérification liquides', 'Test éclairage'],
      price: 'À partir de 20,000 GNF',
      duration: '25 min',
      color: 'bg-red-50 border-red-200'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
  <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Nos Services Professionnels
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Des services complets d'entretien automobile par des professionnels qualifiés. 
              Qualité, rapidité et prix abordables garantis.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className={`service-card animate-fade-in-up bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--border)/0.7)] transition-colors`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-[hsl(var(--text-secondary))]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Price & Duration */}
                      <div className="border-t border-accent pt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[hsl(var(--text-secondary))]">Prix:</span>
                          <span className="font-semibold text-primary tracking-tight">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[hsl(var(--text-secondary))]">Durée:</span>
                          <span className="font-medium text-foreground">{service.duration}</span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button asChild className="w-full contact-btn mt-4">
                        <Link to="/booking">
                          Réserver ce service
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (modern layered design) */}
        <section className="relative py-32 overflow-hidden">
          {/* Layered gradients */}
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(140deg,hsl(215_14%_9%)_0%,hsl(221_58%_14%)_45%,hsl(221_63%_18%)_70%,hsl(221_66%_22%)_100%)]" />
          {/* Accent glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_18%_30%,hsl(221_80%_52%/.18),transparent_60%),radial-gradient(circle_at_82%_70%,hsl(221_85%_48%/.15),transparent_65%),radial-gradient(circle_at_50%_100%,hsl(221_70%_35%/.25),transparent_70%)]" />
          {/* Subtle grid */}
          <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:140px_140px]" />
          {/* Top divider */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-[linear-gradient(120deg,hsl(221_80%_50%/.25),hsl(221_80%_60%/.15))] opacity-30 blur-3xl rounded-full" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--surface-overlay))] text-[10px] tracking-wider uppercase text-[hsl(var(--text-secondary))]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Service Premium
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight">
              Prêt à entretenir votre véhicule ?
            </h2>
            <p className="text-lg text-[hsl(var(--text-secondary))] mb-12 leading-relaxed max-w-2xl mx-auto">
              Réservez votre entretien en quelques secondes ou contactez notre équipe pour des conseils personnalisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="btn-hero px-12 py-6 text-base">
                <Link to="/booking">Prendre rendez-vous</Link>
              </Button>
              <Button asChild variant="outline" className="px-12 py-6 text-base border-[hsl(var(--border)/0.55)] hover:bg-[hsl(var(--card))]">
                <a href="tel:+224XXXXXXXX">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;