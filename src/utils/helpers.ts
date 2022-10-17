export const getReplacedCharsOperation = (operation:string) => {
  return operation.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('–', '-')
}

export const getFactorial = (n:number):number => !(n > 1) ? 1 : getFactorial(n - 1) * n;