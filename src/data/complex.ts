
// Region	Number of Obese Patients with Complex Healthcare Needs (Raw)	Number of Obese Patients with Complex Healthcare Needs(In percentage)	National Average (Raw)	National Average (In Percentage)	Comparison to National Average (22.4)	Ranking
// HRSA Region I	57,219	19.60%	1,352,208	22.40%	Lower than National Average	8
// HRSA Region II	102,497	21.10%	1,352,208	22.40%	Higher than National Average	6
// HRSA Region III	115,146	19.8 %	1,352,208	22.40%	Lower than National Average	5
// HRSA Region IV	325,571	27.5 %	1,352,208	22.40%	Higher than National Average	1
// HRSA Region V	218,372	21 %	1,352,208	22.40%	Higher than National Average	2
// HRSA Region VI	190,850	23.8 %	1,352,208	22.40%	Higher than National Average	4
// HRSA Region VII	79,695	18.5 %	1,352,208	22.40%	Lower than National Average	7
// HRSA Region VIII	45,193	17.4 %	1,352,208	22.40%	Lower than National Average	10
// HRSA Region IX	198,903	23.9 %	1,352,208	22.40%	Higher than National Average	3
// HRSA Region X	51,874	16.8 %	1,352,208	22.40%	Lower than National Average	9

export const complex_data: {
    region: string,
    number_of_obese_cases: number,
    percentage_of_obese_cases: number,
    national_average: number,
    national_average_percentage: number,
    comparison_to_national_average: string,
    ranking: number
}[] = [
    {
        region: 'HRSA Region I',
        number_of_obese_cases: 57219,
        percentage_of_obese_cases: 19.60,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 8
    },
    {
        region: 'HRSA Region II',
        number_of_obese_cases: 102497,
        percentage_of_obese_cases: 21.10,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 6
    },
    {
        region: 'HRSA Region III',
        number_of_obese_cases: 115146,
        percentage_of_obese_cases: 19.8,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 5
    },
    {
        region: 'HRSA Region IV',
        number_of_obese_cases: 325571,
        percentage_of_obese_cases: 27.5,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 1
    },
    {
        region: 'HRSA Region V',
        number_of_obese_cases: 218372,
        percentage_of_obese_cases: 21,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 2
    },
    {
        region: 'HRSA Region VI',
        number_of_obese_cases: 190850,
        percentage_of_obese_cases: 23.8,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 4
    },
    {
        region: 'HRSA Region VII',
        number_of_obese_cases: 79695,
        percentage_of_obese_cases: 18.5,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 7
    },
    {
        region: 'HRSA Region VIII',
        number_of_obese_cases: 45193,
        percentage_of_obese_cases: 17.4,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 10
    },
    {
        region: 'HRSA Region IX',
        number_of_obese_cases: 198903,
        percentage_of_obese_cases: 23.9,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 3
    },
    {
        region: 'HRSA Region X',
        number_of_obese_cases: 51874,
        percentage_of_obese_cases: 16.8,
        national_average: 1352208,
        national_average_percentage: 22.40,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 9
    }
]

export const complex_sum = complex_data.reduce((acc, item) => acc + item.number_of_obese_cases, 0)