// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  coveragePathIgnorePatterns: ['<rootDir>/web/src/.*\\.stories\\.[jt]sx?$'],
}

module.exports = config
