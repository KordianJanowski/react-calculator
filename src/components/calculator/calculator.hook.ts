import { Ibutton } from "../../types/interfaces";
import { useState, useEffect } from 'react'
import { buttonTypes, specialOperationTypes } from "../../types/enums";
import { getFactorial, getReplacedCharsOperation } from "../../utils/helpers";

const useCalculator = () => {
  const [operation, setOperation] = useState<string>('')
  const [log, setLog] = useState<string>('')
  const [isDisplayingResult, setIsDisplayingResult] = useState<boolean>(false)

  useEffect(() => {
    setIsDisplayingResult(log.includes('=') ? true : false)
  }, [log]);

  useEffect(() => {
    if(operation === "NaN") setOperation("Błędne dane")
  }, [operation]);


  const handleClick = (button:Ibutton) => {
    if (
      isDisplayingResult
      && button.type !== buttonTypes.OPERATION
      && button.type !== buttonTypes.EQUAL
    ) {
      setOperation('')
      setLog('')
    }

    if(button.type !== buttonTypes.SPECIAL_OPERATION)
      mainSwitch(button)
    else
      specialOperationSwitch(button)
  }

  const mainSwitch = (button:Ibutton) => {
    switch(button.type) {
      case buttonTypes.NUMBER:
        if(operation.replaceAll('0', '') === '' && button.text === '0') return
        setOperation(operation => operation + button.text)

        break;
      case buttonTypes.OPERATION:
        if(operation === '' && (button.text === '÷' || button.text === '×')) return

        if(operation === '') {
          setLog(log => log.slice(0, -1) + button.text)
        }
        else if (isDisplayingResult) {
          setLog(`${eval(operation)} ${button.text}`)
          setOperation('')
        } else {
          const replacedCharsOperation = getReplacedCharsOperation(log + (operation || 0))
          setLog(`${eval(replacedCharsOperation)} ${button.text}`)
          setOperation('')
        }

        break;
      case buttonTypes.EQUAL:
        if(isDisplayingResult || log === '') return

        const replacedCharsOperation = getReplacedCharsOperation(`${log} ${(operation || 0)}`)

        setOperation(eval(replacedCharsOperation))
        setLog(`${log}
                ${ operation.charAt(0) !== '-'
                  ? operation || 0
                  : `(${operation})`
                }
              =`)

        break;
      case buttonTypes.BACKSPACE:
        setOperation(operation => operation.slice(0, -1))

        break;
      case buttonTypes.CLEAR_LINE:
        setOperation('')

        break;
      case buttonTypes.CLEAR:
        setOperation('')
        setLog('')

        break;
      case buttonTypes.DOT:
        if(operation.includes('.')) return

        setOperation(operation => operation + ".")

        break;
      case buttonTypes.CHAR_CHANGE:
        if(operation === '-') setOperation('')
        else setOperation(operation => (-operation || '-').toString())

        break;
    }
  }

  const specialOperationSwitch = (button:Ibutton) => {
    if(operation === '') return

    switch(button.desc) {
      case specialOperationTypes.DIVIDE:
        setOperation(eval(`1 / ${operation}`))
        setLog(`1 ÷ ${operation} =`)

        break;
      case specialOperationTypes.POWER:
        setOperation(Math.pow(+operation, 2).toString())
        setLog(`${operation}² =`)

        break;
      case specialOperationTypes.SQUARE:
        setOperation((Math.sqrt(+operation)).toString())
        setLog(`²√${operation} =`)

        break;
      case specialOperationTypes.FACTORIAL:
        setOperation(getFactorial(+operation).toString())
        setLog(`${operation}! =`)

        break;
    }
  }

  return {
    operation,
    log,
    handleClick
  }
}

export default useCalculator;