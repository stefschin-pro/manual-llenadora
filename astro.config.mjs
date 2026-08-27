import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tu-dominio.pages.dev',
  integrations: [
    starlight({
      title: 'Manual de Usuario - LlenaMax4',
      description: 'Manual de usuario de la llenadora LlenaMax4',
      favicon: '/favicon.svg',

      // Configuración de idioma principal en Español
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      sidebar: [
        {
          label: 'Seguridad',
          items: [
            { label: 'Instrucciones de Seguridad', link: '/00-preliminares/seguridad' },
          ],
        },
        {
          label: 'Introducción',
          items: [
            { label: 'Introducción', link: '/01-introduccion/introduccion' },
          ],
        },
        {
          label: 'Detalles del Producto',
          items: [
            { label: 'Vista General', link: '/02-detalles-producto/vista-general' },
            { label: 'Componentes', link: '/02-detalles-producto/componentes' },
          ],
        },
        {
          label: 'Puesta en Marcha',
          items: [
            { label: 'Puesta en Marcha', link: '/03-puesta-en-marcha/puesta-en-marcha' },
          ],
        },
        {
          label: 'Guía de Uso',
          items: [
            { label: 'Seleccionar Versión', link: '/04-guia-uso/' },
            {
              label: 'v1.9.x',
              collapsed: true,
              items: [
                { label: 'Menú Principal', link: '/04-guia-uso/v1_9_x/principal' },
                { label: 'Modo Automático', link: '/04-guia-uso/v1_9_x/automatico' },
                { label: 'Modo Manual', link: '/04-guia-uso/v1_9_x/manual' },
                { label: 'Modo Limpieza', link: '/04-guia-uso/v1_9_x/limpieza' },
                { label: 'Modo Seteo', link: '/04-guia-uso/v1_9_x/seteo' },
              ],
            },
            {
              label: 'v2.2.x',
              collapsed: true,
              items: [
                { label: 'Menú Principal', link: '/04-guia-uso/v2_2_x/principal' },
                { label: 'Modo Automático', link: '/04-guia-uso/v2_2_x/automatico' },
                { label: 'Modo Manual', link: '/04-guia-uso/v2_2_x/manual' },
                { label: 'Modo Limpieza', link: '/04-guia-uso/v2_2_x/limpieza' },
                { label: 'Modo Seteo', link: '/04-guia-uso/v2_2_x/seteo' },
              ],
            },
            {
              label: 'v2.3.x',
              collapsed: true,
              items: [
                { label: 'Menú Principal', link: '/04-guia-uso/v2_3_x/principal' },
                { label: 'Modo Automático', link: '/04-guia-uso/v2_3_x/automatico' },
                { label: 'Modo Manual', link: '/04-guia-uso/v2_3_x/manual' },
                { label: 'Modo Limpieza', link: '/04-guia-uso/v2_3_x/limpieza' },
                { label: 'Modo Seteo', link: '/04-guia-uso/v2_3_x/seteo' },
              ],
            },
          ],
        },
        {
          label: 'Limpieza y Mantenimiento',
          items: [
            { label: 'Limpieza', link: '/05-limpieza-mantenimiento/limpieza' },
            { label: 'Mantenimiento', link: '/05-limpieza-mantenimiento/mantenimiento' },
          ],
        },
        {
          label: 'Problemas conocidos',
          items: [
            { label: 'Problemas conocidos', link: '/06-troubleshooting/troubleshooting' },
          ],
        },
        {
          label: 'Información Adicional',
          items: [
            { label: 'Especificaciones Técnicas', link: '/07-informacion-adicional/especificaciones' },
            { label: 'Control de Documentación', link: '/07-informacion-adicional/control-documentacion' },
          ],
        },
      ],
      // La sección 'versions' ha sido eliminada para evitar el error
    }),
  ],
});