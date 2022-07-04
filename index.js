// Write your solution in this file!
const employee = {
    name: "Freddy",
    streetAddress: "First Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}

const addSam = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}
    delete deleteFromEmployeeByKey.name;

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}