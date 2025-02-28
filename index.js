// Write your solution in this file!
const employee = {
  name: "Am mati innit",
  streetAddress: "i live somewhere alright",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
