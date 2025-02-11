import { calculateASCVDEstimate } from './utils'

const patientCases = [
  [
    {
      sex: 'female',
      race: 'white',
      age: 72,
      totalChol: 320,
      hdl: 20,
      systolicBp: 154,
      isDiabetic: false,
      isSmoker: false,
      treatedHTN: true,
    },
    '26.21'
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
    '6.073'
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
    '2.052'
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
    '3.026'
  ],
]

describe('Given 4 base patient case paramaters, calculate a 10 year estimate', () => {
  test.each(patientCases)('given case', (patientParams: any, expected) => {
    expect(calculateASCVDEstimate(patientParams)).toBe(expected)
  })
})
