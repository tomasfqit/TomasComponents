import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSelect } from '../components/FormSelect';
import { Button } from '../components/Button';

type FormFields = {
  country: string
  languages: string[]
}

const countryOptions = [
  { label: 'Spain', value: 'es' },
  { label: 'Mexico', value: 'mx' },
  { label: 'United States', value: 'us' },
  { label: 'Argentina', value: 'ar' },
];

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'French', value: 'fr' },
];

const meta: Meta<typeof FormSelect> = {
  title: 'Components/FormSelect',
  component: FormSelect,
  parameters: { layout: 'centered' },
  args: {
    label: 'Country',
    name: 'country',
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export default meta
type Story = StoryObj<typeof FormSelect>

const renderWithForm = (args: Story['args']) => {
  const { control } = useForm<FormFields>({
    defaultValues: { country: 'es', languages: [] },
  })

  const label = args?.label ?? 'Country'
  const name = (args?.name as keyof FormFields | undefined) ?? 'country'
  const options = args?.options ?? countryOptions

  return (
    <FormSelect<FormFields>
      {...args}
      label={label}
      name={name}
      control={control}
      options={options}
    />
  )
}

export const Country: Story = {
  render: renderWithForm,
}

export const RequiredCountry: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormFields>({
      resolver: zodResolver(z.object({
        country: z.string().min(1, 'Country is required'),
        languages: z.array(z.string()),
      })),
      defaultValues: { country: '', languages: [] },
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
            width: 440,
          }}
        >
          <FormSelect<FormFields>
            label="Country"
            name="country"
            control={control}
            placeholder="Pick a country"
            options={countryOptions}
          />
          <FormSelect<FormFields>
            label="Languages"
            name="languages"
            control={control}
            placeholder="Pick languages"
            mode="multiple"
            options={languageOptions}
          />
          <Button title="Save" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    );
  },
}
