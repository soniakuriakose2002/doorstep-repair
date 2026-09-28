// SAMPLE coverage areas — not confirmed. Doorstep is the tighter zone
// (a technician on a bike); pickup covers the wider ring.
import type { ServiceModeId } from './site';

export interface Zone {
  name: string;
  areas: string[];
}

export const coverage: Record<ServiceModeId, { eta: string; zones: Zone[] }> = {
  doorstep: {
    eta: 'Technician at your door in about 60 minutes',
    zones: [
      { name: 'Central', areas: ['MG Road', 'Indiranagar', 'Domlur', 'Richmond Town', 'Shivajinagar', 'Frazer Town'] },
      { name: 'South', areas: ['Koramangala', 'HSR Layout', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Banashankari'] },
      { name: 'East', areas: ['Whitefield', 'Marathahalli', 'Bellandur', 'Brookefield', 'KR Puram', 'Mahadevapura'] },
      { name: 'North', areas: ['Hebbal', 'RT Nagar', 'Sahakar Nagar', 'Malleshwaram', 'Yeshwanthpur'] },
    ],
  },
  pickup: {
    eta: 'Picked up same day, back in 24–48 hours',
    zones: [
      { name: 'Central', areas: ['MG Road', 'Indiranagar', 'Domlur', 'Richmond Town', 'Shivajinagar', 'Frazer Town', 'Ulsoor'] },
      { name: 'South', areas: ['Koramangala', 'HSR Layout', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Banashankari', 'Electronic City', 'Bannerghatta Road', 'Kanakapura Road'] },
      { name: 'East', areas: ['Whitefield', 'Marathahalli', 'Bellandur', 'Brookefield', 'KR Puram', 'Mahadevapura', 'Sarjapur Road', 'Varthur', 'Hoskote'] },
      { name: 'North', areas: ['Hebbal', 'RT Nagar', 'Sahakar Nagar', 'Malleshwaram', 'Yeshwanthpur', 'Yelahanka', 'Thanisandra', 'Devanahalli'] },
      { name: 'West', areas: ['Rajajinagar', 'Vijayanagar', 'Basaveshwaranagar', 'Kengeri', 'Nagarbhavi', 'RR Nagar'] },
    ],
  },
};
