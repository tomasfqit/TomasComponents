import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormNumberInput } from '../components/FormNumberInput';
import { Button } from '../components/Button';

type FormFields = {
  age: number | null
  salary: number | null
}

const meta: Meta<typeof FormNumberInput> = {
  title: 'Components/FormNumberInput',
  component: FormNumberInput,
  parameters: { layout: 'centered' },
  args: {
    label: 'Age',
    name: 'age',
    placeholder: 'Enter age',
    min: 0,
  },
};

export default meta
type Story = StoryObj<typeof FormNumberInput>

const renderWithForm = (args: Story['args']) => {
  const { control } = useForm<FormFields>({
    defaultValues: { age: null, salary: null },
  })

  const label = args?.label ?? 'Age'
  const name = (args?.name as keyof FormFields | undefined) ?? 'age'

  return (
    <FormNumberInput<FormFields>
      {...args}
      label={label}
      name={name}
      control={control}
    />
  )
}

export const Age: Story = {
  render: renderWithForm,
}

export const WithValidation: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormFields>({
      resolver: zodResolver(z.object({
        age: z.number().min(18, 'Must be 18+'),
        salary: z.number().min(0, 'Must be positive'),
      })),
      defaultValues: { age: null, salary: null },
    })

    const onSubmit = (data: FormFields) => {
      console.log('Submit', data)
    }

    return (
      <div className="flex flex-col gap-4 rounded-md p-4 border border-gray-300 bg-white text-gray-900 shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 320,
          }}
        >
          <FormNumberInput<FormFields>
            label="Age"
            name="age"
            control={control}
            placeholder="Enter age"
            min={0}
          />
          <FormNumberInput<FormFields>
            label="Salary"
            name="salary"
            control={control}
            placeholder="Enter salary"
            min={0}
            step={100}
            formatter={(value) => (value ? `$ ${value}` : '')}
            parser={(value) => Number(value?.replace(/\$\s?|(,*)/g, ''))}
          />
          <Button title="Save" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    );
  },
}
