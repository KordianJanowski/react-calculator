export const getReplacedOperation = (operation:string) => {
  return operation.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('–', '-')
}