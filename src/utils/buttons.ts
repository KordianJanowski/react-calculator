import { Ibutton } from "../types/interfaces"
import { buttonTypes, specialOperationTypes } from "../types/enums"

export const buttons:Ibutton[] = [
  {
    text: "%",
    type: buttonTypes.SPECIAL_OPERATION,
    desc: specialOperationTypes.PERCENT
  },
  {
    text: "CE",
    type: buttonTypes.CLEAR_LINE,
  },
  {
    text: "C",
    type: buttonTypes.CLEAR,
  },
  {
    text: "<-",
    type: buttonTypes.BACKSPACE,
  },
  {
    text: "1/x",
    type: buttonTypes.SPECIAL_OPERATION,
    desc: specialOperationTypes.DIVIDE
  },
  {
    text: "x²",
    type: buttonTypes.SPECIAL_OPERATION,
    desc: specialOperationTypes.POWER
  },
  {
    text: "²√x",
    type: buttonTypes.SPECIAL_OPERATION,
    desc: specialOperationTypes.SQUARE
  },
  {
    text: "÷",
    type: buttonTypes.OPERATION,
  },
  {
    text: "7",
    type: buttonTypes.NUMBER,
  },
  {
    text: "8",
    type: buttonTypes.NUMBER,
  },
  {
    text: "9",
    type: buttonTypes.NUMBER,
  },
  {
    text: "×",
    type: buttonTypes.OPERATION,
  },
  {
    text: "4",
    type: buttonTypes.NUMBER,
  },
  {
    text: "5",
    type: buttonTypes.NUMBER,
  },
  {
    text: "6",
    type: buttonTypes.NUMBER,
  },
  {
    text: "–",
    type: buttonTypes.OPERATION,
  },
  {
    text: "1",
    type: buttonTypes.NUMBER,
  },
  {
    text: "2",
    type: buttonTypes.NUMBER,
  },
  {
    text: "3",
    type: buttonTypes.NUMBER,
  },
  {
    text: "+",
    type: buttonTypes.OPERATION,
  },
  {
    text: "+/-",
    type: buttonTypes.CHAR_CHANGE,
  },
  {
    text: "0",
    type: buttonTypes.NUMBER,
  },
  {
    text: ".",
    type: buttonTypes.DOT,
  },
  {
    text: "=",
    type: buttonTypes.EQUAL,
  },
]