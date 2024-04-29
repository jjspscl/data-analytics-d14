'use client';
import { family_data } from "@/data/family";
import { useMemo, useState } from "react";


const FamilyTable = () => {
    const sort_by = useState<'region' | 'ranking'>('region');
    const data = useMemo(() => {
        return family_data
            .sort((a, b) => {
                if (sort_by[0] === 'region') {
                    return a.region.localeCompare(b.region);
                } else {
                    return a.ranking - b.ranking;
                }
            });
    }, [sort_by]);   
    return (
        <div className="flex flex-col bg-white mx-auto container p-5 rounded-md shadow-md">
            <div className="flex justify-end mb-5 space-x-3">
                <button 
                    className={`bg-uerm-dark-blue text-white px-3 py-1 rounded-md ${
                        sort_by[0] === 'region' ? 'bg-opacity-100' : 'bg-opacity-50'
                    }`}
                    onClick={() => sort_by[1]('region')}
                >
                    Sort by Region
                </button>
                <button 
                    className={`bg-uerm-dark-blue text-white px-3 py-1 rounded-md ${
                        sort_by[0] === 'ranking' ? 'bg-opacity-100' : 'bg-opacity-50'
                    }`}
                    onClick={() => sort_by[1]('ranking')}
                >
                    Sort by Ranking
                </button>
            </div>
            <table className="table-auto">
                <thead>
                    <tr className="bg-blue-950 text-white">
                        <th className="px-4 py-2">Region</th>
                        <th className="px-4 py-2">No. of Obese Cases</th>
                        <th className="px-4 py-2">Percentage</th>
                        <th className="px-4 py-2">National Average</th>
                        <th className="px-4 py-2">National Percentage</th>
                        <th className="px-4 py-2">Comparison to National Average</th>
                        <th className="px-4 py-2">Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.region}</td>
                            <td className="border px-4 py-2">{item.number_of_obese_cases.toLocaleString()}</td>
                            <td className="border px-4 py-2">{item.percentage_of_obese_cases.toLocaleString()}%</td>
                            <td className="border px-4 py-2">{item.national_average.toLocaleString()}</td>
                            <td className="border px-4 py-2">{item.national_average_percentage.toLocaleString()}%</td>
                            <td className="border px-4 py-2">{item.comparison_to_national_average}</td>
                            <td className="border px-4 py-2">{item.ranking}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FamilyTable;