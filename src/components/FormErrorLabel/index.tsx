import { Text } from "../Text"

export interface FormErrorLabelProps {
  error?: string
}

export const FormErrorLabel = ({ error }: FormErrorLabelProps) => {
  return <Text size="xs" type="danger" italic>{error}</Text>
}