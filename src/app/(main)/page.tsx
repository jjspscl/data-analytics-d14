import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-white">
      <div className="bg-uerm-dark-blue flex flex-col items-center text-center py-10">
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
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: 'fill', // cover, contain, none
              }}
            />
          </div>
          </a>
        </div>
        <div className="bg-uerm-blue h-32"></div>
        <div className="bg-uerm-blue h-32"></div>
        <div className="bg-uerm-blue h-32"></div>
        <div className="bg-uerm-yellow h-32"></div>
        <div className="bg-uerm-yellow h-32"></div>
      </div>
    </div>
  );
}
