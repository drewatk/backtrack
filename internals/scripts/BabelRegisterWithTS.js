/**
 * Used to run Babel on the fly, without building the code seperately
 * This exports @babel/register, but with a config to allow TypesScript files to be loaded
 */
module.exports = require('@babel/register')({
  extensions: ['.ts', '.js', '.tsx', '.jsx']
});
