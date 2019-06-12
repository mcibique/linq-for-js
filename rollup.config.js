import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './index.js',
  output: {
    file: 'dist/linq-for-js.min.js',
    sourcemap: true,
    format: 'umd',
  },
  plugins: [babel(), nodeResolve(), uglify(), sourcemaps()],
};
