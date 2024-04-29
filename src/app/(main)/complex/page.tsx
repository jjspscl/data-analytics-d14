
import VirusIcon from '@/assets/virus.svg';
import ComplexTable from './_components/table';
import ComplexChart from './_components/chart';

const ComplexPage = () => {
    return (
        <div 
            className='pb-5'
            style={{
            backgroundImage: `url(/images/hospital.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7 text-white">
                <VirusIcon className="size-20 mb-4" />
                <h1>Obese Patients with Complex Healthcare Needs</h1>
            </div>
            <div className='container'>
                <ComplexChart/>
                <ComplexTable/>
            </div>
        </div>
    );
}


export default ComplexPage;