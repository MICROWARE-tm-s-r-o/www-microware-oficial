import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address_hq: string;
  address_office: string;
  vat: string;
  hours: string;
  owner: string;
  owner_phone: string;
  data_box: string;
}

export enum InquiryType {
  GENERAL = "Obecný dotaz",
  NETWORK = "Správa sítí",
  AUTOMATION = "Automatizace",
  PROGRAMMING = "Programování a AI",
  SERVICE = "Servis a 3D Tisk"
}