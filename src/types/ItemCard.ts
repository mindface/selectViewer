export interface ItemCard {
  id: string;
  title: string;
  detail: string;
  category: string;
  selectedId?: string;
}

export type ItemCards = ItemCard[];
