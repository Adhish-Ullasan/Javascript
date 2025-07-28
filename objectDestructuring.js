const employee = {
    ename : 'Miles Halter',
    place : 'Alaska',
    age : 22,
    login : '9am',
    logout : '12pm'
}

// console.log(employee.name)
// console.log(employee.logout)


let {ename :  employeename,login,logout,place,salary=250000} = employee  //ename renamed to employeename
console.log( employeename,login,logout,place,salary)