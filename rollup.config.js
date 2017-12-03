export default {
  name: 'leaflet.terminator',
  input: 'index.js',
  output: {
    file: 'L.Terminator.js',
    format: 'umd'
  },
  external: ['leaflet'],
  globals: {
    'leaflet': 'L'
  }
}
