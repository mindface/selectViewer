export interface ItemModel {
  modelId: string;
  title: string;
  belongId: string;
  structInfo: string;
  structCategory: string;
  result: number;
  status: string;
  createAt: string;
  updateAt: string;
}

export interface ItemTask {
  id: string;
  title: string;
  detail: string;
  category: string;
  selectedId?: string;
  status: string;
}

export type ItemsTask = ItemTask[];
