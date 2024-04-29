'use client';

//@ts-ignore
import ReactUSAMap from 'react-usa-map';

import { state_data } from '@/data/state';


const customize = state_data.reduce<
    any
>((acc, item) => {
   
    acc[item.abbreviation] = {
        fill: item.state_performance === 'Significantly Lower than U.S.' ? '#3ff6b9' :
              item.state_performance === 'Lower than U.S. but Not Significant' ? '#21e1a1' :
              item.state_performance === 'Higher than U.S. but Not Significant' ? '#1fb885' :
              item.state_performance === 'Significantly Higher than U.S.' ? '#0d9669'
              : 'red',
        clickHandler: (event: any) => alert(`${item.state}`)
    }
    return acc
}, {})

const USAMap = () => {
    return (
        <div className='flex flex-col justify-center mb-10 bg-opacity-45 bg-white rounded-md mx-auto container p-5 shadow-md'>
            <div className='flex justify-center'>
                <ReactUSAMap customize={customize}/>
            </div>
            {/* LEGEND */}
            <div className="flex justify-center space-x-5 mt-5">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#3ff6b9]"></div>
                    <span>Significantly Lower than U.S.</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#21e1a1]"></div>
                    <span>Lower than U.S. but Not Significant</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#1fb885]"></div>
                    <span>Higher than U.S. but Not Significant</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#0d9669]"></div>
                    <span>Significantly Higher than U.S.</span>
                </div>

            </div>
        </div>
    )
}


export default USAMap;