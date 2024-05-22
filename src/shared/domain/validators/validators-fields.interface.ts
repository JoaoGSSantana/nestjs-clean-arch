export type FieldsErrors = {
  [file: string]: string[]
}

export interface ValidationFieldsInterface<PropsValidated> {
  errors: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean
}
