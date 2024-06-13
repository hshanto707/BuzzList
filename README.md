## Introduction

BuzzList is a to-do list application where all the latest technologies are introduced.

## Project Structure

The project structure is as follows:

```
buzzlist/
├── src/
│   ├── app/
│   │   └── modules/
│   │       ├── users/
│   │       │   ├── schemas/
│   │       │   │   └── users.schema.js
│   │       │   ├── validators/
│   │       │   │   └── create-user.validator.js
│   │       │   ├── users.controller.js
│   │       │   ├── users.middleware.js
│   │       │   ├── users.model.js
│   │       │   ├── users.repository.js
│   │       │   ├── users.service.js
│   │       ├── app.controller.js
│   │       └── app.repository.js
│   │       └── app.service.js
│   ├── config/
│   │   └── conifig.service.js
│   ├── core/
│   │   ├── helpers/
│   │   │   └── asyncWrapper.js
│   │   └── middlewares/
│   │       └── globalErrorHandler.middleware.js
│   ├── db/
│   │   └── db.js
│   ├── routes/
│   │   ├── v1/
│   │   │   └── routes.js
│   ├── utils/
│   │   └── responseFormatter.js
│   └── main.js
├── tests/
│   ├── app.e2e-spec.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Folders and files

#### src/

This folder contains the source code for the application. It is further divided into the following folders:

- **app/**: This folder contains the modules for the application. Each module is a folder that contains the following folders & files:
  - **schemas/**: This folder contains the schemas for the module. Each schema is a file that contains the schema for the module.
  - **validators/**: This folder contains the validators for the module. Each validator is a file that contains the validator for the module.
  - **controller**: this file contains the controller for the module. The controller is responsible for handling the requests and responses for the module. The controller mainly uses the service layer for the business logic.
  - **controller.spec**: This file contains the unit tests for the controller.
  - **middleware**: This file contains the middlewares for the module. The middlewares is responsible for any pre-processing of the request before it is handled by the controller.
  - **model**: This file contains the model for the module. The model is responsible for the database operations for the module. The model can use multiple schemas from the schemas folder.
  - **service**: This file contains the service for the module. The service is responsible for the business logic for the module. It uses the model for the database operations.
  - **service.spec**: This file contains the unit tests for the service.
- **config/**: This folder contains the configuration files for the application. It can contain the config, which is environment-specific, or the config which are common for all environments. Or any other configs. e.g. database config, logger config, server config, etc.
- **core/**: This folder contains the core files for the application. It is further divided into the following folders:
  - **helpers/**: This folder contains the helper files for the application. These files contain the helper functions that are used throughout the application.
  - **middlewares/**: This folder contains the middlewares for the application. These files contain the middlewares that are used throughout the application.
- **db/**: This folder contains the database files for the application. It mainly contains the database connection file. But depending on the project, it can also contain database migration & seed files.
- **routes/**: This folder contains the route files for the application. It contains the routes for the modules. Each module has its own route file.
- **utils/**: This folder contains the utility files for the application. These files contain the utility functions that are used throughout the application. e.g. response formatter, error formatter, rate limiter, etc.
- **main.js**: This file is the main file for the application. It contains the server setup code. It also contains the code for registering the routes, middlewares, etc. It used by the bin/www file to start the server.

#### tests/

This folder contains the end-to-end and unit tests for the application.
Each module has its own test file.
The test files are named as `<module-name>.e2e-spec.js`.
It will also contain any test data required for the tests.
As well as any config files required for the tests.
E.g., jest config files.

#### .env & .env.example

These files contain the environment variables for the application. The .env file is not committed to the repository. It is used to store the environment variables for the application. The .env.example file is committed to the repository. It contains the example environment variables for the application. It is used as a reference for the .env file.

#### .gitignore

This file contains the files and folders that are ignored by git. It is used to prevent the files and folders from being committed to the repository.

#### package.json & package-lock.json

These files contain the npm packages for the application. The package.json file contains the packages required for the application. The package-lock.json file contains the exact versions of the packages installed for the application. Depending on the project, this can be requirements.txt or go.mod or any other package file.

#### README.md

This file contains the documentation for the application. It is used to provide information about the application.

### Run This Project Locally

```
  npm run dev
```
