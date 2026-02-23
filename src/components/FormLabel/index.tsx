export interface FormLabelProps {
  title?: string
}

export const FormLabel = ({ title }: FormLabelProps) => {
  return <label className="text-sm font-bold">{title}</label>
}