import { useState } from 'react';
import { ChevronLeft, ChevronRight, Car, Droplets, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: Car },
    { id: 'washing', name: 'Lavage', icon: Droplets },
    { id: 'maintenance', name: 'Entretien', icon: Settings }
  ];

  // Placeholder gallery items - in real app, these would be actual photos
  const galleryItems = [
    { id: 1, category: 'washing', title: 'Lavage Premium - Sedan', before: true },
    { id: 2, category: 'washing', title: 'Lavage Premium - Sedan', before: false },
    { id: 3, category: 'washing', title: 'Lavage SUV', before: true },
    { id: 4, category: 'washing', title: 'Lavage SUV', before: false },
    { id: 5, category: 'maintenance', title: 'Changement d\'huile', before: false },
    { id: 6, category: 'maintenance', title: 'Diagnostic moteur', before: false },
    { id: 7, category: 'washing', title: 'Nettoyage intérieur', before: true },
    { id: 8, category: 'washing', title: 'Nettoyage intérieur', before: false },
    { id: 9, category: 'maintenance', title: 'Changement pneus', before: false },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const beforeAfterPairs = [];
  const standaloneItems = [];

  // Group before/after pairs
  const processedIds = new Set();
  filteredItems.forEach(item => {
    if (!processedIds.has(item.id) && item.before) {
      const afterItem = filteredItems.find(i => 
        i.title === item.title && !i.before && !processedIds.has(i.id)
      );
      if (afterItem) {
        beforeAfterPairs.push({ before: item, after: afterItem });
        processedIds.add(item.id);
        processedIds.add(afterItem.id);
      } else {
        standaloneItems.push(item);
        processedIds.add(item.id);
      }
    } else if (!processedIds.has(item.id) && !item.before) {
      standaloneItems.push(item);
      processedIds.add(item.id);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Galerie de nos Réalisations
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Découvrez la qualité de nos services à travers nos réalisations. 
              Avant/après, nos clients sont toujours satisfaits !
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-16 z-40 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-accent'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        {beforeAfterPairs.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-poppins font-bold text-center mb-12">
                Avant / Après
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {beforeAfterPairs.map((pair, index) => (
                  <Card 
                    key={`${pair.before.id}-${pair.after.id}`}
                    className="overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="grid grid-cols-2">
                          {/* Before */}
                          <div className="relative group">
                            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                              <div className="text-center text-muted-foreground">
                                <Car className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Avant</p>
                              </div>
                            </div>
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                              AVANT
                            </div>
                          </div>
                          
                          {/* After */}
                          <div className="relative group">
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                              <div className="text-center text-primary">
                                <Car className="h-12 w-12 mx-auto mb-2" />
                                <p className="text-sm font-medium">Après</p>
                              </div>
                            </div>
                            <div className="absolute top-2 right-2 bg-success text-white px-2 py-1 rounded text-xs font-medium">
                              APRÈS
                            </div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                          <h3 className="font-semibold">{pair.before.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Gallery */}
        {standaloneItems.length > 0 && (
          <section className="py-16 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-poppins font-bold text-center mb-12">
                Nos Réalisations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {standaloneItems.map((item, index) => (
                  <Card 
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <div className="text-center text-primary">
                            <Car className="h-16 w-16 mx-auto mb-4" />
                            <h3 className="font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl font-light text-muted-foreground italic mb-6">
              "La différence est impressionnante ! Mon véhicule avait l'air neuf après leur intervention. 
              Je recommande ZAMSA à tous mes amis."
            </blockquote>
            <cite className="text-lg font-semibold text-primary">- Mariama Diallo, Cliente fidèle</cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Votre véhicule mérite le meilleur
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez nos clients satisfaits et offrez à votre véhicule un traitement professionnel
            </p>
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <a href="/booking">
                Prendre rendez-vous maintenant
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;