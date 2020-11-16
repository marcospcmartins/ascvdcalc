type CoefValue = 'n/a' | number

enum ASCVDConstKeys {
  age,
  ageSquared,
  totalChol,
  ageXtotalChol,
  hdl,
  ageXhdl,
  treatedSystolic,
  ageXtreatedSystolic,
  untreatedSystolic,
  ageXuntreatedSystolic,
  smoker,
  ageXsmoker,
  diabetes,
  meanCoef,
  baselineSurvival,
}

export type ASCVDConstSet = {
  [key in keyof typeof ASCVDConstKeys]: CoefValue
}

type ASCVDConstsType = {
  male: {
    white: ASCVDConstSet
    africanAmerican: ASCVDConstSet
  }
  female: {
    white: ASCVDConstSet
    africanAmerican: ASCVDConstSet
  }
}


const ASCVDConsts: ASCVDConstsType = {
  male: {
    white: {
      age: 12.344,
      ageSquared: 'n/a',
      totalChol: 11.853,
      ageXtotalChol: -2.664,
      hdl: -7.990,
      ageXhdl: 1.769,
      treatedSystolic: 1.797,
      ageXtreatedSystolic: 'n/a',
      untreatedSystolic: 1.764,
      ageXuntreatedSystolic: 'n/a',
      smoker: 7.837,
      ageXsmoker: -1.795,
      diabetes: 0.658,
      meanCoef: 61.18,
      baselineSurvival: 0.9144,
    },
    africanAmerican: {
      age: 2.469,
      ageSquared: 'n/a',
      totalChol: 0.302,
      ageXtotalChol: 'n/a',
      hdl: -0.307,
      ageXhdl: 'n/a',
      treatedSystolic: 1.916,
      ageXtreatedSystolic: 'n/a',
      untreatedSystolic: 1.809,
      ageXuntreatedSystolic: 'n/a',
      smoker: 0.549,
      ageXsmoker: 'n/a',
      diabetes: 0.645,
      meanCoef: 19.54,
      baselineSurvival: 0.8954,
    }
  },
  female: {
    white: {
      age: -29.799,
      ageSquared: 4.884,
      totalChol: 13.540,
      ageXtotalChol: -3.114,
      hdl: -13.578,
      ageXhdl: 3.149,
      treatedSystolic: 2.019,
      ageXtreatedSystolic: 'n/a',
      untreatedSystolic: 1.957,
      ageXuntreatedSystolic: 'n/a',
      smoker: 7.574,
      ageXsmoker: -1.665,
      diabetes: 0.661,
      meanCoef: -29.18,
      baselineSurvival: 0.9665,
    },
    africanAmerican: {
      age: 17.114,
      ageSquared: 'n/a',
      totalChol: 0.940,
      ageXtotalChol: 'n/a',
      hdl: -18.920,
      ageXhdl: 4.475,
      treatedSystolic: 29.291,
      ageXtreatedSystolic: -6.432,
      untreatedSystolic: 27.820,
      ageXuntreatedSystolic: -6.087,
      smoker: 0.691,
      ageXsmoker: 'n/a',
      diabetes: 0.874,
      meanCoef: 86.61,
      baselineSurvival: 0.9533,
    }
  }
}

export default ASCVDConsts
