//createLoger
// input: undefined
// output: object

const createLogger = () => {
    const records = [];
    return {

        //input: string
        //output: undefined
        warn(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },

        //input: string
        //output: undefined
        error(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },
        
        //input: string
        //output: undefined
        log(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },

        //algo
        //1. check if input -> filter
        //2. return all records
        //3. sort
        getRecords(type) {

            return (type ? records
                .filter(message => message.type === type) : records)
                .sort((mes1, mes2) => {
                    mes1.dateTime = mes2.dateTime;
                })

            // if (type) {
            //     records
            //     .filter(message => message.type === type)
            //     .sort((mes1, mes2) => {
            //         mes1.dateTime = mes2.dateTime;
            //     });
            // } else {
            //    return records
            //    .sort((mes1, mes2) => {
            //     mes1.dateTime = mes2.dateTime;
            // });

        }
    }
};

//testing
// const logger1 = createLogger();
// console.log(logger1);

// logger1.warn('hello');
// logger1.error('shit heppens');
// logger1.error('some error');
// logger1.log('some log message');

// console.log(logger1.getRecords());
// console.log(logger1.getRecords('error'));

// const logger2 = createLoger();
// logger1.log('11111');
// logger2.getRecords();