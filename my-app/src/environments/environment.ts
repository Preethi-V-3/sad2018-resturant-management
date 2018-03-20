// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyAv6IvRjHxO573px8GPl97s8OhY7flabOg",
    authDomain: "resturant-management-app.firebaseapp.com",
    databaseURL: "https://resturant-management-app.firebaseio.com",
    projectId: "resturant-management-app",
    storageBucket: "resturant-management-app.appspot.com",
    messagingSenderId: "945185891851"
  }
};
