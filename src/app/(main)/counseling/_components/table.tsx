import { counseling_data } from "@/data/counseling"

const CounselingTable = () => {
    return (
        <div className="flex flex-col bg-white mx-auto container p-5 rounded-md shadow-md">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Region</th>
                        <th className="px-4 py-2">Number of Obese Cases</th>
                        <th className="px-4 py-2">Percentage of Obese Cases</th>
                        <th className="px-4 py-2">National Average</th>
                        <th className="px-4 py-2">National Average Percentage</th>
                        <th className="px-4 py-2">Comparison to National Average</th>
                        <th className="px-4 py-2">Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    {counseling_data.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.region}</td>
                            <td className="border px-4 py-2">{item.number_of_obese_cases}</td>
                            <td className="border px-4 py-2">{item.percentage_of_obese_cases}%</td>
                            <td className="border px-4 py-2">{item.national_average}</td>
                            <td className="border px-4 py-2">{item.national_average_percentage}%</td>
                            <td className="border px-4 py-2">{item.comparison_to_national_average}</td>
                            <td className="border px-4 py-2">{item.ranking}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CounselingTable;