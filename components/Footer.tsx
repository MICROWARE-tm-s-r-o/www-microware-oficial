import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mw-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & History */}
          <div>
            <div className="font-bold text-2xl tracking-tighter text-white mb-4">
              MICRO<span className="text-mw-red">WARE</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Společnost s tradicí od roku 1988. Poskytujeme komplexní IT služby, automatizaci a vývoj software pro moderní firmy i domácnosti.
            </p>
            <div className="text-xs text-gray-500">
              <p>IČ: {COMPANY_INFO.vat.replace('CZ', '')}</p>
              <p>DIČ: {COMPANY_INFO.vat}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mw-orange flex-shrink-0" />
                <span>
                  <strong>Sídlo:</strong> {COMPANY_INFO.address_hq}<br/>
                  <strong>Provozovna:</strong> {COMPANY_INFO.address_office}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mw-orange flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mw-orange flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-mw-orange flex-shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sluzby" className="hover:text-mw-orange transition-colors">Správa sítí</Link></li>
              <li><Link to="/sluzby" className="hover:text-mw-orange transition-colors">Automatizace domácností</Link></li>
              <li><Link to="/sluzby" className="hover:text-mw-orange transition-colors">Programování a AI</Link></li>
              <li><Link to="/sluzby" className="hover:text-mw-orange transition-colors">Servis a 3D tisk</Link></li>
              <li className="pt-2"><Link to="/kontakt" className="hover:text-mw-orange transition-colors">Kontaktní formulář</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MICROWARE (tm), s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};