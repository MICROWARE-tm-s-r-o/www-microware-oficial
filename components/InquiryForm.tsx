import React, { useState } from 'react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import { InquiryType } from '../types';
import { COMPANY_INFO } from '../constants';

interface InquiryFormProps {
  defaultSubject?: InquiryType;
  compact?: boolean;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ defaultSubject = InquiryType.GENERAL, compact = false }) => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Získání dat z formuláře
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Sestavení emailu
    const recipient = COMPANY_INFO.email;
    const emailSubject = `Poptávka z webu: ${subject}`;
    const emailBody = `Dobrý den,\n\nmám zájem o vaše služby.\n\nKontaktní e-mail: ${email}\nTéma: ${subject}\n\nZpráva:\n${message}`;

    // Vytvoření mailto odkazu (otevře emailového klienta)
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Otevření klienta
    window.location.href = mailtoLink;

    // Zobrazení potvrzení na webu
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg text-center animate-fade-in backdrop-blur-sm">
        <h3 className="text-green-400 font-bold text-xl mb-2">Připraveno k odeslání!</h3>
        <p className="text-green-300">Otevřeli jsme vašeho e-mailového klienta s předvyplněnou zprávou. Prosím potvrďte odeslání v něm.</p>
        <button 
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm text-green-400 hover:text-green-200 underline"
        >
            Zpět na formulář
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-slate-800 rounded-lg shadow-xl border border-slate-700 ${compact ? 'p-6' : 'p-8'}`}>
      <h3 className="text-xl font-bold text-white mb-4">
        {compact ? "Rychlá poptávka" : "Nezávazná poptávka"}
      </h3>
      <p className="text-gray-400 mb-6 text-sm">
        Napište nám, s čím potřebujete pomoci. Odpovíme obratem.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Váš Email</label>
          <input 
            name="email"
            required 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border border-slate-600 rounded focus:ring-2 focus:ring-mw-orange focus:border-transparent outline-none transition-all bg-slate-900 text-white placeholder-gray-500"
            placeholder="jan.novak@firma.cz"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Téma</label>
          <select 
            name="subject"
            id="subject" 
            className="w-full px-4 py-2 border border-slate-600 rounded focus:ring-2 focus:ring-mw-orange focus:border-transparent outline-none bg-slate-900 text-white"
            defaultValue={defaultSubject}
          >
            {Object.values(InquiryType).map((type) => (
              <option key={type} value={type} className="bg-slate-800">{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Zpráva</label>
          <textarea 
            name="message"
            required 
            id="message" 
            rows={4} 
            className="w-full px-4 py-2 border border-slate-600 rounded focus:ring-2 focus:ring-mw-orange focus:border-transparent outline-none transition-all bg-slate-900 text-white placeholder-gray-500"
            placeholder="Popište svůj požadavek..."
          ></textarea>
        </div>

        <Button type="submit" fullWidth variant="primary">
          Odeslat poptávku <Send className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </form>
  );
};