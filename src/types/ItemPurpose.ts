export interface Way {
  id: string;
  title: string;
  info: string;
}

export interface Continuity {
  id: string;
  title: string;
  detail: string;
  category: string;
}

export interface ItemPurpose {
  id: string;
  title: string;
  detail: string;
  category: string;
  continuity: Continuity[];
  ways: Way[];
}

export type ItemPurposes = ItemPurpose[];
