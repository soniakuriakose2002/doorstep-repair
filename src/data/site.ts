// Site-wide settings. Replace values here and they update everywhere.
// PROVENANCE: contact details are copied from the Danat Computers project's
// src/data/site.ts, where they are marked verified against danatcomputers.com.
// Only Ruwi's address and phone are confirmed; Sohar and Salalah are city only.

export const site = {
  name: 'Danat Computers',
  handle: 'danatcomputers', // social-post preview handle
  tagline: 'Electronics repair at your doorstep',
  city: 'Muscat',
  country: 'Oman',
  currency: 'OMR ',
  since: 2003,
  email: 'danatruwi@danatcomputers.com',
  phone: { display: '+968 7832 3116', tel: '+96878323116' },
  address: 'Computer Street, Ruwi, PO Box 502, PC 118, Sultanate of Oman',
  branches: ['Ruwi, Muscat', 'Sohar', 'Salalah'],
  whatsapp: '96878323116',
  social: {
    facebook: 'https://www.facebook.com/DanatCSOman/',
    instagram: 'https://www.instagram.com/computersupermarketruwi/',
  },
};

export const whatsappLink = (message = 'Hello Danat — I need a repair for my') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// Branches (copied from the Danat project's verified data). Only Ruwi's street
// address and phone are published; Sohar and Salalah are located by city, and
// the UI says so rather than inventing an address. Opening hours are unknown.
export const branchList = [
  { id: 'muscat', tab: 'Muscat', name: 'Danat Ruwi', city: 'Ruwi, Muscat', address: 'Computer Street, Ruwi, PO Box 502, PC 118', phone: '+968 7832 3116', tel: '+96878323116', lat: 23.593, lon: 58.556, precise: true, head: true },
  { id: 'sohar', tab: 'Sohar', name: 'Danat Sohar', city: 'Sohar, Al Batinah North', address: null, phone: null, tel: null, lat: 24.347, lon: 56.709, precise: false, head: false },
  { id: 'salalah', tab: 'Salalah', name: 'Danat Salalah', city: 'Salalah, Dhofar', address: null, phone: null, tel: null, lat: 17.019, lon: 54.089, precise: false, head: false },
];

// Brands Danat carries — from the company's own catalogue export.
export const brandsCarried = ['HP', 'Dell', 'Acer', 'ASUS', 'Apple', 'Lenovo', 'Canon', 'Epson', 'Hikvision', 'Dahua', 'Uniview', 'EZVIZ', 'TP-Link', 'Zebra', 'AOC', 'Panasonic'];

// Manager instruction: no real prices for now (shown as OMR 0). Every amount on the site
// comes from here, so switching to real pricing later is one change.
export const PRICE = 0;
export const price = (amount: number = PRICE) => `${site.currency}${amount}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
];

export const serviceModes = [
  {
    id: 'doorstep',
    title: 'Doorstep Service',
    short: 'We repair it at your door',
    body: 'A technician rides to your home or office with parts and tools. Phones and laptops are fixed in front of you; printers, CCTV and Wi-Fi are installed and serviced on-site.',
    steps: ['Book a slot', 'Technician arrives', 'Repaired on the spot'],
  },
  {
    id: 'pickup',
    title: 'Pickup & Service',
    short: 'We collect, repair and return it',
    body: 'A rider collects the phone, laptop, printer or drive, our lab repairs it, and it comes back to the same address.',
    steps: ['Rider picks up', 'Repaired in our lab', 'Delivered back'],
  },
] as const;

export type ServiceModeId = (typeof serviceModes)[number]['id'];
