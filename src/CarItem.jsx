import React from 'react'
import { Separator } from './components/ui/separator';
const CarItem = ({car}) => {
  return (
    <div>
      
            <img src={car?.image} alt="" width={300} height={250} className='rounded-t-xl' />
            <div>
              <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
            
            </div>
            <Separator className='bg-black'/>
         
    </div>
  );
}

export default CarItem