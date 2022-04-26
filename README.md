Harver QA Exercise
========================

I have automate the selected elements using Cypress.io with BDD

========================

----------------------------- Cypress installation with BDD -----------------------------------------

Step 1 - Install Cypress.io with npm

Open VS code and go to the selected location that you intend to install cypress
Open Terminal and type : npm install cypress and Enter



Step 2 - Integrate Cucumber to Cypress


To install add Cucumber to your project, you need to download a community plugin which is the "cypress cucumber preprocessor".

========================
Type:  npm install --save-dev cypress-cucumber-preprocessor 
========================

Now there are some configurations to do,
Go to Cypress > Plugins > index.js and insert the bellow lines. ( You will see module.exports = (on, config) => {} inside index.js, you can replace that with bellow lines)

========================

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {on('file:preprocessor', cucumber())}

========================


Outside your Cypress folder, you should see a cypress.json file. Add the bellow line inside the emply json object

========================
"testFiles":"**/*.feature"
========================


Finally inside your package.json ( Not the package-lock.json) insert these lines. (When you set the nonGlobalStepDefinitions > true, the framework will look for step definition files inside the cypress > integration > common folder. You can change that when ever you need. )

========================

  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/integration/step_definitions/**/"
  }
========================

Step 3 - Add VS Code Support for Cucumber

Click on the  (Extensions) icon on VS CODE and search for, "Cucumber (Gherkin) Full Support" and install it.


Now in your project root directory create a folder called .vscode
Inside that folder create a settings.json file
Inside that file, add the bellow lines

========================

{
"cucumberautocomplete.steps": [
"cypress/integration/step_definitions/**/*.js"
    ],
"cucumberautocomplete.strictGherkinCompletion": true
}
========================

Finally inside the cypress > integration folder, create two folders named as features and step_definitions

Retart the VS Code application 


Running the tests: 

Run npx cypress open and you will see your feature as a test in cypress execution window and click on the feature file that you intend to run



