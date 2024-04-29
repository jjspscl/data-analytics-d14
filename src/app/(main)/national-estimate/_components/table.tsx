import { national_estimates } from "../../../../data/national-estimate"

const NationalEstimateTable = () => {
    return (
        <div className="flex flex-col bg-white mx-auto container p-5 rounded-md shadow-md">
            <h1 className="text-2xl font-bold">National Estimates</h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Label</th>
                        <th className="px-4 py-2">Raw Value</th>
                        <th className="px-4 py-2">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {national_estimates.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.label}</td>
                            <td className="border px-4 py-2">{item.raw_value}</td>
                            <td className="border px-4 py-2">{(item.percentage * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NationalEstimateTable;