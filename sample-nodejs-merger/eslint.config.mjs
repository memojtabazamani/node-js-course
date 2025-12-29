import standardConfig from 'eslint-config-standard-kit'

export default [
    ...standardConfig({
        prettier: true,
        sortImports: true,
        jsx: true,
        node: false,
        react: true,
        typescript: true
    }),
    {
        // Add your own settings here
    }
]