import ASCVDConsts, { ASCVDConstSet } from '@src/constants'

export type PatientParams = {
  sex: 'male' | 'female'
  race: 'white' | 'africanAmerican'
  age: number
  totalChol: number
  hdl: number
  systolicBp: number
  isDiabetic: boolean
  isSmoker: boolean
  treatedHTN: boolean
}

export type LnValues = {
  lnAge: number
  lnTotalChol: number
  lnHdl: number
  lnSystolicBp: number
  isSmoker: number
  isDiabetic: number
}

type ExcludedCoefs = 'baselineSurvival' | 'meanCoef'

type MappingKeys = Exclude<keyof ASCVDConstSet, ExcludedCoefs>

type Mapping = {
  [K in MappingKeys]:  ( keyof LnValues )[]
}

export function calculateCoefValue(coef: number, lnValues: LnValues, key: MappingKeys ) {
  const mapping: Mapping = {
    age: ['lnAge'],
    ageSquared: ['lnAge'],
    totalChol: ['lnTotalChol'],
    ageXtotalChol: ['lnAge', 'lnTotalChol'],
    hdl: ['lnHdl'],
    ageXhdl: ['lnAge', 'lnHdl'],
    treatedSystolic: ['lnSystolicBp'],
    ageXtreatedSystolic: ['lnAge', 'lnSystolicBp'],
    untreatedSystolic: ['lnSystolicBp'],
    ageXuntreatedSystolic: ['lnAge', 'lnSystolicBp'],
    smoker: ['isSmoker'],
    ageXsmoker: ['lnAge', 'isSmoker'],
    diabetes: ['isDiabetic']
  }

  const fields = mapping[key]

  if (key == 'ageSquared') {
    return coef * Math.pow(lnValues[fields[0]], 2)
  }

  if (fields.length > 1) {
    return coef * (lnValues[fields[0]] * lnValues[fields[1]])
  } else {
    return coef * lnValues[fields[0]]
  }
}

export function calculateLnValues(patient: PatientParams): LnValues {
  return {
    lnAge: Math.log(patient.age),
    lnTotalChol: Math.log(patient.totalChol),
    lnHdl: Math.log(patient.hdl),
    lnSystolicBp: Math.log(patient.systolicBp),
    isSmoker: patient.isSmoker ? 1 : 0,
    isDiabetic: patient.isDiabetic ? 1: 0,
  }
}

export function calculateASCVDEstimate(patient: PatientParams): string {
  let coefs = { ...ASCVDConsts[patient.sex][patient.race] } as any
  let lnValues = calculateLnValues(patient)

  if (!patient.isSmoker) {
    delete coefs['smoker']
    delete coefs['ageXsmoker']
  }

  if (!patient.isDiabetic) {
    delete coefs['diabetes']
  }

  if (!patient.treatedHTN) {
    delete coefs['treatedSystolic']
    delete coefs['ageXtreatedSystolic']
  } else {
    delete coefs['untreatedSystolic']
    delete coefs['ageXuntreatedSystolic']
  }

  let calculatedValues = []

  for (let key in coefs) {
    if (
      coefs[key] === 'n/a' || key === 'meanCoef' || key == 'baselineSurvival'
    ) {
      continue
    }

    calculatedValues.push(calculateCoefValue(coefs[key] as number, lnValues, key as MappingKeys))
  }

  let sum = calculatedValues.reduce((a, b) => a + b, 0 )


  let estimate = 1 - Math.pow(coefs['baselineSurvival'] as number, Math.exp(sum - ( coefs['meanCoef'] as number )))

  let percentage = (estimate * 100).toPrecision(2)

  return `${percentage}%`
}
