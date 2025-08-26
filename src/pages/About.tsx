import { Car, Users, Award, MapPin, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Qualité',
      description: 'Nous utilisons uniquement des produits et équipements de qualité professionnelle pour garantir un service irréprochable.'
    },
    {
      icon: Users,
      title: 'Équipe experte',
      description: 'Notre équipe de techniciens qualifiés possède une expérience solide dans l\'entretien automobile.'
    },
    {
      icon: Clock,
      title: 'Rapidité',
      description: 'Nous respectons vos horaires avec des services efficaces et des délais d\'intervention optimisés.'
    },
    {
      icon: Target,
      title: 'Satisfaction client',
      description: 'Votre satisfaction est notre priorité. Nous nous engageons à dépasser vos attentes à chaque visite.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '3', label: 'Années d\'expérience' },
    { number: '5', label: 'Services spécialisés' },
    { number: '100%', label: 'Satisfaction garantie' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              À propos de ZAMSA
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Découvrez l'histoire de Zaly Multi-Services Auto, votre partenaire de confiance 
              pour l'entretien automobile à Nzérékoré
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-poppins font-bold mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">ZAMSA (Zaly Multi-Services Auto)</strong> a été créée avec une vision claire : 
                    offrir des services d'entretien automobile de qualité professionnelle à Nzérékoré et ses environs.
                  </p>
                  <p>
                    Le nom "Zaly" reflète notre engagement envers l'innovation et la modernité dans le secteur 
                    de l'entretien automobile en Guinée. Nous combinons techniques traditionnelles éprouvées 
                    et technologies modernes pour garantir un service optimal.
                  </p>
                  <p>
                    Depuis notre création, nous nous sommes imposés comme une référence dans la région grâce 
                    à notre professionnalisme, notre rapidité d'exécution et notre engagement envers la 
                    satisfaction client.
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <Card className="service-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <Car className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-poppins">Notre Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      Fournir des services d'entretien automobile de haute qualité, 
                      accessibles et fiables, tout en contribuant au développement 
                      du secteur automobile en Guinée forestière.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Nos Valeurs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="animate-scale-in bg-white hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-gradient-secondary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                ZAMSA en Chiffres
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-poppins font-bold">
                Notre Localisation
              </h2>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Idéalement situés à Nzérékoré pour servir toute la région de la Guinée forestière
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Nzérékoré, Guinée</h3>
              <p className="text-lg opacity-90 mb-4">
                Centre-ville, facilement accessible depuis tous les quartiers
              </p>
              <p className="opacity-80">
                Horaires d'ouverture : Lundi - Samedi, 8h00 - 18h00
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;