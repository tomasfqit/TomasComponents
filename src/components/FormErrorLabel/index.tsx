export interface FormErrorLabelProps {
  error?: string
}

export const FormErrorLabel = ({ error }: FormErrorLabelProps) => {
  return <small className="text-red-500 text-xs" >{error}</small>
}