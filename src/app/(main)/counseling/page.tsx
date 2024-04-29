import StateIcon from '@/assets/usa-map.svg';
import { Info } from 'lucide-react';
import CounselingTable from './_components/table';
import CounselingChart from './_components/chart';

const CounselingPage = () => {
    return (
        <div 
            className='pb-5'
            style={{
            backgroundImage: `url(/images/hospital.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7 text-white">
                <Info className="size-20 mb-4" />
                <h1>Obesity by which counseling is needed</h1>
            </div>
            <div className='container'>
                <CounselingChart/>
                <CounselingTable/>
            </div>
        </div>
    )
};

export default CounselingPage;