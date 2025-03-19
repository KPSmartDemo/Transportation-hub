// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FIREBASE_OPTIONS } from "@angular/fire/compat";
import { initializeApp } from "firebase/app";
// import { FirebaseOptions } from "firebase/app";

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyDR01TvXPCLZcXUK-iwFyitOLJZ3x24e4o",
    authDomain: "transport-project-f0310.firebaseapp.com",
    projectId: "transport-project-f0310",
    storageBucket: "transport-project-f0310.appspot.app",
    messagingSenderId: "1031952473000",
    appId: "1:1031952473000:web:982463cfa3e856c663db9d",
    measurementId: "G-TNXVE6MLLT"
  },FIREBASE_OPTIONS
};
// const app = initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
