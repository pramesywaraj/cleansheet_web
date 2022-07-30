const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "src": path.resolve(__dirname, 'src/'),
      "components": path.resolve(__dirname, 'src/components/'),
      "pages": path.resolve(__dirname, 'src/pages/'),
      "hooks": path.resolve(__dirname, 'src/hooks/'),
      "misc": path.resolve(__dirname, 'src/misc/'),
      "assets": path.resolve(__dirname, 'src/assets/'),
      "context": path.resolve(__dirname, 'src/context/'),
    }
  }
}