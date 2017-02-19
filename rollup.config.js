import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './index.js',
  format: 'umd',
  plugins: [babel(), nodeResolve(), uglify()],
  dest: 'dist/linq-for-js.min.js'
};
