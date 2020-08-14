function getSection() {
    const span = document.querySelector(`span[data-number = "${num}`);
    const getTeg = findNumberSec.closest('div');
    const getDataSection = getTag.getAttribute('data-section');

    return getDataSection;
};

export { getSection };