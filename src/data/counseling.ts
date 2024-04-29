export const counseling_data: {
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
        number_of_obese_cases: 40492,
        percentage_of_obese_cases: 18.90,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 7
    },
    {
        region: 'HRSA Region II',
        number_of_obese_cases: 75172,
        percentage_of_obese_cases: 22.80,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 6
    },
    {
        region: 'HRSA Region III',
        number_of_obese_cases: 88262,
        percentage_of_obese_cases: 20.60,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 5
    },
    {
        region: 'HRSA Region IV',
        number_of_obese_cases: 226219,
        percentage_of_obese_cases: 26.80,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 1
    },
    {
        region: 'HRSA Region V',
        number_of_obese_cases: 146522,
        percentage_of_obese_cases: 19.90,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 3
    },
    {
        region: 'HRSA Region VI',
        number_of_obese_cases: 136978,
        percentage_of_obese_cases: 25.80,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 4
    },
    {
        region: 'HR SA Region VII',
        number_of_obese_cases: 34741,
        percentage_of_obese_cases: 19.50,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 9
    },
    {
        region: 'HRSA Region VIII',
        number_of_obese_cases: 32474,
        percentage_of_obese_cases: 16.90,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 10
    },
    {
        region: 'HRSA Region IX',
        number_of_obese_cases: 170293,
        percentage_of_obese_cases: 27.20,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Higher than National Average',
        ranking: 2
    },
    {
        region: 'HRSA Region X',
        number_of_obese_cases: 39978,
        percentage_of_obese_cases: 18.30,
        national_average: 991582,
        national_average_percentage: 23.10,
        comparison_to_national_average: 'Lower than National Average',
        ranking: 8
    },
]


export const counseling_sum = counseling_data.reduce((acc, item) => acc + item.number_of_obese_cases, 0)