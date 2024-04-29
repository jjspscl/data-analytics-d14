import { BarChart } from "lucide-react";


const Header = () => {
    return (
        <header className="flex py-2 bg-uerm-blue text-white font-normal items-center">
            <BarChart className="size-8 mr-1"/> 
            <p className="text-xl">Data Analytics (D14) Dashboard</p>
        </header>
    );
}


export default Header;