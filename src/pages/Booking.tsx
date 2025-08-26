import { useState } from 'react';
import { Calendar, Clock, Car, User, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      id: 'lavage-simple',
      name: 'Lavage Simple',
      duration: '30 min',
      price: '25,000 GNF',
      description: 'Lavage extérieur et aspirateur intérieur'
    },
    {
      id: 'lavage-premium',
      name: 'Lavage Premium',
      duration: '45 min',
      price: '35,000 GNF',
      description: 'Lavage complet intérieur/extérieur avec produits premium'
    },
    {
      id: 'vidange',
      name: 'Changement d\'huile',
      duration: '30 min',
      price: '80,000 GNF',
      description: 'Vidange moteur + filtre à huile'
    },
    {
      id: 'pneus',
      name: 'Changement de pneus',
      duration: '20 min',
      price: '15,000 GNF',
      description: 'Montage et équilibrage par pneu'
    },
    {
      id: 'entretien',
      name: 'Entretien préventif',
      duration: '60 min',
      price: '35,000 GNF',
      description: 'Contrôle général + diagnostic'
    },
    {
      id: 'diagnostic',
      name: 'Diagnostic rapide',
      duration: '25 min',
      price: '20,000 GNF',
      description: 'Test batterie, freins, liquides, éclairage'
    }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  // Generate next 14 days (excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    
    for (let i = 1; count < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long' 
          })
        });
        count++;
      }
    }
    
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert('Demande de rendez-vous envoyée ! Nous vous contacterons pour confirmer.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Prendre Rendez-vous
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Réservez votre créneau en quelques clics. Service rapide, qualité garantie !
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Service Selection */}
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-poppins">
                    <Car className="h-6 w-6 mr-3 text-primary" />
                    1. Choisissez votre service
                  </CardTitle>
                  <CardDescription>
                    Sélectionnez le service dont vous avez besoin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedService === service.id
                            ? 'border-primary bg-primary/5 shadow-md'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{service.name}</h3>
                          <span className="text-primary font-bold">{service.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <span className="text-xs bg-accent px-2 py-1 rounded">{service.duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date Selection */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-poppins">
                    <Calendar className="h-6 w-6 mr-3 text-primary" />
                    2. Choisissez la date
                  </CardTitle>
                  <CardDescription>
                    Nous sommes ouverts du lundi au samedi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {availableDates.map((date) => (
                      <Button
                        key={date.value}
                        type="button"
                        variant={selectedDate === date.value ? "default" : "outline"}
                        className={`p-4 h-auto ${
                          selectedDate === date.value 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-accent'
                        }`}
                        onClick={() => setSelectedDate(date.value)}
                      >
                        <div className="text-center">
                          <div className="font-medium capitalize">{date.label}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Time Selection */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-poppins">
                    <Clock className="h-6 w-6 mr-3 text-primary" />
                    3. Choisissez l'heure
                  </CardTitle>
                  <CardDescription>
                    Créneaux disponibles de 8h à 18h (pause 12h30-14h)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={selectedTime === time ? 'bg-primary text-white' : ''}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-poppins">
                    <User className="h-6 w-6 mr-3 text-primary" />
                    4. Vos informations
                  </CardTitle>
                  <CardDescription>
                    Pour confirmer votre rendez-vous
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nom complet *</Label>
                      <Input 
                        id="fullName" 
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
                      <Label htmlFor="email">Email (optionnel)</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleInfo">Véhicule</Label>
                      <Input 
                        id="vehicleInfo" 
                        placeholder="Marque, modèle, année (ex: Toyota Corolla 2020)"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes supplémentaires</Label>
                    <Textarea 
                      id="notes"
                      placeholder="Précisions sur votre demande, problèmes spécifiques..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Summary & Submit */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedService && (
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span>Service:</span>
                        <span className="font-semibold">
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span>Date:</span>
                        <span className="font-semibold">
                          {availableDates.find(d => d.value === selectedDate)?.label}
                        </span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span>Heure:</span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                    )}
                    {selectedService && (
                      <div className="flex justify-between items-center py-2 text-lg font-bold text-primary">
                        <span>Prix estimé:</span>
                        <span>{services.find(s => s.id === selectedService)?.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Button 
                      type="submit" 
                      className="btn-hero w-full text-lg py-4"
                      disabled={!selectedService || !selectedDate || !selectedTime}
                    >
                      Confirmer le rendez-vous
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Besoin d'aide pour réserver ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre équipe est disponible pour vous aider à choisir le meilleur service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="contact-btn">
                <a href="tel:+224XXXXXXXX">
                  <Phone className="h-4 w-4 mr-2" />
                  Appeler maintenant
                </a>
              </Button>
              <Button asChild className="whatsapp-btn">
                <a href="https://wa.me/224XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;