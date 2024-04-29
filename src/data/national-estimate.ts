

export const national_estimates: {
    label: string,
    raw_value: number,
    percentage: number
}[] = [
    {
        label: 'Total Number of Obese Cases',
        raw_value: 5647959,
        percentage: 0.34
    },
    {
        label: 'Total Number of Obese Cases with Complex Healthcare Needs',
        raw_value: 1352208,
        percentage: 0.224
    },
    {
        label: 'Total Number of Obese Patients without Family Resilience',
        raw_value: 102978,
        percentage: 0.29
    },
    {
        label: 'Total Number of Obese Patients with Adverse Childhood experiences',
        raw_value: 3094003,
        percentage: 0.406
    },
    {
        label: 'Total Number of Obese Patients with Behavioral, Mental or Developmental difficulties',
        raw_value: 1860054,
        percentage: 0.209
    },
    {
        label: 'Total Number of Obese Patients who need Counseling',
        raw_value: 91582,
        percentage: 0.231
    },
    {
        label: 'Total Number of Obese Cases with  poor insurance coverage',
        raw_value: 1802357,
        percentage: 0.167
    },
    {
        label: 'Total Number of Obese Cases who did not Receive Care in a well functioning system ',
        raw_value:5013720,
        percentage: 0.174
    }
]

export const national_sum = national_estimates.reduce((acc, item) => acc + item.raw_value, 0)