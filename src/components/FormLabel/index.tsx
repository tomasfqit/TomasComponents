export interface FormLabelProps {
  title?: string
}

export const FormLabel = ({ title }: FormLabelProps) => {
  return <label>{title}</label>
}