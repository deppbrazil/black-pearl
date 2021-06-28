import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import url from 'rollup-plugin-url';

const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'lib/index.js');

export default {
  input: INPUT_FILE,
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  output: [
    {
      file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.es.js'),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    url(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    terser(),
  ],
};