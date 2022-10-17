import { Ibutton } from "../../types/interfaces";
import { useState, useEffect } from 'react'
import { buttonTypes, specialOperationTypes } from "../../types/enums";
import { getReplacedOperation } from "../../utils/helpers";

const useCalculator = () => {
  const [operation, setOperation] = useState<string>('')
  const [log, setLog] = useState<string>('')
  const [isDisplayingResult, setIsDisplayingResult] = useState<boolean>(false)

  const handleClick = (button:Ibutton) => {
    if(isDisplayingResult && button.type !== buttonTypes.OPERATION && button.type !== buttonTypes.EQUAL) {
      setOperation('')
      setLog('')
    }

    if(button.type !== buttonTypes.SPECIAL_OPERATION) {
      switch(button.type) {
        case buttonTypes.NUMBER:
          if(operation.replaceAll('0', '') === '' && button.text === '0') return
          setOperation(operation => operation + button.text)
          break;
        case buttonTypes.OPERATION:
          if(operation === '' && log.includes(button.text) && !isDisplayingResult) return
          else if(operation === '') setLog(log => log.slice(0, -1) + button.text)
          else if (isDisplayingResult) {
            setLog(`${eval(operation)} ${button.text}`)
            setOperation('')
          } else {
            const replacedOperation = getReplacedOperation(log + (operation || 0))
            setLog(`${eval(replacedOperation)} ${button.text}`)
            setOperation('')
          }
          break;
        case buttonTypes.EQUAL:
          if(isDisplayingResult || log === '') return
          const replacedOperation = getReplacedOperation(`${log} ${(operation || 0)}`)

          console.log(replacedOperation)
          setOperation(eval(replacedOperation))
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
        case buttonTypes.CHAR_CHANGE:
          setOperation(operation => (-operation).toString())
          break;
        case buttonTypes.DOT:
          break;
        }
      } else {
        switch(button.desc) {
          case specialOperationTypes.DIVIDE:
          break;
          case specialOperationTypes.POWER:
          break;
          case specialOperationTypes.SQUARE:
          break;
          case specialOperationTypes.PERCENT:
          break;

      }
    }
  }

  useEffect(() => {
    if(log.includes('=')) setIsDisplayingResult(true)
    else setIsDisplayingResult(false)
  }, [log]);

  return {
    operation,
    log,
    handleClick
  }
}

export default useCalculator;