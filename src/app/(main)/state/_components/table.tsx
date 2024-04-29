
'use client';

import { state_data } from "@/data/state";
import { useMemo, useState } from "react";

const StateTable = () => {
    const sort_by = useState<'state' | 'ranking'>('state');
    const data = useMemo(() => {
        return state_data
            .sort((a, b) => {
                if (sort_by[0] === 'state') {
                    return a.state.localeCompare(b.state);
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
                        sort_by[0] === 'state' ? 'bg-opacity-100' : 'bg-opacity-50'
                    }`}
                    onClick={() => sort_by[1]('state')}
                >
                    Sort by State
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
                        <th className="px-4 py-2">State</th>
                        <th className="px-4 py-2">No. of Obese Cases</th>
                        <th className="px-4 py-2">Percentage</th>
                        <th className="px-4 py-2">National Average</th>
                        <th className="px-4 py-2">National Percentage</th>
                        <th className="px-4 py-2">State Performance</th>
                        <th className="px-4 py-2">Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.state}</td>
                            <td className="border px-4 py-2">{item.number_of_obese_cases.toLocaleString()}</td>
                            <td className="border px-4 py-2">{item.percentage_of_obese_cases.toLocaleString()}%</td>
                            <td className="border px-4 py-2">{item.national_average.toLocaleString()}</td>
                            <td className="border px-4 py-2">{item.national_average_percentage.toLocaleString()}%</td>
                            <td className="border px-4 py-2">{item.state_performance}</td>
                            <td className="border px-4 py-2">{item.ranking}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StateTable;