import Count from '@/components/count';
import ObeseIcon from '@/assets/obese.svg';
import USAMap from '@/assets/usa-map.svg';
import FamilyIcon from '@/assets/family.svg';
import VirusIcon from '@/assets/virus.svg';
import Image from "next/image";
import { sum_of_obese_cases } from '@/data/state';
import { national_sum } from '@/data/national-estimate';
import { Info } from 'lucide-react';
import { counseling_sum } from '@/data/counseling';
import { complex_sum } from '@/data/complex';
import { family_sum } from '@/data/family';


export default function Home() {
  return (
    <div className="flex flex-col text-white relative">
      <Image
        src="/images/hospital.png"
        fill
        alt="background"
        className='-z-50 opacity-20 top-0 left-0 w-full h-full object-cover object-center'
      />
      <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10 mb-7">
        <Image  
          src="/images/uerm-logo.png"
          alt="logo"
          className="mb-4"
          width={75}
          height={75}
        />
        <div>
        <h1 className="mb-2">Data Resource Center <br/>for Children and Adolescent Health</h1>
        <h2>(Overweight Analysis Report)</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 max-w-screen-lg mx-auto container">
        <div className="bg-uerm-yellow h-full col-span-2 row-span-2">
          <a href="https://tinyurl.com/drccah" target="_blank">
          <div style={{ position: 'relative', height: '400px' }}>
            <Image
              alt="Info"
              src="/images/info.png"
              quality={50}
              fill
            />
          </div>
          </a>
        </div>
        <a className="bg-uerm-blue flex flex-col p-4" href='/national-estimate'>
            <h3>National Estimates</h3>
            <div className='flex-grow flex items-center justify-center'>
              <ObeseIcon className="size-16 fill-white" />
              <span className='text-5xl'>
                <Count className='mr-2' start={0} end={
                  national_sum
                } duration={1} />
              </span>
            </div>
        </a>
        <a className="bg-red-500 flex flex-col p-4" href='/state'>
          <h3>No. of Obese Cases Per State</h3>
          <div className='flex-grow flex items-center justify-center'>
            <USAMap className="size-28 fill-white" />
            <span className='text-5xl'>
              <Count className='mr-2' start={0} end={
                sum_of_obese_cases
              } duration={1} />
            </span>
          </div>
        </a>
        <a className="bg-orange-500 flex flex-col p-4" href='/counseling'>
          <h3>No. of Obese by which Counseling is needed</h3>
          <div className='flex-grow flex items-center justify-center'>
            <Info className="size-16 mr-2" />
            <span className='text-5xl'>
              <Count className='mr-2' start={0} end={
                counseling_sum
              } duration={1} />
            </span>
          </div>
        </a>
        <a className="bg-green-500 flex flex-col p-4" href='/complex'>
          <h3>No. of Obese Patients with Complex</h3>
          <div className='flex-grow flex items-center justify-center'>
            <VirusIcon className="size-28 fill-white" />
            <span className='text-5xl'>
              <Count className='mr-2' start={0} end={
                complex_sum
              } duration={1} />
            </span>
          </div>
        </a>
        <a className="bg-purple-500 flex flex-col p-4" href='/family'>
          <h3>Family Resilience</h3>
          <div className='flex-grow flex items-center justify-center'>
            <FamilyIcon className="size-16 fill-white" />
            <span className='text-5xl'>
              <Count className='mr-2' start={0} end={
                family_sum
              } duration={1} />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
