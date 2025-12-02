import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle, Cpu, Shield, Clock } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { InquiryType } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-mw-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
                src="https://picsum.photos/id/48/1920/1080" 
                alt="Technology Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-mw-dark/90 to-mw-blue/80 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <span className="inline-block bg-mw-orange/20 text-mw-orange px-3 py-1 rounded-full text-sm font-semibold border border-mw-orange/30">
                Spolehlivé IT od roku 1988
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Váš partner pro <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  Moderní Technologie
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Zajišťujeme správu sítí, automatizaci budov a programování na míru s využitím AI. Rodinná firma s důrazem na kvalitu a individuální přístup.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/sluzby">
                    <Button variant="primary">
                    Naše služby <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
                <Link to="/kontakt">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mw-blue">
                    Kontaktujte nás
                    </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
               {/* Floating Glass Effect Card */}
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl">
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-mw-orange" /> Inovace & AI
                 </h3>
                 <p className="text-gray-200 mb-4">
                    Neustále sledujeme nové trendy. Při programování a správě využíváme nejnovější technologie a umělou inteligenci pro maximalizaci vaší efektivity.
                 </p>
                 <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-mw-orange" /> Open Source modely</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-mw-orange" /> Automatizace procesů</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-mw-orange" /> Bezpečná infrastruktura</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Co pro vás můžeme udělat?" 
            subtitle="Komplexní služby od správy hardware až po vývoj software."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="group p-6 bg-slate-50 rounded-xl border border-gray-100 hover:border-mw-orange/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center text-mw-blue mb-6 group-hover:bg-mw-orange group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-mw-dark mb-3 group-hover:text-mw-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / History Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <img 
                    src="https://picsum.photos/id/180/800/600" 
                    alt="Laptop on desk" 
                    className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-mw-blue p-6 rounded-lg shadow-lg text-white hidden md:block">
                    <p className="font-bold text-3xl">36+</p>
                    <p className="text-sm opacity-90">Let zkušeností</p>
                </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-mw-dark mb-6">Od Commodore k Umělé Inteligenci</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Společnost MICROWARE (tm), s.r.o. byla založena Tomášem Macourkem již v roce 1988. 
                V roce 1991 jsme se stali prvním autorizovaným servisem pro legendární počítače Commodore a Amiga.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dnes stavíme na desítkách let zkušeností, ale díváme se do budoucnosti. 
                Kombinujeme tradiční spolehlivost rodinné firmy s nejmodernějšími technologiemi 
                v oblasti automatizace a AI.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-mw-blue" />
                    <span className="font-medium text-sm">Ověření partneři</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-mw-blue" />
                    <span className="font-medium text-sm">Flexibilita</span>
                </div>
              </div>
              <Link to="/o-nas">
                <Button variant="secondary">Více o naší historii</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-mw-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <Cpu className="w-64 h-64 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Máte projekt nebo problém k řešení?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Neztrácejte čas hledáním. Napište nám ihned a my navrhneme řešení na míru vašim potřebám.
                    </p>
                    <ul className="space-y-2 text-blue-100 mb-8">
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-mw-orange" /> Rychlá odezva</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-mw-orange" /> Individuální přístup</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-mw-orange" /> Cenová dostupnost</li>
                    </ul>
                </div>
                <div>
                    <InquiryForm defaultSubject={InquiryType.GENERAL} />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};