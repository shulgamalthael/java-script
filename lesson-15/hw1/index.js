export createCalculator = () => {
    function add(num) {
        console.log(memory += num);
        return memory += num;
    }

    function decrease(num) {
        console.log(memory -= num);
        return memory -= num;
    }

    function reset(num) {
        console.log(memory = 0);
        return memory;
    }

    fucntion getMemo(num) {
        console.log(memory);
        return memory;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
};