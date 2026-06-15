import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { FormPasswordInput } from '../components/FormPasswordInput';
import { Button } from '../components/Button';

type FormFields = {
  password: string;
  confirmPassword: string;
};

const meta: Meta<typeof FormPasswordInput> = {
  title: 'Components/FormPasswordInput',
  component: FormPasswordInput,
  parameters: { layout: 'centered' },
  args: {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
  },
};

export default meta;
type Story = StoryObj<typeof FormPasswordInput>;

const renderWithForm = (args: Story['args']) => {
  const { control } = useForm<FormFields>({
    defaultValues: { password: '', confirmPassword: '' },
  });

  const name = (args?.name as keyof FormFields | undefined) ?? 'password';
  const label = args?.label ?? 'Password';

  return (
    <FormPasswordInput<FormFields>
      {...args}
      name={name}
      label={label}
      control={control}
    />
  );
};

export const Basic: Story = {
  render: renderWithForm,
};

export const ConfirmPassword: Story = {
  args: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: 'Confirm your password',
  },
  render: renderWithForm,
};

export const LoginForm: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormFields>({
      defaultValues: { password: '', confirmPassword: '' },
    });

    const onSubmit = (data: FormFields) => {
      console.log('Password form submit', data);
    };

    return (
      <div className="flex flex-col gap-4 rounded-md p-4 border border-gray-300 bg-white text-gray-900 shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            width: 320,
          }}
        >
          <FormPasswordInput<FormFields>
            label="Password"
            name="password"
            control={control}
            placeholder="••••••••"
          />
          <FormPasswordInput<FormFields>
            label="Confirm Password"
            name="confirmPassword"
            control={control}
            placeholder="••••••••"
          />
          <Button title="Save" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    );
  },
};
