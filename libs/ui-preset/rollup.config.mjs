import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3'
import swcPreserveDirectives from 'rollup-swc-preserve-directives'

const config = {
  input: './src/index.ts',
  watch: {
    include: 'src/**/*'
  },
  external: ['@pandacss/dev'],
  output: {
    dir: 'dist',
    preserveModules: true,
    sourcemap: true
  },
  plugins: [
    swc(
      defineRollupSwcOption({
        minify: true,
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

export default config
