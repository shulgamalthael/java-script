function getTitle() {
    return title = document.querySelector('.title').textContent;
}

function getDescription() {
    return description = document.querySelector('.about').innerText;
}

function getPlans() {
    return plans = document.querySelector('.plans').innerHTML;
}

function goal() {
    return goal = document.querySelector('.goal').outerHTML;
}

export {getTitle, getDescription, getPlans, goal};