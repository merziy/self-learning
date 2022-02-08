# Progressive Web Application

This is the basic "Hello World!" code but with a Progressive Web Applciation method behind its implementation. Progress Web Apps (hereafter "PWA's") use browser technologies to build an application that works offline, but feels native. The point behind this project is for me to gather a better understanding through an exercise.

## Technologies used

HTML5, CSS3, and JavaScript ES6.

### What to keep in mind when writing a PWA

1. Even if JavaScript is disabled in a browser, something should still be displayed, in the case that the end user's connection is weak, or they are using an outdated browser.

2. It should be responsive and mobile-friendly with content that fills the entire browser.

3. A service worker is needed, which is a script that runs in the background to perform tasks that do not require user interaction I.e., cacheing content then serving it back up from the cache when the user is offline.

4. A manifest.json file in the root folder is needed to specify how the PWA will look and behave on various devices.
