function getSection() {
    const span = document.querySelector(`span[data-number=${num}]`);
    const getTag = findNumberSec.closest('div');
    const getDataSection = getTag.getAttribute('data-section');

    return getDataSection;
};

export { getDataSection };