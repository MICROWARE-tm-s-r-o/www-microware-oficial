import React from 'react';
import { COMPANY_INFO, WHATSAPP_URL } from '../constants';
import { InquiryForm } from '../components/InquiryForm';
import { MapPin, Phone, Mail, Clock, Building, User, MessageCircle, Box } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-mw-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Kontaktujte nás</h1>
            <p className="text-gray-300">Jsme tu pro vás v Praze i na Kladensku</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info Cards */}
            <div className="space-y-8">
                
                {/* Management / Owner */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-l-4 border-l-mw-orange border-y-gray-100 border-r-gray-100">
                    <h3 className="text-xl font-bold text-mw-dark mb-6 flex items-center gap-2">
                        <User className="w-6 h-6 text-mw-orange" /> Vedení společnosti
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Majitel</p>
                            <p className="text-lg font-bold text-mw-blue">{COMPANY_INFO.owner}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                             <a href={`tel:${COMPANY_INFO.owner_phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-mw-blue font-medium transition-colors">
                                <Phone className="w-5 h-5" />
                                {COMPANY_INFO.owner_phone}
                            </a>
                            <a 
                                href={WHATSAPP_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
                            >
                                <MessageCircle className="w-4 h-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Headquarters */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-mw-blue mb-6 flex items-center gap-2">
                        <Building className="w-6 h-6" /> Sídlo společnosti
                    </h3>
                    <div className="space-y-4 text-gray-600">
                        <p className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-mw-orange mt-1" />
                            <span>{COMPANY_INFO.address_hq}</span>
                        </p>
                        <div className="border-t pt-4 mt-4 space-y-2">
                            <p className="text-sm text-gray-500">IČ: {COMPANY_INFO.vat.replace('CZ', '')}</p>
                            <p className="text-sm text-gray-500">DIČ: {COMPANY_INFO.vat}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                <Box className="w-4 h-4" /> 
                                Datová schránka: <strong className="text-mw-dark font-mono">{COMPANY_INFO.data_box}</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Office */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-mw-blue mb-6 flex items-center gap-2">
                        <MapPin className="w-6 h-6" /> Provozovna & Korespondence
                    </h3>
                    <div className="space-y-4 text-gray-600">
                        <p className="font-medium text-mw-dark">{COMPANY_INFO.address_office}</p>
                        
                        <div className="flex flex-col space-y-3 mt-4">
                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-mw-orange transition-colors">
                                <Phone className="w-5 h-5 text-mw-orange" />
                                <span className="text-lg font-bold">{COMPANY_INFO.phone}</span>
                            </a>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 hover:text-mw-orange transition-colors">
                                <Mail className="w-5 h-5 text-mw-orange" />
                                <span>{COMPANY_INFO.email}</span>
                            </a>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-2">Otevírací doba</h4>
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-mw-orange mt-1" />
                                <div>
                                    <p className="font-medium">Pondělí - Pátek: 9:00 - 17:00</p>
                                    <p className="text-sm text-gray-500">Jiné termíny, víkendy a svátky po telefonické dohodě.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Form & Map */}
            <div className="space-y-8">
                <InquiryForm />

                {/* Interactive Map via Google Maps Embed */}
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 h-80 relative overflow-hidden">
                     <iframe 
                        width="100%" 
                        height="100%" 
                        style={{border:0, borderRadius: '0.5rem'}} 
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=Mar%C5%A1%C3%A1la+Rybalka+223,+Pchery&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Mapa provozovny MicroWare"
                     >
                     </iframe>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};