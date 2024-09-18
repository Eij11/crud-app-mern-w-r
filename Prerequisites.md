## Shorcuts

https://youtu.be/_7UQPve99r4?si=KCCGt43ZqDAXfflu

Go to folder that you want to open in vs code
type cmd in the file path

> code .

ctrl + ` to open terminal in vscode

# NODE JS, EXPRESS, MONGO

## SETUP

`change directory`

- cd SIMPLE-CRUD-APP

`npm init - y`

- makes a package.json
- "main": "index.js", || inside the package.json

`index.js`

- create a file; brain of the server
- to run: node index.js

`"serve": "node index.js"`

- inside scripts{} in package.json
- kind of like a shorcut command in running the index.js
- `npm run serve`

`goto: https://www.npmjs.com/`

- search: express
- be used to build the node API server
- `npm i express`

`dl one: insomnia, postman, thunder client`

- tools to test api

`dl: git bash`

- cmd: git --version
- .`gitignore: node_modules so that it wont be push in the repo

`npm i nodemon -D`

- when you try to make changes, you need to turn off the server
- nodemon helps to change it w/o turning it off

  ` "devDependencies": {
"nodemon": "^3.1.4"
}`

- inside scripts{ "dev": "nodemon index.js"
  }

## SETUP MONGO DB

`login via google`: eljontangalin123@gmail.com

`New Project`

- Name
- Permissions - project owner
- Create Project
- Always save username and password for connection string
- `username`: eljontangalin123
- `password`: AJYR6Kl4oMf0of9W
- goto: security> quickstart > add ip: 0.0.0.0/0 anyone
- goto: Database> click Connect to your db> drivers
- NOTE: its different for every cluster
- copy the one inside: `npm install mongodb`
- the <password> - aaabbbccc123
- copy connection string: mongodb+srv://eljontangalin123:<db_password>@backend.igyzi.mongodb.net/?retryWrites=true&w=majority&appName=Backend
- `dl in npmjs: npm i mongoose` - to access mongo db
- `index.js: const mongoose = require('mongoose');`

### MONGO ATLAS CONNECTION ERROR SOLUTION

1. Check DNS Settings

   Since nslookup timed out, there might be an issue with your DNS settings. Try switching to a public DNS server like Google’s or Cloudflare’s:

For Windows:

- Open the Control Panel.
- Go to Network and Sharing Center.
- Click on Change adapter settings.
- Right-click on your network connection and select Properties.
- Select Internet Protocol Version 4 (TCP/IPv4) and click Properties.
- Select Use the following DNS server addresses and enter:
- Preferred DNS server: 8.8.8.8 (Google)
- Alternate DNS server: 8.8.4.4 (Google)
- Click OK to save the changes.

## `GITHUB`

`make sure you're inside the folder where everything is located`

### `or create a new repository on the command line`

echo "# crud-app-mern-w-r" >> README.md

git init - initiliazing

git add . - adding everything

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/Eij11/crud-app-mern-w-r.git

git push -u origin main

### `or push an existing repository from the command line`

git remote add origin https://github.com/Eij11/crud-app-mern-w-r.git

git branch -M main

git push -u origin main

testttt git vscode
