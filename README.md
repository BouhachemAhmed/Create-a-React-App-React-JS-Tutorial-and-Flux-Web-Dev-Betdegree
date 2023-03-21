"# react-skeleton" 
1 - install npm package
npm init
2 - install browserify package
npm install -g browserify
3 - to put babelify in our package.json
npm install - save babelify
4 - another package watchify it's a server whish let us keep on tracking
npm install --save watchify
5 - babel-preset-react
npm install --save babel-preset-react
6 - react
npm install --save react
7 - react-don
npm install --save react-dom
####

8 - after some code to so you compile your code you need to put this in src/package.json in the "script" tag

"start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js"

###
9 - to compile you use ur terminal typpe
npm start


for email validation package :
npm install email-validator

to install fetch 
npm install whatwg-fetch --save

to install reflux
npm install reflux --save

install react-rooter
npm i react-router --save
