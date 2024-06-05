# Tour Of Heroes

This is a repository focuses on the learning and understanding fundamentals of `Angular`'s structure and concepts.
It also includes learning the usage of `SCSS` with `Angular`.

[Check it out!](https://locolin1204.github.io/Tour-Of-Heroes/)

## Features Implemented

### 1. Hero Editor Component

- Created a component to allow users to view and edit the details of a hero.

### 2. Displaying a List of Heroes

- Implemented functionality to display a list of heroes using `Angular`'s data binding and structural directives.
- Developed master/detail views to enable users to select a hero from the list and view/edit its details.

### 3. Services for Data Management

- Created `Angular` services to manage hero data, encapsulating data access and business logic.
- Integrated `Angular`'s HTTP client module to fetch and save hero data from/to a remote server.
- Used `Angular` In-Memory Web API as a backend for testing and development purposes.

### 4. Routing and Navigation

- Implemented client-side routing to navigate between different views in the application, such as the dashboard and hero details view.
- Defined two main routes: Dashboard, Heroes.
- Ensured the web development server handles fallback routing.

### 5. HTTP Client Integration

- Utilized `Angular`'s HTTP client module to manage HTTP requests, ensuring efficient data fetch and save operations.

### 6. Search Functionality

- Added search functionality to filter the list of heroes based on user input.

### 7. Editing Features

- Implemented functionalities for adding, updating, and deleting heroes, making them editable within the application.

### 8. Styling

- Applied SCSS for styling to enhance the visual appeal and maintainability of the application.

### 9. Generic Components

- Developed reusable components such as Modal, Card, and Nav bar to ensure a consistent user interface.
- Managed component interactions with props in and event emitters out.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
