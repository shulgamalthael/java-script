export const createCalculator = () => {
    let memory = 0;

    function add(num) {
        // console.log(memory += num);
        return memory += num;
    };

    function decrease(num) {
        // console.log(memory -= num);
        memory -= num;
    };

    function reset(num) {
        // console.log(memory = 0);
        memory = 0;
    };

    function getMemo(num) {
        // console.log(memory);
        return memory;
    };

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
};

// const calculator1 = createCalculator();
// calculator1.add(9);
// calculator1.decrease(9);
// calculator1.reset(9);
// calculator1.getMemo(9);