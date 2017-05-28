// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// remove zoom
const electron = require('electron')
const webFrame = electron.webFrame;

webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

const java = require('java');
java.classpath.push("./jars/foobar.jar");

// var javaLangSystem = java.import('java.lang.System');
//
// var list1 = java.newInstanceSync("java.util.ArrayList");
// console.log(list1.sizeSync()); // 0
// list1.addSync('item1');
// console.log(list1.sizeSync());

var foobar = java.newInstanceSync("foobar.Foo");

console.log(foobar.foobarSync());
console.log(foobar.foobarparamSync('HELLO NODE JAVA! (:'));
console.log(foobar.writeInFileSync('HELLO NODE JAVA! (:'));
