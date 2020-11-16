import { calculateCoefValue, calculateLnValues } from '@src/utils'
import type { PatientParams, LnValues } from '@src/utils'

const patientParms: PatientParams = {
  sex: 'male',
  race: 'white',
  age: 55,
  totalChol: 213,
  hdl: 50,
  systolicBp: 120,
  isDiabetic: false,
  isSmoker: false,
  treatedHTN: false,
}

const lnValues: LnValues = {
  lnAge: Math.log(patientParms.age),
  lnTotalChol: Math.log(patientParms.totalChol),
  lnHdl: Math.log(patientParms.hdl),
  lnSystolicBp: Math.log(patientParms.systolicBp),
  isSmoker: patientParms.isSmoker ? 1 : 0,
  isDiabetic: patientParms.isDiabetic ? 1 : 0,
}

const testCases = [
  [12.344, 'age', 49.47],
  [11.853, 'totalChol', 63.55],
  [-2.664, 'ageXtotalChol', -57.23],
  [-7.990, 'hdl', -31.26],
  [1.769, 'ageXhdl', 27.73],
]

describe('Given a coefficent, natrual log values and a coefficent key produce a value', () => {
  test.each(testCases)('given coef: %s, key: %s,  expected: %s', (coef: any,  key: any, expected) => {
    let value = calculateCoefValue(coef, lnValues, key)
    expect(Number(value.toPrecision(4))).toBe(expected)
  })
})

describe('Given patient params calculate natural log values', () => {
  test('patient case 1', () => {
    expect(calculateLnValues(patientParms)).toStrictEqual(lnValues)
  })
})
