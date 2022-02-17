# Posterr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Description

This project is an example of a social media with function similar twitter.

## Planning

#### How to build "Posts and Replies" using @username to mention an user?

One possible solution is create a new attribute in post-entity called mentions that will have all @username, so we can make a request to get all post having current logged in username in the mentions.

## Critique

This project is a simple example, works well but can be improved so much.
The UI could be more friendly, the home and profile page could be more responsive.
The code could be more generic in some parts, it will be good to reuse more components.

To connect this front-end project with a serve, basically will be necessary to change the code in the services, the logic to get items from requests is centralized.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
