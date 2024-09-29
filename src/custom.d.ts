// Enable SVG components to be used as JSX elements
declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.svg?url' {
  const value: string
  export default value
}

// Declare types for global vars created by DotEnv and DefniePlugin

declare const APP_NAME: string
declare const BUILD_VERSION: string
declare const BUILD_DATE: string
declare const RELEASE_STAGE: 'dev' | 'production'
