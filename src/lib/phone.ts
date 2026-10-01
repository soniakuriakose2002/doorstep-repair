// Phone country codes and number-length rules, shared by every phone field on the site
// (booking popup, "book for someone else", track your repair). Lengths are national
// mobile numbers without the country code or a leading 0.
export type Dial = { cc: string; name: string; code: string; len: number; eg: string };

export const DIAL: Dial[] = [
  { cc: 'om', name: 'Oman', code: '+968', len: 8, eg: '9123 4567' },
  { cc: 'in', name: 'India', code: '+91', len: 10, eg: '98765 43210' },
  { cc: 'ae', name: 'UAE', code: '+971', len: 9, eg: '50 123 4567' },
  { cc: 'sa', name: 'Saudi Arabia', code: '+966', len: 9, eg: '51 234 5678' },
  { cc: 'qa', name: 'Qatar', code: '+974', len: 8, eg: '3312 3456' },
  { cc: 'kw', name: 'Kuwait', code: '+965', len: 8, eg: '5000 1234' },
  { cc: 'bh', name: 'Bahrain', code: '+973', len: 8, eg: '3600 1234' },
  { cc: 'pk', name: 'Pakistan', code: '+92', len: 10, eg: '301 2345678' },
  { cc: 'bd', name: 'Bangladesh', code: '+880', len: 10, eg: '1812 345678' },
  { cc: 'lk', name: 'Sri Lanka', code: '+94', len: 9, eg: '71 234 5678' },
  { cc: 'np', name: 'Nepal', code: '+977', len: 10, eg: '984 1234567' },
  { cc: 'ph', name: 'Philippines', code: '+63', len: 10, eg: '917 123 4567' },
  { cc: 'eg', name: 'Egypt', code: '+20', len: 10, eg: '100 123 4567' },
  { cc: 'gb', name: 'United Kingdom', code: '+44', len: 10, eg: '7400 123456' },
  { cc: 'us', name: 'USA / Canada', code: '+1', len: 10, eg: '201 555 0123' },
];

export const dialFor = (cc: string | null | undefined): Dial => DIAL.find((d) => d.cc === (cc || '').toLowerCase()) ?? DIAL[0];

/** Validate a typed number for a country. Accepts spaces/dashes, an optional country code
 *  or a leading 0. Returns the full international number when valid. */
export function checkPhone(cc: string, raw: string): { ok: boolean; full: string; msg: string } {
  const d = dialFor(cc);
  let n = raw.replace(/[\s\-().]/g, '');
  const code = d.code.replace('+', '');
  if (n.startsWith('+')) {
    if (!n.startsWith('+' + code)) return { ok: false, full: '', msg: `This number doesn't start with ${d.code} (${d.name}). Change the country or remove the code.` };
    n = n.slice(code.length + 1);
  } else if (n.startsWith('00' + code)) n = n.slice(code.length + 2);
  if (n.startsWith('0')) n = n.slice(1);
  if (!/^\d+$/.test(n)) return { ok: false, full: '', msg: 'Use digits only.' };
  if (n.length < d.len) return { ok: false, full: '', msg: `Too short — ${d.name} mobile numbers have ${d.len} digits (you entered ${n.length}).` };
  if (n.length > d.len) return { ok: false, full: '', msg: `Too long — ${d.name} mobile numbers have ${d.len} digits (you entered ${n.length}).` };
  return { ok: true, full: `${d.code} ${n}`, msg: '' };
}
