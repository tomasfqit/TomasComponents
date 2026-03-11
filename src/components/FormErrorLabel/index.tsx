export interface FormErrorLabelProps {
  error?: string
}

export const FormErrorLabel = ({ error }: FormErrorLabelProps) => {
  return <small className="text-xs !text-red-500">{error}</small>
}