import $ from 'jquery';
import * as windowTest from './test.js';

function test(testObj) {
    return () => {
        let $body = $('body');
        $body.append(`<p>${testObj.getMessage()}</p>`);
    };
}

class Test {
    constructor () {
        this.message = "Hello world.";
    }

    getMessage () {
        return this.message;
    }
}

setInterval(test(new Test()), 1000);

var p = new Promise((resolve) => {
    setTimeout(resolve, 1000);
}).then(function myFn () {
    console.log(`jQuery imported version: ${$.fn.jquery}`);
    console.log(`jQuery <script> version: ${window.$.fn.jquery}`);
    windowTest.duckTheWindow();
    console.log(`index.js -- window.duck = ${window.duck}`);
})