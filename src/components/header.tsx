import { BarChart } from "lucide-react";
import Link from "next/link";


const Header = () => {
    return (
        <header className="py-2 bg-uerm-yellow text-black font-normal">
            <Link href="/" className="flex items-center">
                <BarChart className="size-8 mr-1"/> 
                <p className="text-xl">Data Analytics (D14) Dashboard</p>
            </Link> 
        </header>
    );
}


export default Header;