import StateIcon from '@/assets/usa-map.svg';
import Image from 'next/image';
import StateTable from './_components/table';
import USAMap from './_components/usa-map';
const StatePage = () => {
    return (
        <div 
            className='pb-5'
            style={{
            backgroundImage: `url(/images/hospital.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7 text-white">
                <StateIcon className="size-20 fill-white mb-4" />
                <h1>Obese Cases Per State</h1>
            </div>
            <div className='container'>
                <USAMap/>
                <StateTable/>
            </div>
        </div>
    )
};

export default StatePage;