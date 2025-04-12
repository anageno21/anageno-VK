module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Απενεργοποίηση των source maps για CSS
        webpackConfig.module.rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((subRule) => {
              if (subRule.test && subRule.test.toString().includes('.css')) {
                subRule.use = subRule.use.map((loader) => {
                  if (loader.loader && loader.loader.includes('css-loader')) {
                    loader.options.sourceMap = false;
                  }
                  if (loader.loader && loader.loader.includes('postcss-loader')) {
                    loader.options.sourceMap = false;
                  }
                  return loader;
                });
              }
            });
          }
        });
        // Απενεργοποίηση των source maps γενικά
        webpackConfig.devtool = false;
        return webpackConfig;
      },
    },
  };