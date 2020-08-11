// defer(func, ms) => Function

function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
};

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi , I am ${this.name}!`);
    }
};

// sayHi();

const deferredSayHi = defer(user.sayHi, 1000);

deferredSayHi.call( {name: 'Bob'} );

export { defer };