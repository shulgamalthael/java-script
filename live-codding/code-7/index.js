const getCustomersList = (obj) => {
    Object.defineProperties(obj)
        .map(el => ({ ...el[1], id el[0]}));
}