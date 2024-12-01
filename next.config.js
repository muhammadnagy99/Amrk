// next.config.js
module.exports = {
    webpack(config, { isServer }) {
      // Handle Markdown files
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
  };
  