import $ from 'jquery';

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
    setTimeout(resolve, 5000);
}).then(() => {
    alert("The promise resolved!");
})