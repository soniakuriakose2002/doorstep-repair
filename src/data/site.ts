// Site-wide settings. Replace values here and they update everywhere.
// BRAND: renamed to Danat Fix on the owner's request (2026-09-30). The contact
// details below are still Danat's — replace them with Danat Fix's real ones.
// PROVENANCE: contact details are copied from the Danat Computers project's
// src/data/site.ts, where they are marked verified against danatcomputers.com.
// Only Ruwi's address and phone are confirmed; Sohar and Salalah are city only.

export const site = {
  name: 'Danat Fix', // default brand; the header switcher swaps to '369 ai Fix' (BrandSwitch.astro)
  handle: 'danatfix', // social-post preview handle
  tagline: 'Electronics repair at your doorstep',
  city: 'Muscat',
  country: 'Oman',
  currency: 'OMR ',
  since: 2003,
  email: 'danatruwi@danatcomputers.com',
  phone: { display: '+968 7832 3116', tel: '+96878323116' },
  address: 'Computer Street, Ruwi, PO Box 502, PC 118, Sultanate of Oman',
  branches: ['Ruwi, Muscat', 'Sohar', 'Salalah'],
};

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
