module.exports = function(eleventyConfig) {
    // Set custom directories for input, output, includes, and data
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");

    return {
      passthroughFileCopy: true,

      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }

    };

   };

