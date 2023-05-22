
export interface User {
  id: string;
  name: string;
  detail: string;
  categoryIds: string;
  belongId?: string;
}

export type Users = User[];
