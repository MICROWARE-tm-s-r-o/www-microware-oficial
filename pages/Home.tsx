import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle, Cpu, Shield, Clock, ChevronRight } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { InquiryType } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Hero Section - Compact Height */}
      <section className="relative bg-mw-dark text-white overflow-hidden flex items-center py-8 md:py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/id/48/1920/1080" 
                alt="Technology Background" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mw-dark via-mw-dark/95 to-mw-blue/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              
              <div className="inline-flex items-center gap-2 bg-mw-orange/10 backdrop-blur-sm border border-mw-orange/30 rounded-full px-3 py-1 text-mw-orange font-semibold text-xs tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mw-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mw-orange"></span>
                </span>
                Spolehlivé IT již od roku 1988
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Partner pro <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">
                  Vaši Budoucnost
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                Propojujeme svět hardwaru s umělou inteligencí. 
                Komplexní správa sítí, automatizace budov a vývoj software.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/sluzby">
                    <Button variant="primary" className="h-10 px-6 text-sm shadow-lg shadow-mw-orange/20">
                    Prozkoumat služby <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
                <Link to="/kontakt">
                    <Button variant="outline" className="h-10 px-6 text-sm border-white/30 text-white hover:bg-white hover:text-mw-blue backdrop-blur-sm">
                    Nezávazná konzultace
                    </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative pl-10">
               {/* Decorative elements */}
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-mw-blue/30 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-mw-orange/20 rounded-full blur-3xl"></div>

               {/* Floating Glass Effect Card */}
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                 
                 <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 bg-mw-orange rounded-lg text-white shadow-lg shadow-mw-orange/30">
                        <Cpu className="w-5 h-5" /> 
                    </div>
                    Inovace & AI
                 </h3>
                 <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Nespokojíme se s průměrem. Nasazujeme nejnovější technologie a generativní AI.
                 </p>
                 <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-2 rounded-lg border border-white/5">
                        <CheckCircle className="w-3.5 h-3.5 text-mw-orange flex-shrink-0" /> 
                        <span className="font-medium text-xs">Vlastní Open Source LLM modely</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-2 rounded-lg border border-white/5">
                        <CheckCircle className="w-3.5 h-3.5 text-mw-orange flex-shrink-0" /> 
                        <span className="font-medium text-xs">Inteligentní automatizace procesů</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-2 rounded-lg border border-white/5">
                        <CheckCircle className="w-3.5 h-3.5 text-mw-orange flex-shrink-0" /> 
                        <span className="font-medium text-xs">Kybernetická bezpečnost 24/7</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Technologická Řešení" 
            subtitle="Komplexní ekosystém služeb pro váš růst. Od hardwaru po software."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-colors duration-300 group-hover:bg-mw-blue/10"></div>
                
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-mw-blue mb-6 transition-all duration-300 transform group-hover:bg-mw-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-mw-dark mb-3 transition-colors group-hover:text-mw-blue">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                  {service.shortDesc}
                </p>
                
                <div className="flex items-center text-mw-orange font-bold text-xs transition-transform duration-300 group-hover:translate-x-2">
                    ZJISTIT VÍCE <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / History Teaser */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-4 bg-mw-orange/20 rounded-xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
                <img 
                    src="https://picsum.photos/id/180/800/600" 
                    alt="Laptop on desk" 
                    className="relative rounded-lg shadow-2xl w-full object-cover transform transition-transform group-hover:scale-[1.01]"
                />
                
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-mw-blue/10 p-2 rounded-full text-mw-blue">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Tradice od</p>
                            <p className="text-mw-dark font-bold text-xl">Roku 1988</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-snug">
                        Více než tři dekády zkušeností s vývojem a servisem IT technologií.
                    </p>
                </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                  <span className="text-mw-orange font-bold tracking-wider uppercase text-xs">Náš příběh</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-mw-dark mt-2 mb-4">Od Commodore k <br/>Umělé Inteligenci</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600">
                <p className="text-base">
                    Společnost <strong>MICROWARE</strong> byla založena Tomášem Macourkem již v roce 1988. 
                    V roce 1991 jsme se stali prvním autorizovaným servisem pro legendární počítače Commodore a Amiga.
                </p>
                <p className="text-base">
                    Dnes stavíme na těchto pevných základech, ale náš zrak směřuje do budoucnosti. 
                    Kombinujeme tradiční hodnoty rodinné firmy – <strong>spolehlivost, čestnost a osobní přístup</strong> – s nejmodernějšími technologiemi v oblasti automatizace a AI.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                    <Shield className="w-6 h-6 text-mw-blue flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-mw-dark text-sm">Ověření partneři</h4>
                        <p className="text-[10px] text-gray-500 mt-1">Spolupracujeme s lídry trhu</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                    <Clock className="w-6 h-6 text-mw-blue flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-mw-dark text-sm">Flexibilita</h4>
                        <p className="text-[10px] text-gray-500 mt-1">Řešení na míru vašim potřebám</p>
                    </div>
                </div>
              </div>
              
              <div className="pt-2">
                <Link to="/o-nas">
                    <Button variant="secondary" className="px-6 h-10 text-sm">Více o naší historii</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-mw-blue to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div> 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Máte vizi?<br/>
                        <span className="text-blue-200">Pojďme ji realizovat.</span>
                    </h2>
                    <p className="text-blue-100 text-lg max-w-md leading-relaxed">
                        Neztrácejte čas hledáním kompromisů. Napište nám ihned a my navrhneme řešení přesně pro vaše potřeby.
                    </p>
                    
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-mw-orange" />
                            </div>
                            <span className="font-medium">Odpovídáme do 24 hodin</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-mw-orange" />
                            </div>
                            <span className="font-medium">Konzultace řešení zdarma</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-mw-orange" />
                            </div>
                            <span className="font-medium">Profesionální realizace</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg p-2 rounded-2xl border border-white/10 shadow-2xl">
                    <InquiryForm defaultSubject={InquiryType.GENERAL} />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};