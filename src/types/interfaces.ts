import { buttonTypes, specialOperationTypes } from "./enums"

export interface Ibutton {
  text: string
  type: buttonTypes
  desc?: specialOperationTypes
}