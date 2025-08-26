import { MapPin, Phone, Mail, Clock, MessageCircle, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Nzérékoré, Guinée', 'Centre-ville, près du marché central'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+224 XX XX XX XX', 'Disponible 7j/7'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@zamsa-auto.com', 'Réponse sous 24h'],
      color: 'text-orange-500'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Sam: 8h00 - 18h00', 'Dim: Sur rendez-vous'],
      color: 'text-purple-500'
    }
  ];

  const quickActions = [
    {
      title: 'Appel direct',
      description: 'Appelez-nous maintenant pour un service immédiat',
      action: 'Appeler',
      href: 'tel:+224XXXXXXXX',
      icon: Phone,
      style: 'contact-btn'
    },
    {
      title: 'WhatsApp',
      description: 'Contactez-nous via WhatsApp pour une réponse rapide',
      action: 'WhatsApp',
      href: 'https://wa.me/224XXXXXXXX',
      icon: MessageCircle,
      style: 'whatsapp-btn'
    },
    {
      title: 'Rendez-vous',
      description: 'Réservez votre créneau en ligne',
      action: 'Réserver',
      href: '/booking',
      icon: Car,
      style: 'btn-hero'
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
              Contactez-nous
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Notre équipe est à votre disposition pour répondre à vos questions 
              et prendre soin de votre véhicule
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="service-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-poppins">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, i) => (
                      <p key={i} className={`${i === 0 ? 'font-semibold text-foreground' : 'text-sm text-muted-foreground'}`}>
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                Actions Rapides
              </h2>
              <p className="text-lg text-muted-foreground">
                Choisissez le moyen de contact qui vous convient le mieux
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickActions.map((action, index) => (
                <Card 
                  key={action.title}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto bg-gradient-secondary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className={`${action.style} w-full`}>
                      <a 
                        href={action.href}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <action.icon className="h-4 w-4 mr-2" />
                        {action.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-lg text-muted-foreground">
                Vous avez une question spécifique ? N'hésitez pas à nous écrire
              </p>
            </div>
            
            <Card className="service-card">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input 
                        id="name" 
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+224 XX XX XX XX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité</Label>
                      <select 
                        id="service"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="lavage">Lavage Premium</option>
                        <option value="huile">Changement d'huile</option>
                        <option value="pneus">Changement de pneus</option>
                        <option value="entretien">Entretien préventif</option>
                        <option value="diagnostic">Diagnostic rapide</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Décrivez votre demande ou posez votre question..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" className="btn-hero px-8 py-3">
                      Envoyer le message
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Champs obligatoires - Nous vous répondrons sous 24h
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                Notre Localisation
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous sommes idéalement situés au centre de Nzérékoré
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">ZAMSA - Nzérékoré</h3>
                    <p>Centre-ville, près du marché central</p>
                    <p className="text-sm mt-2">Carte interactive bientôt disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;