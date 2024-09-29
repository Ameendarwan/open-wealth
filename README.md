# OpenWealth

OpenWealth is a responsive web application designed for a fictional decentralized finance (DeFi) platform that democratizes asset ownership. The platform enables users to effortlessly view and manage their cryptocurrency portfolios.

## Features

### Dashboard Page

- Displays a comprehensive list of crypto assets, including popular currencies like Bitcoin and Ethereum.

### Asset Details

For each asset, users can view:

- **Current Price**: Displayed using a mock API or static data.
- **Price Change**: Shows the change over the last 24 hours.
- **User Holdings**: Displays the user's holdings for each asset.
- **Total Portfolio Value**: Calculates and displays the total value of the user's crypto portfolio.

## Technologies Used

This project has been bootstrapped with:

- Typescript
- React
- Redux Toolkit
- React Router
- Styled Components
- i18next
- react-i18next
- Webpack
- Babel
- ESLint
- Prettier
- Stylelint
- unit tests with reports and coverage thresholds
- assuming `uat` branch represents staging environment, should be set as default branch
- assuming `main` branch represents production environment
- assuming app is built into `build` folder

## Node Version

This application is compatible with Node.js version **18.12.0**.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm start`.
4. The project runs on port `3000` by default, but this can be changed in `./config/webpack.dev.js`.

### Project Layout

```
├── build                       # output from compilation
├── config                      # webpack config files
├── public                      # public files
├── src                         # application code
│   ├── assets                  # static files
│   ├── components              # component files
│   └── pages                   # page files
│   └── hooks                   # general purpose hooks
│   └── mock                    # mock data and api handlers
│   └── i18n                    # i18n configuration and translations
│   └── store                   # application state management
│   └── theme                   # application theme management
│   └── utils                   # general reusabale code
│   └── GlobalStyle.tsx         # global CSS declarations
│   └── index.tsx               # webpack entry point
└── .babelrc                    # compiler config
└── .eslintrc.js                # code quality config
└── .prettierrc                 # logic formatting config
└── .stylelint                  # style formatting config
└── jest.config.ts              # testing config
└── tsconfig.json               # typescript config file

```

### Running Tests

To run tests for the OpenWealth application:

1. Execute all tests with the command `npm run test`.
2. Assess test coverage by running `npx vitest run --coverage`

### IDE Configuration

The suggested IDE for this project is VSCode.

Install these extension for code-completion and linting in the IDE:

- **ESLint** (by Microsoft) to enforce **Code Quality Rules**
- **Prettier** (by Prettier) to enforce **JS/TS Formatting Rules**
- **Stylelint** (by Stylelint) to enforce **CSS Formatting Rules**
- **vscode-styled-components** (by Styled Components) to auto-complete CSS-in-JS

### Environment Variables

Environment variables are set for each `script` in `package.json`. To be used in the app, they must also be declared by the `WebpackDefinePlugin` in `./.config/webpack.common.js`.

| Name     | Purpose                    |
| -------- | -------------------------- |
| APP_NAME | Used to reference app name |

### Building

To build the project in `prodction` mode `npm run build`.

The build configuration can be modified in `./config/webpack.common.js` and `./config/webpack.prod.js`.
