# Calculator App w/ Angular & Electron

## Installation & Running the application

1. Clone repo/download zip
2. Delete node-modules if they are present upon cloning/download. Ensure that you have navigated to the '\calculator-app' directory in code editor/terminal. (ex. 'C:..\angular-calculator\calculator-app') and reinstall node modules with 'npm install --save' to ensure all packages are installed correctly. 
3. Depending on your platform, the command will differ. Run from terminal

    npx electron-packager ./ calculator-app --platform=win32

    or

    npx electron-packager ./ calculator-app --platform=linux

    *Must be ran from the 'calculator-app' directory

    This should create an exe file within the root directory.

4. This may take a quick minute, once it is finished within the projects root directory navigate to a folder titled "calculator-app-win32-64x // calculator-app-linux-64x". From there you can select the exe file to run the app. 

5. If the exe file fails, you can alternatively try to run 'npm start' from the terminal ( <..\calculator-app> npm start ).