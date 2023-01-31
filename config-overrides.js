const {alias} = require('react-app-rewire-alias');

const aliasMap = {
  '@': 'src',
  '@assets': 'src/assets',
  '@shared': 'src/components/shared',
  '@ui': 'src/components/ui',
};

module.exports = function override(config) {
  alias(aliasMap)(config);

  return config;
};