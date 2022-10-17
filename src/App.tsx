import React from 'react';
import { Calculator } from './components';

const App: React.FC = () => {
  return (
    <div className='bg-gradient-to-br from-[#D03997] to-[#CD6E36] h-screen w-screen flex items-center justify-center'>
      <Calculator />
    </div>
  )
}

export default App;