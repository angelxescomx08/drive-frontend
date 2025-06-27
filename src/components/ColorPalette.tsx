import React from 'react';

const ColorPalette: React.FC = () => {
  return (
    <div className='min-h-screen bg-background-950 text-text-primary p-8'>
      <div className='max-w-4xl mx-auto space-y-8'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-text-primary'>
            Paleta de Colores Oscura
          </h1>
          <p className='text-text-secondary'>
            Configuración completa de colores para tema oscuro
          </p>
        </div>

        {/* Colores Primarios */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-text-primary'>
            Colores Primarios
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            <div className='bg-primary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-primary-900 rounded mb-2'></div>
              <p className='text-text-secondary text-sm'>primary-900</p>
            </div>
            <div className='bg-primary-700 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-primary-700 rounded mb-2'></div>
              <p className='text-text-primary text-sm'>primary-700</p>
            </div>
            <div className='bg-primary-500 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-primary-500 rounded mb-2'></div>
              <p className='text-text-primary text-sm'>primary-500</p>
            </div>
            <div className='bg-primary-300 text-primary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-primary-300 rounded mb-2'></div>
              <p className='text-primary-900 text-sm'>primary-300</p>
            </div>
            <div className='bg-primary-100 text-primary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-primary-100 rounded mb-2'></div>
              <p className='text-primary-900 text-sm'>primary-100</p>
            </div>
          </div>
        </section>

        {/* Colores Secundarios */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-text-primary'>
            Colores Secundarios
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            <div className='bg-secondary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-secondary-900 rounded mb-2'></div>
              <p className='text-text-secondary text-sm'>secondary-900</p>
            </div>
            <div className='bg-secondary-700 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-secondary-700 rounded mb-2'></div>
              <p className='text-text-primary text-sm'>secondary-700</p>
            </div>
            <div className='bg-secondary-500 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-secondary-500 rounded mb-2'></div>
              <p className='text-text-primary text-sm'>secondary-500</p>
            </div>
            <div className='bg-secondary-300 text-secondary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-secondary-300 rounded mb-2'></div>
              <p className='text-secondary-900 text-sm'>secondary-300</p>
            </div>
            <div className='bg-secondary-100 text-secondary-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-secondary-100 rounded mb-2'></div>
              <p className='text-secondary-900 text-sm'>secondary-100</p>
            </div>
          </div>
        </section>

        {/* Colores de Acento */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-text-primary'>
            Colores de Acento
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            <div className='bg-accent-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-accent-900 rounded mb-2'></div>
              <p className='text-text-secondary text-sm'>accent-900</p>
            </div>
            <div className='bg-accent-700 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-accent-700 rounded mb-2'></div>
              <p className='text-text-primary text-sm'>accent-700</p>
            </div>
            <div className='bg-accent-500 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-accent-500 rounded mb-2'></div>
              <p className='text-accent-900 text-sm'>accent-500</p>
            </div>
            <div className='bg-accent-300 text-accent-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-accent-300 rounded mb-2'></div>
              <p className='text-accent-900 text-sm'>accent-300</p>
            </div>
            <div className='bg-accent-100 text-accent-900 p-4 rounded-lg border border-border-primary'>
              <div className='w-full h-16 bg-accent-100 rounded mb-2'></div>
              <p className='text-accent-900 text-sm'>accent-100</p>
            </div>
          </div>
        </section>

        {/* Colores de Estado */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-text-primary'>
            Colores de Estado
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-success-700 p-6 rounded-lg border border-border-primary'>
              <h3 className='text-lg font-semibold text-text-primary mb-2'>
                Éxito
              </h3>
              <p className='text-text-secondary'>
                Estado de éxito o confirmación
              </p>
            </div>
            <div className='bg-warning-700 p-6 rounded-lg border border-border-primary'>
              <h3 className='text-lg font-semibold text-text-primary mb-2'>
                Advertencia
              </h3>
              <p className='text-text-secondary'>
                Estado de advertencia o precaución
              </p>
            </div>
            <div className='bg-error-700 p-6 rounded-lg border border-border-primary'>
              <h3 className='text-lg font-semibold text-text-primary mb-2'>
                Error
              </h3>
              <p className='text-text-secondary'>Estado de error o fallo</p>
            </div>
          </div>
        </section>

        {/* Componentes de Ejemplo */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-text-primary'>
            Componentes de Ejemplo
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Card de ejemplo */}
            <div className='bg-surface-800 p-6 rounded-lg border border-border-primary'>
              <h3 className='text-xl font-semibold text-text-primary mb-4'>
                Tarjeta de Contenido
              </h3>
              <p className='text-text-secondary mb-4'>
                Este es un ejemplo de cómo se ve una tarjeta con la nueva paleta
                de colores.
              </p>
              <div className='flex gap-3'>
                <button className='bg-primary-600 hover:bg-primary-700 text-text-primary px-4 py-2 rounded-md transition-colors'>
                  Primario
                </button>
                <button className='bg-secondary-600 hover:bg-secondary-700 text-text-primary px-4 py-2 rounded-md transition-colors'>
                  Secundario
                </button>
              </div>
            </div>

            {/* Form de ejemplo */}
            <div className='bg-surface-800 p-6 rounded-lg border border-border-primary'>
              <h3 className='text-xl font-semibold text-text-primary mb-4'>
                Formulario
              </h3>
              <div className='space-y-4'>
                <div>
                  <label className='block text-text-secondary text-sm mb-2'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    className='w-full bg-surface-700 border border-border-secondary rounded-md px-3 py-2 text-text-primary focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500'
                    placeholder='Ingresa tu nombre'
                  />
                </div>
                <div>
                  <label className='block text-text-secondary text-sm mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full bg-surface-700 border border-border-secondary rounded-md px-3 py-2 text-text-primary focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500'
                    placeholder='tu@email.com'
                  />
                </div>
                <button className='w-full bg-accent-600 hover:bg-accent-700 text-text-primary py-2 rounded-md transition-colors'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorPalette;
