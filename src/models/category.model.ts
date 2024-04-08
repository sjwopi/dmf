export interface ICategory {
  id?: number | null;
  name: string;
  imagePath?: string | null;
  children?: ICategory[] | null;
  parentId?: number | null;
}