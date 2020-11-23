

export function validateSex(patientSex: any) {
  let err = { sex: [] as string[] }

  if (!patientSex) {
    err.sex.push('Sex arg must be specified, male or female')
    return err
  }

  if (patientSex === 'male' || patientSex == 'female') {
    return null
  } else {
    err.sex.push(`Sex must either be male or female, given ${patientSex}`)
  }

  return err
}
