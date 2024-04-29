
import FamilyIcon from '@/assets/family.svg';
import FamilyTable from './_components/table';
import FamilyChart from './_components/chart';

const FamilyPage = () => {
    return (
        <div 
            className='pb-5'
            style={{
            backgroundImage: `url(/images/hospital.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7 text-white">
                <FamilyIcon className="size-20 mb-4 fill-white" />
                <h1>Family Resilience</h1>
            </div>
            <div className='container'>
                <FamilyChart/>
                <FamilyTable/>
            </div>
        </div>
    );
}

export default FamilyPage;