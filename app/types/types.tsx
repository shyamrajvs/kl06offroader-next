// types/types.ts
import { ReactNode } from 'react';

export interface AdventureHighlight {
  title: string;
  items: string[];
}

export interface PackageDetail {
  icon: ReactNode;
  title: string;
  items: string[];
  price?: string;
}

export interface InclusionExclusion {
  icon: ReactNode;
  title: string;
  items: string[];
  type: 'included' | 'excluded';
}