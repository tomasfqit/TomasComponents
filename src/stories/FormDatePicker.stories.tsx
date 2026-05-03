import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDatePicker } from '../components/FormDatePicker';
import { Button } from '../components/Button';

type FormFields = {
  appointment: string;
};

const meta: Meta<typeof FormDatePicker> = {
  title: 'Components/FormDatePicker',
  component: FormDatePicker,
  parameters: { layout: 'centered' },
  args: {
    label: 'Appointment',
    name: 'appointment',
    placeholder: 'Pick a date',
  },
};

export default meta;
type Story = StoryObj<typeof FormDatePicker>;

const renderWithForm = (args: Story['args']) => {
  const { control } = useForm<FormFields>({
    defaultValues: { appointment: '' },
  });

  const label = args?.label ?? 'Date';
  const name = (args?.name as keyof FormFields | undefined) ?? 'appointment';

  return (
    <div style={{ width: 320 }}>
      <FormDatePicker<FormFields>
        {...args}
        label={label}
        name={name}
        control={control}
      />
    </div>
  );
};

export const Default: Story = {
  render: renderWithForm,
};

export const WithFormat: Story = {
  args: {
    label: 'Fecha',
    format: 'DD/MM/YYYY',
    placeholder: 'dd/mm/aaaa',
  },
  render: renderWithForm,
};

export const RequiredDate: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormFields>({
      resolver: zodResolver(
        z.object({
          appointment: z
            .string()
            .min(1, 'Date is required'),
        }),
      ),
      defaultValues: { appointment: '' },
    });

    const onSubmit = (data: FormFields) => {
      console.log('Submit', data);
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
          <FormDatePicker<FormFields>
            label="Appointment"
            name="appointment"
            control={control}
            placeholder="Pick a date"
          />
          <Button title="Save" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    );
  },
};
