module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~bulma/sass/utilities/initial-variables.sass";
          @import "~bulma/sass/utilities/mixins.sass";
        `,
      },
    },
  },
};
