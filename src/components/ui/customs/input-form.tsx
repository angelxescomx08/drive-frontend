import type { Path, UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Input } from '../input';
import type { ComponentProps } from 'react';

type InputFormProps<T extends Record<string, any>> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  description?: string;
  inputProps?: ComponentProps<typeof Input>;
};

export const InputForm = <T extends Record<string, any>>({
  form,
  name,
  label,
  description,
  inputProps,
}: InputFormProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>
            {label}
          </FormLabel>}
          <FormControl>
            <Input {...field} {...inputProps} />
          </FormControl>
          {!!description && <FormDescription>
            {description}
          </FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
