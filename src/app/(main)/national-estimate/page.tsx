import ObeseIcon from '@/assets/obese.svg';
import Image from 'next/image';
import NationalEstimateTable from './_components/table';
import NationalEstimateBarGraph from './_components/bar-graph';
const NationalEstimatePage = () => {
    return (
        <div>
            <Image
                src="/images/hospital.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="background"
                className='fixed -z-50 opacity-20 h-full'
            />
            <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7 text-white">
                <ObeseIcon className="size-16 fill-white mb-4" />
                <h1>National Estimate</h1>
            </div>
            <div>
                <NationalEstimateTable/>
                {/* <NationalEstimateBarGraph/> */}
            </div>
        </div>
    )
};

export default NationalEstimatePage;