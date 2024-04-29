'use client';
import ReactUSAMap from 'react-usa-map';

import { state_data } from '@/data/state';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// based on item.state_performance
// 1. Significantly Higher than U.S. - green
// 2. Lower than U.S. but Not Significant - light green
// 3. Higher than U.S. but Not Significant - yellow
// 4. Significantly higher than U.S. - red
const StateDialog = ({ state }: IState) => {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
    )
}

const customize = state_data.reduce((acc, item) => {
   
    acc[item.abbreviation] = {
        fill: item.state_performance === 'Significantly Lower than U.S.' ? 'green' : 
              item.state_performance === 'Lower than U.S. but Not Significant' ? 'lightgreen' :
              item.state_performance === 'Higher than U.S. but Not Significant' ? 'yellow' :
              item.state_performance === 'Significantly Higher than U.S.' ? 'red' : 'blue',
        clickHandler: (event) => alert(`${item.state}`)
    }
    return acc
}, {})

const USAMap = () => {
    return (
        <div className='flex justify-center mb-10 bg-opacity-45 bg-white rounded-md mx-auto container p-5 shadow-md'>
            <ReactUSAMap customize={customize}/>
        </div>
    )
}


export default USAMap;