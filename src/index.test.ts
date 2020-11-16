import { calculateASCVDEstimate } from '@src/utils'

const patientCases = [
  [
    {
      sex: 'male',
      race: 'white',
      age: 55,
      totalChol: 213,
      hdl: 50,
      systolicBp: 120,
      isDiabetic: false,
      isSmoker: false,
      treatedHTN: false,
    },
    '5.4%'
  ],
  [
    {
      sex: 'male',
      race: 'africanAmerican',
      age: 55,
      totalChol: 213,
      hdl: 50,
      systolicBp: 120,
      isDiabetic: false,
      isSmoker: false,
      treatedHTN: false,
    },
    "6.1%"
  ],
  [
    {
      sex: 'female',
      race: 'white',
      age: 55,
      totalChol: 213,
      hdl: 50,
      systolicBp: 120,
      isDiabetic: false,
      isSmoker: false,
      treatedHTN: false,
    },
    "2.1%"
  ],
  [
    {
      sex: 'female',
      race: 'africanAmerican',
      age: 55,
      totalChol: 213,
      hdl: 50,
      systolicBp: 120,
      isDiabetic: false,
      isSmoker: false,
      treatedHTN: false,
    },
    "3.0%"
  ],
]

describe('Given 4 base patient case paramaters, calculate a 10 year estimate', () => {
  test.each(patientCases)('given case', (patientParams: any, expected) => {
    expect(calculateASCVDEstimate(patientParams)).toBe(expected)
  })
})
