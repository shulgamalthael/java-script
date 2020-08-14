function getTitle() {
    const title = document.querySelector('title').textContent;
}

function getDescription() {
    const description = document.querySelector('about').innerText;
}

function getPlans() {
    const plans = document.querySelector('plans').innerHTML;
}

function goal() {
    const goal = document.querySelector('goal').outerHTML;
}

export {getTitle, getDescription, getPlans, goal};