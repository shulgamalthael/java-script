const getMessegesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
    .filter(name => !failedStudents.includes(name));

    const massages = passedStudents
    .map(name => 'Good job, ' + name);

    return messages;
};