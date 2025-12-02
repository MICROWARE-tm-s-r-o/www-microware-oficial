import React from 'react';
import { Network, Home, Code, Wrench, Printer, Cpu, ShieldCheck } from 'lucide-react';
import { ContactInfo } from './types';

export const COMPANY_INFO: ContactInfo = {
  phone: "+420 228 222 845",
  email: "obchod@microware.cz",
  address_hq: "Ciolkovského 851/3, 161 00, Praha 6",
  address_office: "Maršála Rybalka 223, 273 08, Pchery - Humny",
  vat: "CZ27647684",
  hours: "Po-Pá 9:00 - 17:00 (víkendy po dohodě)",
  owner: "Tomáš Macourek",
  owner_phone: "+420 602 305 555",
  data_box: "h3fmm9b"
};

export const ESHOP_URL = "https://eshop.microware.cz";
export const WHATSAPP_URL = "https://wa.me/420602305555";

// Reference to the uploaded logo file
export const LOGO_IMAGE_URL = "/logo.png";

export const SERVICES_DATA = [
  {
    id: "networks",
    title: "Správa sítí",
    shortDesc: "Komplexní správa firemních sítí a serverů. Bezpečnost a stabilita.",
    fullDesc: "Zajišťujeme kompletní návrh, realizaci a správu počítačových sítí. Od kabeláže až po konfiguraci serverů a firewallů. Klademe důraz na kybernetickou bezpečnost.",
    icon: <Network className="w-8 h-8" />,
    path: "/sluzby#site",
    image: "https://picsum.photos/id/60/800/600" // Tech/Server room style
  },
  {
    id: "automation",
    title: "Automatizace budov",
    shortDesc: "Chytré domy a firemní automatizace. Komfort a úspora energií.",
    fullDesc: "Navrhujeme a realizujeme automatizaci pro byty, domy i firmy. Ovládání osvětlení, vytápění a zabezpečení v jednom integrovaném systému.",
    icon: <Home className="w-8 h-8" />,
    path: "/sluzby#automatizace",
    image: "https://picsum.photos/id/201/800/600" // Laptop/Modern tech
  },
  {
    id: "programming",
    title: "Programování na klíč & AI",
    shortDesc: "Moderní vývoj software s využitím AI a Open Source modelů.",
    fullDesc: "Vývoj aplikací na míru s integrací nejnovějších technologií. Využíváme velké jazykové modely (LLM) a vlastní Open Source AI řešení pro efektivitu vašeho byznysu.",
    icon: <Code className="w-8 h-8" />,
    path: "/sluzby#programovani",
    image: "https://picsum.photos/id/1/800/600" // Coding/Laptop
  },
  {
    id: "service",
    title: "Servis PC a 3D Tisk",
    shortDesc: "Opravy počítačů, servis 3D tiskáren a zakázkový 3D tisk.",
    fullDesc: "Profesionální servis hardware. Specializujeme se také na servis 3D tiskáren a realizaci 3D tisku na zakázku.",
    icon: <Printer className="w-8 h-8" />,
    path: "/sluzby#servis",
    image: "https://picsum.photos/id/250/800/600" // Camera/Tech detail
  }
];