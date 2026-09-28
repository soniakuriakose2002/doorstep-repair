// Site-wide settings.
// Brand name set by the user (2026-09-28). PLACEHOLDER: city and contact details are not confirmed yet.
// Replace them here and they update everywhere.

export const site = {
  name: 'Danat Computers',
  handle: 'danatcomputers', // social-post preview handle
  tagline: 'Electronics repair at your doorstep',
  city: 'Bengaluru',
  currency: '₹',
};

// Manager instruction: no real prices for now. Every amount on the site
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
