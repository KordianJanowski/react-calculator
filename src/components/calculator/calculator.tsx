import React from 'react'
import useCalculator from './calculator.hook';
import { buttons } from '../../utils/buttons';
import { buttonTypes } from '../../types/enums';

const Calculator: React.FC = () => {
  const { operation, log, handleClick } = useCalculator()

  const buttonsMap = buttons.map(button => {
    return (
      <button
        key={button.text}
        onClick={() => handleClick(button)}
        className="flex items-center justify-center w-20 h-20 mx-3 transition-all rounded-md hover:bg-neutral-700"
      >
        <span className={`
          ${button.type === buttonTypes.NUMBER ? 'text-neutral-300 font-semibold text-lg' : 'text-[#D03997]'}
          ${button.type === buttonTypes.OPERATION || button.type === buttonTypes.DOT ? 'text-2xl' : ''}
          ${button.type === buttonTypes.EQUAL ? 'bg-gradient-to-br from-[#D03997] to-[#CD6E36] rounded-full h-4/5 w-4/5 text-white flex items-center justify-center text-2xl' : '' }
        `}
        >
          {button.text}
        </span>
      </button>
    )
  })

  return (
    <div className='bg-[#373737] xl:scale-[77.5%] 2xl:scale-100 h-[745px] max-w-xl rounded-lg flex flex-col justify-end items-end scale-100'>
      <div className='mx-4 my-2 text-[#D03997] font-semibold'>
        Złoty kalkulator
      </div>
      <div className='flex flex-col items-end justify-end h-full max-w-full px-4 pb-5 overflow-hidden'>
        <span className='text-xl font-semibold text-neutral-400'>{log || ''}</span>
        <div className='max-w-full'>
          <span className='text-6xl font-semibold text-white'>{operation ? operation : '0'}</span>
        </div>
      </div>
      <div className='grid w-full grid-cols-4 mb-3 place-items-center'>
        {buttonsMap}
      </div>
    </div>
  )
}

export default Calculator;