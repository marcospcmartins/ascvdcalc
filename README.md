# ASCVD Calculation

This is a javascript implementation of the atherosclerotic cardiovascular disease (ASCVD) 10 year risk calculation. Designed my the American Academy of Cardiology (ACC) this risk Estimator enables health care providers and patients to estimate 10-year and lifetime risks for ASCVD, defined as coronary death or nonfatal myocardial infarction, or fatal or nonfatal stroke, based on the Pooled Cohort Equations and lifetime risk prediction tools.

### References 
- ACCs own web based [risk estimator](https://tools.acc.org/ldl/ascvd_risk_estimator/index.html#!/calulate/estimator/)
- ACC ASCVD [guidelines](https://www.ahajournals.org/doi/pdf/10.1161/01.cir.0000437741.48606.98)


### About
This repo uses typescript for its codebase and jest for testing. Webpack is used to bundle the calculation method to a single distribution file. Along with this tsc is used to create a `lib-esm` dir to allow for esm consumable modules. Jest tests include the 4 base example patients used to describe the implementation of the pooled cohort equations in the ACC guidelines.

### Usage

Import the calculation with either require or esm modules

Node

```
var { calculateASCVDEstimate } = require('ascvdcalc')
```

ESM

```
import { calculateASCVDEstimate } from 'ascvdcalc'
```

The calculation method takes a singe `patient` object which includes patient parameters needed for the calculation

Example:

```
var patientParams = {
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

var estimate = calculateASCCDEstimate(patientParams) // output 5.4%
```

### Tests
Execute `yarn test` to run all test cases using jest

### Build
Execute `yarn build` to generate `dist` and `lib-esm` directories for consuming in node or a browser setting
