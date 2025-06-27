import { UserPlus } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { InputForm } from '../../../../components/ui/customs/input-form';
import { Form } from '../../../../components/ui/form';
import { useRegister } from '../../hooks/useRegister';

export const RegisterForm = () => {
  const { form, registerMutation, onSubmit, onError } = useRegister();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4'>
      <Card className='w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm'>
        <CardHeader className='space-y-3 text-center'>
          <div className='mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2'>
            <UserPlus className='w-8 h-8 text-white' />
          </div>
          <CardTitle className='text-2xl font-bold text-gray-800'>
            Registrarse
          </CardTitle>
          <CardDescription className='text-gray-600'>
            Ingrese sus credenciales para acceder a su cuenta
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className='space-y-6'
            >
              <div className='space-y-2'>
                <InputForm
                  form={form}
                  name='email'
                  label='Email'
                  inputProps={{
                    type: 'email',
                    placeholder: 'Ingrese su email',
                  }}
                />
              </div>

              <div className='space-y-2'>
                <InputForm
                  form={form}
                  name='password'
                  label='Contraseña'
                  inputProps={{
                    type: 'password',
                    placeholder: 'Ingrese su contraseña',
                  }}
                />
              </div>

              <div className='space-y-2'>
                <InputForm
                  form={form}
                  name='repeatPassword'
                  label='Repetir contraseña'
                  inputProps={{
                    type: 'password',
                    placeholder: 'Repita su contraseña',
                  }}
                />
              </div>

              <Button
                type='submit'
                disabled={registerMutation.isPending}
                className='w-full h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:opacity-70'
              >
                {registerMutation.isPending ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Iniciando sesión...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <UserPlus className='w-4 h-4' />
                    <span>Registrarse</span>
                  </div>
                )}
              </Button>

              <div className='text-center text-sm text-gray-600'>
                ¿Ya tienes una cuenta?{' '}
                <Link
                  to='/'
                  className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
                >
                  Inicia sesión aquí
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
