
import { state_data } from "@/data/state";

const StateTable = () => {
    return (
        <div className="flex flex-col bg-white mx-auto container p-5 rounded-md shadow-md">
            <h1 className="text-2xl font-bold">National Estimates</h1>
            <table className="table-auto">
                <thead>
                    <tr>
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
                    {state_data
                        // sort by name
                        .sort((a, b) => a.state.localeCompare(b.state))
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