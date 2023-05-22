
export interface ImageModel {
  id: string;
  name: string;
  detail: string;
  categoryIds: string;
  belongId?: string;
}

export type ImageModelList = ImageModel[];
