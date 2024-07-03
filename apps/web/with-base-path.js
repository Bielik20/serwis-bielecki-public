/**
 * @param {import('@nx/next/plugins/with-nx').WithNxOptions} nextConfig
 * @return {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
function withBasePath(nextConfig) {
  const basePath =
    process.env['BASE_PATH'] && removeTrailingSlash(process.env['BASE_PATH']);

  return {
    ...nextConfig,
    basePath,
  };
}

/**
 * @param {string} str
 * @return {string}
 */
function removeTrailingSlash(str) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

module.exports = { withBasePath };
