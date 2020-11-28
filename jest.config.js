module.exports = {

  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'], // Caminho onde eu quero que seja realizada a cobertura
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: { // Transformar para TS na compilação
    '.+\\.ts$': 'ts-jest'
  }
}
