import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, LogIn, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Esquema de validación con Zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('Ingrese un email válido'),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simular llamada a API
      console.log('Datos del formulario:', data);

      // Simular delay de la API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aquí iría la lógica real de autenticación
      alert('¡Inicio de sesión exitoso!');
    } catch (error) {
      console.error('Error en el login:', error);
      alert('Error al iniciar sesión. Inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4'>
      <Card className='w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm'>
        <CardHeader className='space-y-3 text-center'>
          <div className='mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2'>
            <LogIn className='w-8 h-8 text-white' />
          </div>
          <CardTitle className='text-2xl font-bold text-gray-800'>
            Iniciar Sesión
          </CardTitle>
          <CardDescription className='text-gray-600'>
            Ingrese sus credenciales para acceder a su cuenta
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* Campo Email */}
            <div className='space-y-2'>
              <Label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Correo Electrónico
              </Label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                <Input
                  id='email'
                  type='email'
                  placeholder='tu@email.com'
                  className={`pl-10 h-11 transition-all duration-200 ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className='text-sm text-red-600 font-medium'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div className='space-y-2'>
              <Label
                htmlFor='password'
                className='text-sm font-medium text-gray-700'
              >
                Contraseña
              </Label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  className={`pl-10 pr-10 h-11 transition-all duration-200 ${
                    errors.password
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  {...register('password')}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                >
                  {showPassword ? (
                    <EyeOff className='w-4 h-4' />
                  ) : (
                    <Eye className='w-4 h-4' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='text-sm text-red-600 font-medium'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Enlaces adicionales */}
            <div className='flex items-center justify-between text-sm'>
              <label className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                />
                <span className='text-gray-600'>Recordarme</span>
              </label>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de envío */}
            <Button
              type='submit'
              disabled={isLoading}
              className='w-full h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:opacity-70'
            >
              {isLoading ? (
                <div className='flex items-center space-x-2'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                <div className='flex items-center space-x-2'>
                  <LogIn className='w-4 h-4' />
                  <span>Iniciar Sesión</span>
                </div>
              )}
            </Button>

            {/* Enlace de registro */}
            <div className='text-center text-sm text-gray-600'>
              ¿No tienes una cuenta?{' '}
              <a
                href='#'
                className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
              >
                Regístrate aquí
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
