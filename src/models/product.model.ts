import { ICategory } from "./category.model"

export enum IDescriptionItemTypes { 'LIST', 'TEXT', 'HEADER', 'KEY_VALUE' }

export interface IDescriptionItem {
  type: IDescriptionItemTypes
  main: string
  additional: string
  optional: string
}

export interface IProduct {
  id?: number
  title: string
  price: number
  cardDescription: string
  category: ICategory | number
  imagePath: string[] | null
  descriptionItems: IDescriptionItem[] | null
}