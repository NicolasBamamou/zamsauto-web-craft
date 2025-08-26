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
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(135deg,hsl(215_14%_9%)_0%,hsl(221_55%_14%)_45%,hsl(221_60%_18%)_100%)]" />
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,hsl(221_83%_30%/_0.35),transparent_60%),radial-gradient(circle_at_85%_80%,hsl(221_83%_25%/_0.25),transparent_65%)]" />
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><path d=\'M0 200H400V201H0z\' fill=\'%23ffffff\' fill-opacity=\'0.05\'/><path d=\'M200 0V400H199V0z\' fill=\'%23ffffff\' fill-opacity=\'0.05\'/></svg>')]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-5 tracking-tight text-foreground">
                Nos Valeurs
              </h2>
              <p className="text-lg text-[hsl(var(--text-secondary))] max-w-3xl mx-auto leading-relaxed">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="relative animate-fade-in-up bg-[hsl(var(--card)_/_0.82)] backdrop-blur-sm border border-[hsl(var(--border)/0.5)] hover:border-[hsl(var(--border)/0.85)] transition-all duration-300 shadow-[0_4px_14px_-4px_hsl(var(--background)_/_0.55),0_2px_4px_-1px_hsl(var(--background)_/_0.35)] hover:shadow-[0_8px_22px_-6px_hsl(var(--background)_/_0.6),0_3px_10px_-2px_hsl(var(--background)_/_0.45)]"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto relative w-16 h-16 mb-5">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(221_83%_55%/_0.6),hsl(221_83%_30%/_0.15))]" />
                      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                      <div className="w-full h-full flex items-center justify-center relative">
                        <value.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-poppins text-foreground tracking-tight">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section (ambient cards) */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(135deg,hsl(215_14%_9%)_0%,hsl(221_56%_15%)_55%,hsl(221_62%_19%)_100%)]" />
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,hsl(221_80%_52%/.18),transparent_65%),radial-gradient(circle_at_80%_70%,hsl(221_85%_48%/.15),transparent_65%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:160px_160px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight">ZAMSA en Chiffres</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative text-center animate-fade-in-up p-6 rounded-2xl border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--card)_/_0.8)] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[hsl(var(--border)/0.85)] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_50%_40%,hsl(221_80%_55%/.18),transparent_68%)] before:opacity-0 hover:before:opacity-100 hover:shadow-[0_8px_22px_-6px_hsl(var(--background)_/_0.65),0_3px_10px_-2px_hsl(var(--background)_/_0.55)]"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2 tracking-tight">
                      {stat.number}
                    </div>
                    <p className="text-[hsl(var(--text-secondary))] font-medium text-sm uppercase tracking-wide">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section (immersive) */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(140deg,hsl(215_14%_9%)_0%,hsl(221_58%_14%)_45%,hsl(221_63%_18%)_70%,hsl(221_66%_22%)_100%)]" />
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_22%_28%,hsl(221_80%_52%/.18),transparent_60%),radial-gradient(circle_at_78%_72%,hsl(221_85%_48%/.15),transparent_65%),radial-gradient(circle_at_50%_100%,hsl(221_70%_35%/.23),transparent_70%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:140px_140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border)/0.4)] to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--surface-overlay))] text-[10px] tracking-wider uppercase text-[hsl(var(--text-secondary))]">
              <MapPin className="h-4 w-4 text-primary" />
              Localisation
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 tracking-tight text-foreground">
              Notre Localisation
            </h2>
            <p className="text-xl mb-12 text-[hsl(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed">
              Idéalement situés à Nzérékoré pour servir toute la région de la Guinée forestière
            </p>
            <div className="relative bg-[hsl(var(--card)_/_0.85)] backdrop-blur-sm rounded-2xl p-10 border border-[hsl(var(--border)/0.55)] overflow-hidden shadow-[0_8px_22px_-6px_hsl(var(--background)_/_0.65),0_3px_10px_-2px_hsl(var(--background)_/_0.55)]">
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_35%,hsl(221_80%_55%/.18),transparent_70%)]" />
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Nzérékoré, Guinée</h3>
              <p className="text-lg mb-4 text-[hsl(var(--text-secondary))]">Centre-ville, facilement accessible depuis tous les quartiers</p>
              <p className="text-[hsl(var(--text-secondary))]">Horaires d'ouverture : Lundi - Samedi, 8h00 - 18h00</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;