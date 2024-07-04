import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3'
import swcPreserveDirectives from 'rollup-swc-preserve-directives'

export default {
  input: './src/index.ts',
  watch: {
    include: 'src/**/*'
  },
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@pandacss/dev',
    '@/panda/recipes',
    '@/panda/jsx',
    '@/panda/css'
  ],
  output: {
    dir: 'dist',
    preserveModules: true,
    sourcemap: true
  },
  plugins: [
    swc(
      defineRollupSwcOption({
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
      })
    ),
    swcPreserveDirectives()
  ]
}
