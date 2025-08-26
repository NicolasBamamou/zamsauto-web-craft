import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-accent text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-poppins font-bold">ZAMSA</span>
                <p className="text-xs text-muted-foreground">Zaly Multi-Services Auto</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre partenaire de confiance pour l'entretien automobile à Nzérékoré. 
              Services professionnels de qualité pour votre véhicule.
            </p>
          </div>

          {/* Services Rapides */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Lavage Premium</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Changement d'huile</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Changement pneus</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Entretien préventif</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Diagnostic rapide</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nzérékoré, Guinée</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+224 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@zamsa-auto.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Lun-Sam: 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Actions Rapides */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Actions Rapides</h4>
            <div className="space-y-3">
              <Button asChild className="contact-btn w-full justify-start">
                <a href="tel:+224XXXXXXXX">
                  <Phone className="h-4 w-4" />
                  Appeler maintenant
                </a>
              </Button>
              <Button asChild className="whatsapp-btn w-full justify-start">
                <a href="https://wa.me/224XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/booking">
                  Prendre RDV en ligne
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ZAMSA - Zaly Multi-Services Auto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;