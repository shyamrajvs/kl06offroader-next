// components/OffroadRide/types.ts
export interface AdventureHighlight {
  title: string;
  items: string[];
}

export interface PackageDetail {
  icon: React.ReactNode;
  title: string;
  items: string[];
  price?: string;
}

export interface InclusionExclusion {
  icon: React.ReactNode;
  title: string;
  items: string[];
  type: 'included' | 'excluded';
}
