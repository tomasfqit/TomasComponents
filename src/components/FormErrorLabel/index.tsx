export interface FormErrorLabelProps {
  error?: string
}

export const FormErrorLabel = ({ error }: FormErrorLabelProps) => {
  return <small >{error}</small>
}