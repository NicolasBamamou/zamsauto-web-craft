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
        <section className="bg-gradient-hero text-white py-16">
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className={`service-card ${service.color} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins">{service.title}</CardTitle>
                    <CardDescription className="text-sm">
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
                          <span className="text-sm text-muted-foreground">Prix:</span>
                          <span className="font-semibold text-primary">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Durée:</span>
                          <span className="font-medium">{service.duration}</span>
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

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Prêt à entretenir votre véhicule ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prenez rendez-vous dès maintenant ou contactez-nous pour plus d'informations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/booking">Prendre rendez-vous</Link>
              </Button>
              <Button asChild className="contact-btn">
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