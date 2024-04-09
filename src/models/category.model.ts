export interface ICategory {
  id?: number
  name: string
  imagePath: string | null
  children: ICategory[]
  parentId: number | null
}