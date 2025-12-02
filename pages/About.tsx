import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white pt-20">
       <div className="bg-mw-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">O společnosti</h1>
            <p className="text-gray-300">Rodinná tradice v IT od roku 1988</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="lead text-xl text-gray-800 font-medium mb-8">
                MICROWARE (tm), s.r.o. je společnost s více než 36letou historií v oblasti informačních technologií v České republice.
            </p>
            
            <h3 className="text-2xl font-bold text-mw-blue mt-8 mb-4">Historie a Milníky</h3>
            <p>
                Zakladatel společnosti, <strong>Tomáš Macourek</strong>, položil základy firmy již v roce 1988. 
                Díky vášni pro technologie se firma brzy stala předním hráčem v IT sektoru. 
                Významným milníkem byl rok <strong>1991</strong>, kdy se MicroWARE stala prvním autorizovaným servisem pro legendární počítače <strong>Commodore a Amiga</strong>.
            </p>

            <h3 className="text-2xl font-bold text-mw-blue mt-8 mb-4">Současnost a Hodnoty</h3>
            <p>
                Dnes se zaměřujeme především na moderní a profesionální IT služby v Praze a okolí. 
                Jako rodinná firma si zakládáme na osobním přístupu. Nejsme anonymní korporát – 
                našim cílem je dlouhodobá spokojenost zákazníka, ať už jde o velkou firmu nebo jednotlivce.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
                <h4 className="font-bold text-mw-dark mb-4">Proč si vybrat nás?</h4>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-mw-orange mt-1" />
                        <span><strong>Tradice a stabilita:</strong> Na trhu jsme déle než většina konkurence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-mw-orange mt-1" />
                        <span><strong>Open Source:</strong> Specializujeme se na distribuci a nasazení otevřeného software, který šetří vaše náklady.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-mw-orange mt-1" />
                        <span><strong>Cenová dostupnost:</strong> Nabízíme vysoce kvalitní služby za férové ceny.</span>
                    </li>
                </ul>
            </div>

            <p>
                Ve spolupráci s desítkami ověřených smluvních partnerů a největšími distributory v ČR 
                zajišťujeme komplexní servis. Neustále sledujeme trendy, abychom vám mohli nabídnout 
                ta nejmodernější řešení v oblasti automatizace a umělé inteligence.
            </p>
        </div>
      </div>
    </div>
  );
};