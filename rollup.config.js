import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './index.js',
  format: 'umd',
  sourceMap: true,
  plugins: [babel(), nodeResolve(), uglify(), sourcemaps()],
  dest: 'dist/linq-for-js.min.js'
};
