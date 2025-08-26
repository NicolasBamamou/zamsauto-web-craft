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

        {/* Category Filter (glass bar) */}
        <section className="sticky top-16 z-40 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background)/0.6)] bg-[hsl(var(--background)/0.85)]/80 border-b border-[hsl(var(--border)/0.5)] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${active ? 'border-primary/70 text-primary-foreground' : 'border-[hsl(var(--border)/0.5)] text-[hsl(var(--text-secondary))] hover:border-[hsl(var(--border)/0.8)]'} ${active ? 'bg-gradient-primary shadow-primary/30 shadow-lg' : 'bg-[hsl(var(--card))] hover:bg-[hsl(var(--card)/0.9)]'}`}
                >
                  <category.icon className={`h-4 w-4 ${active ? 'text-white' : 'text-primary'}`} />
                  {category.name}
                  {active && <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-pulse" />}
                </button>
              );
            })}
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

        {/* Regular Gallery (modern dark gradient section) */}
        {standaloneItems.length > 0 && (
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(140deg,hsl(215_14%_9%)_0%,hsl(221_58%_14%)_45%,hsl(221_63%_18%)_70%,hsl(221_66%_22%)_100%)]" />
            <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,hsl(221_80%_52%/.18),transparent_60%),radial-gradient(circle_at_85%_75%,hsl(221_85%_48%/.15),transparent_65%),radial-gradient(circle_at_50%_100%,hsl(221_70%_35%/.25),transparent_70%)]" />
            <div className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:160px_160px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-14 tracking-tight">Nos Réalisations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {standaloneItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="relative overflow-hidden group animate-scale-in border border-[hsl(var(--border))]/60 bg-[hsl(var(--card))] backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(221_80%_55%/.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-center relative z-10">
                          <Car className="h-16 w-16 mx-auto mb-4 text-primary drop-shadow" />
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
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