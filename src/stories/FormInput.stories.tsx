import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { FormInput } from '../components/FormInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/Button';


type FormFields = {
  email: string
  name: string
  password: string
}

const meta: Meta<typeof FormInput> = {
  title: 'Components/FormInput',
  component: FormInput,
  parameters: { layout: 'centered' },
  args: {
    title: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
  },
}

export default meta
type Story = StoryObj<typeof FormInput>

const renderWithForm = (args: Story['args']) => {
  const { control } = useForm<FormFields>({
    defaultValues: { email: '', name: '', password: '' },
  })

  const title = args?.title ?? 'Input'
  const name = (args?.name as keyof FormFields | undefined) ?? 'email'

  return <FormInput<FormFields> {...args} title={title} name={name} control={control} />
}

export const Email: Story = {
  render: renderWithForm,
}

export const Name: Story = {
  args: {
    title: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
  },
  render: renderWithForm,
}

export const LoginForm: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormFields>({
      resolver: zodResolver(z.object({
        email: z.string().email(),
        name: z.string().min(1),
        password: z.string().min(8),
      })),
      defaultValues: { email: '', name: '', password: '' },
    })

    const onSubmit = (data: FormFields) => {
      console.log('Login submit', data)
    }

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}
      >
        <FormInput<FormFields>
          title="Email"
          name="email"
          control={control}
          placeholder="you@example.com"
          type="email"
        />
        <FormInput<FormFields>
          title="Password"
          name="password"
          control={control}
          placeholder="••••••••"
          type="password"
        />
        <Button title="Login" onClick={handleSubmit(onSubmit)} />
      </form>
    )
  },
}
