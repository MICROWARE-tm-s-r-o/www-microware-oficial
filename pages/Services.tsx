import React from 'react';
import { SERVICES_DATA, ESHOP_URL } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { InquiryForm } from '../components/InquiryForm';
import { Button } from '../components/Button';
import { ShoppingCart } from 'lucide-react';
import { InquiryType } from '../types';

export const Services: React.FC = () => {
  // Map service ID to InquiryType enum for the form
  const getInquiryType = (id: string): InquiryType => {
    switch(id) {
      case 'networks': return InquiryType.NETWORK;
      case 'automation': return InquiryType.AUTOMATION;
      case 'programming': return InquiryType.PROGRAMMING;
      case 'service': return InquiryType.SERVICE;
      default: return InquiryType.GENERAL;
    }
  };

  return (
    <div className="pt-10 pb-20 bg-gray-50">
      
      {/* Header */}
      <div className="bg-mw-dark text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Naše Služby</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
                Komplexní IT řešení pro firmy i domácnosti. Od kabelu po umělou inteligenci.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {SERVICES_DATA.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id} 
            className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Visual Content */}
            <div className="w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mw-dark/80 to-transparent flex items-end p-6">
                        <div className="text-white flex items-center gap-3">
                            <div className="p-2 bg-mw-orange rounded-lg">
                                {service.icon}
                            </div>
                            <span className="font-bold text-lg">Profesionální řešení</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text & Form */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-mw-dark mb-4 flex items-center gap-3">
                    {service.title}
                </h2>
                <div className="h-1 w-20 bg-mw-orange rounded mb-6"></div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.fullDesc}
                </p>

                {/* Specific additions based on service type */}
                {service.id === 'programming' && (
                    <div className="bg-blue-50 border-l-4 border-mw-blue p-4 mb-6 text-sm text-gray-700">
                        <strong>AI & Inovace:</strong> Specializujeme se na integraci velkých jazykových modelů (LLM) do firemních procesů. Ušetřete čas automatizací rutinní administrativy nebo analýzy dat.
                    </div>
                )}
                
                {service.id === 'service' && (
                    <div className="mb-6">
                        <a href={ESHOP_URL} target="_blank" rel="noopener noreferrer">
                             <Button variant="outline" className="w-full sm:w-auto">
                                <ShoppingCart className="w-4 h-4 mr-2" /> Nakoupit náhradní díly na E-shopu
                             </Button>
                        </a>
                    </div>
                )}

                {/* Embedded Contextual Form */}
                <div className="mt-8 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
                   <InquiryForm defaultSubject={getInquiryType(service.id)} compact />
                </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};