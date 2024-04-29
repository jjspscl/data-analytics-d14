//  	Family Does Not Demonstrate Resilience (Raw)	Family Does Not Demonstrate Resilience (Percentage)	National Average (Raw)	National Average (In Percentage)	Comparison to National Average	Ranking
// HRSA Region I	35,209	15.70%	1,029,708	20.00%	Lower than National Average	9
// HRSA Region II	63,473	14%	1,029,708	20.00%	Lower than National Average	6
// HRSA Region III	94,243	23.40%	1,029,708	20.00%	Higher than National Average	5
// HRSA Region IV	249,352	25.30%	1,029,708	20.00%	Higher than National Average	1
// HRSA Region V	131,100	15.50%	1,029,708	20.00%	Lower than National Average	4
// HRSA Region VI	195,538	26.00%	1,029,708	20.00%	Higher than National Average	2
// HRSA Region VII	37,278	18.70%	1,029,708	20.00%	Lower than National Average	8
// HRSA Region VIII	26,341	13.10%	1,029,708	20.00%	Lower than National Average	10
// HRSA Region IX	149,413	17.50%	1,029,708	20.00%	Lower than National Average	3
// HRSA Region X	47,761	21.30%	1,029,708	20.00%	Higher than National Average	7

export const family_data: {
    region: string;
    number_of_obese_cases: number;
    percentage_of_obese_cases: number;
    national_average: number;
    national_average_percentage: number;
    comparison_to_national_average: string;
    ranking: number;
}[] = [
    {
        region: 'HRSA Region I',
        number_of_obese_cases: 35209,
        percentage_of_obese_cases: 15.70,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 9
    },
    {
        region: 'HRSA Region II',
        number_of_obese_cases: 63473,
        percentage_of_obese_cases: 14.00,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 6
    },
    {
        region: 'HRSA Region III',
        number_of_obese_cases: 94243,
        percentage_of_obese_cases: 23.40,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 5
    },
    {
        region: 'HRSA Region IV',
        number_of_obese_cases: 249352,
        percentage_of_obese_cases: 25.30,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 1
    },
    {
        region: 'HRSA Region V',
        number_of_obese_cases: 131100,
        percentage_of_obese_cases: 15.50,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 4
    },
    {
        region: 'HRSA Region VI',
        number_of_obese_cases: 195538,
        percentage_of_obese_cases: 26.00,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 2
    },
    {
        region: 'HRSA Region VII',
        number_of_obese_cases: 37278,
        percentage_of_obese_cases: 18.70,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 8
    },
    {
        region: 'HRSA Region VIII',
        number_of_obese_cases: 26341,
        percentage_of_obese_cases: 13.10,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 10
    },
    {
        region: 'HRSA Region IX',
        number_of_obese_cases: 149413,
        percentage_of_obese_cases: 17.50,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 3
    },
    {
        region: 'HRSA Region X',
        number_of_obese_cases: 47761,
        percentage_of_obese_cases: 21.30,
        national_average: 1029708,
        national_average_percentage: 20.00,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 7
    }
];

export const family_sum = family_data.reduce((acc, item) => acc + item.number_of_obese_cases, 0);