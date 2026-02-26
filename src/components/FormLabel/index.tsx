export interface FormLabelProps {
  title?: string
}

export const FormLabel = ({ title }: FormLabelProps) => {
  return <div className="text-start">
    <strong className="text-sm">{title}</strong>
  </div>
}