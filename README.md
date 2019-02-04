# storybook

A story sharing web application built using Express.js, Node.js, MongoDB, Handlebars.js, Materialize, and Passport (For Google authentication).


### Usage
1. Clone this repo `git clone https://github.com/ADomio/storybook`
2. Run `npm install` within the project root to install the required Node modules.
3. Create a Google OAuth Web Application to receive a Client ID and Client secret.
4. Set the following variables - these can be set using Node environment variables, or by simply hardcoding them into keys.js
   1. mongoURI (the URI of your mongodb database )
   2. googleClientID
   3. googleClientSecret
   4. sessionSecret (a randomly generated secret)
5. Run `npm start`
