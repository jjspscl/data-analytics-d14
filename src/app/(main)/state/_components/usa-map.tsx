'use client';

//@ts-ignore
import ReactUSAMap from 'react-usa-map';

import { state_data } from '@/data/state';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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

const customize = state_data.reduce<
    any
>((acc, item) => {
   
    acc[item.abbreviation] = {
        fill: item.state_performance === 'Significantly Lower than U.S.' ? '#10B981' : 
              item.state_performance === 'Lower than U.S. but Not Significant' ? '#6EE7B7' :
              item.state_performance === 'Higher than U.S. but Not Significant' ? '#34D399' :
              item.state_performance === 'Significantly Higher than U.S.' ? '#10B981' 
              : 'red',
        clickHandler: (event: any) => alert(`${item.state}`)
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