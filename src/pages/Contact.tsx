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

        {/* Quick Actions (modern layered gradient) */}
        <section className="relative py-28 overflow-hidden">
          {/* Base gradient layers */}
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(140deg,hsl(215_14%_9%)_0%,hsl(221_58%_14%)_45%,hsl(221_63%_18%)_70%,hsl(221_66%_22%)_100%)]" />
          {/* Accent radial glows */}
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,hsl(221_80%_52%/.18),transparent_60%),radial-gradient(circle_at_85%_75%,hsl(221_85%_48%/.15),transparent_65%),radial-gradient(circle_at_50%_100%,hsl(221_70%_35%/.25),transparent_70%)]" />
          {/* Subtle grid texture */}
          <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:140px_140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--surface-overlay))] text-[10px] tracking-wider uppercase text-[hsl(var(--text-secondary))] mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Contact Express
              </span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight">
                Actions Rapides
              </h2>
              <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
                Choisissez le moyen le plus pratique pour nous joindre immédiatement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {quickActions.map((action, index) => (
                <Card
                  key={action.title}
                  className="relative overflow-hidden group animate-scale-in border border-[hsl(var(--border))]/60 bg-[hsl(var(--card))] backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,hsl(221_80%_55%/.18),transparent_70%)]" />
                  <CardHeader className="text-center relative">
                    <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins mb-1">{action.title}</CardTitle>
                    <CardDescription className="text-[hsl(var(--text-secondary))]">{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <Button asChild className={`${action.style} w-full justify-center`}> 
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

        {/* Map Section (immersive dark gradient) */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(135deg,hsl(215_14%_9%)_0%,hsl(221_56%_15%)_55%,hsl(221_62%_19%)_100%)]" />
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,hsl(221_80%_52%/.18),transparent_65%),radial-gradient(circle_at_85%_80%,hsl(221_85%_48%/.15),transparent_65%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:160px_160px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--surface-overlay))] text-[10px] tracking-wider uppercase text-[hsl(var(--text-secondary))] mb-6">Localisation</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight">Notre Localisation</h2>
              <p className="text-lg text-[hsl(var(--text-secondary))]">Nous sommes idéalement situés au centre de Nzérékoré</p>
            </div>
            <Card className="relative overflow-hidden border border-[hsl(var(--border)/0.6)] bg-[hsl(var(--card))]/60 backdrop-blur">
              <CardContent className="p-0">
                <div className="relative aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(221_80%_55%/.08),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)/0),hsl(var(--background)/0.4))]" />
                  <div className="text-center relative z-10 text-[hsl(var(--text-secondary))]">
                    <MapPin className="h-16 w-16 mx-auto mb-5 text-primary drop-shadow" />
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">ZAMSA - Nzérékoré</h3>
                    <p>Centre-ville, près du marché central</p>
                    <p className="text-sm mt-3 italic">Carte interactive bientôt disponible</p>
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