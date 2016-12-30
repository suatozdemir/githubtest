import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import closure     from 'google-closure-compiler-js';

export default {
  entry: 'upgrade.js',
  dest: './dist/upgrade-build.js',
  sourceMap: true,
  sourceMapFile: './dist/upgrade-build.js.map',
  format: 'iife',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}