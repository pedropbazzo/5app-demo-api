import { ILogo } from './logo.model'

export interface IUser {
  count: number
  logos: ILogo[]
  name: string
}
