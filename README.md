# RealEstate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## To install Node.js 

[Node.js](https://nodejs.org/en)

## To install Angular

`npm install -g @angular/cli` in PowerShell

## To fix Firebase error

Go to `node_modules/@angular/fire/compat/firestore/interfaces.d.ts`. All of this that give errors:

`export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
        readonly exists: true;
        data(options?: SnapshotOptions): T;
    }

export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot {
    data(options?: SnapshotOptions): T;
}
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot {
    readonly docs: QueryDocumentSnapshot<T>[];
}
export interface DocumentChange<T> extends firebase.firestore.DocumentChange {
    readonly doc: QueryDocumentSnapshot<T>;
}`

To this:

`export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot <T>{
    readonly exists: true;
    data(options?: SnapshotOptions): T;
}
export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot <T>{
    data(options?: SnapshotOptions): T;
}
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot <T>{
    readonly docs: QueryDocumentSnapshot<T>[];
}
export interface DocumentChange<T> extends firebase.firestore.DocumentChange <T> {
    readonly doc: QueryDocumentSnapshot<T>;
}`

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
