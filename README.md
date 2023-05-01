# Regular-Classes-Panaverse
Open terminal (cmd) and type tsc --init to create tsconfig.json ,then type tsc in terminal to convert ts into js.

ECMA script module
In the tsconfig.json set module and moduleResolution:

    "module": "nodenext",
    "moduleResolution": "NodeNext", 
    "target": "es2020",     
In the package.json add:

    "type": "module"
    
Inquirer command:

    npm i inquirer

    npm i --save-dev @types/inquirer
then import inquirer from "inquirer" where you want to use.

Chalk command:

    npm install chalk

npm Calculator command:

    npm i shawaal-calculator

Upload project on npm(CLI):

    npm login
    npm publish
    
If u waana update Project:
    Change version of package.json then:
    
    npm update
    npm publish
