import { swc } from 'rollup-plugin-swc3'
import swcPreserveDirectives from 'rollup-swc-preserve-directives'

const config = {
  input: './src/index.ts',
  watch: {
    include: 'src/**/*'
  },
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@pandacss/dev',
    '@template/ui-panda/css',
    '@template/ui-panda/jsx',
    '@template/ui-panda/recipes',
    '@react-aria/button',
    '@react-aria/textfield',
    '@react-aria/utils',
    '@react-aria/label',
    '@headlessui/react'
  ],
  output: {
    dir: 'dist',
    preserveModules: true,
    sourcemap: true
  },
  plugins: [
    swc({
      minify: true,
      tsconfig: 'tsconfig.build.json',
      jsc: {
        minify: {
          format: {
            comments: 'all'
          },
          sourceMap: true
        }
      },
      sourceMaps: true
    }),
    swcPreserveDirectives()
  ]
}

export default config
