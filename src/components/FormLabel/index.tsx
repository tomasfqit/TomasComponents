import { Text } from "../Text"

export interface FormLabelProps {
  title?: string
}

export const FormLabel = ({ title }: FormLabelProps) => {
  return <Text size="sm" strong>{title}</Text>
}