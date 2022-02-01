/* Your Code Here */
function createEmployeeRecord(arr) {
    const employeeObj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObj
}

function createEmployeeRecords(arr) {
    //array of arrays as an argument
    //returns an array of Objs
    //converts each nested Array into an employee record
    //using createEmployeeRecord and accumulates(adds) to a
    //new array
    return arr.map(arr2 => createEmployeeRecord(arr2))
}

function createTimeInEvent(dateStamp) {
    const dateSplit = dateStamp.split(' ')
    const newTimeIn = {
        type: 'TimeIn',
        hour: parseInt(dateSplit[1]),
        date: dateSplit[0]
    }
    this.timeInEvents.push(newTimeIn)
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateSplit = dateStamp.split(' ')
    const newTimeOut = {
        type: 'TimeOut',
        hour: parseInt(dateSplit[1]),
        date: dateSplit[0]
    }
    this.timeOutEvents.push(newTimeOut)
    return this
}

function hoursWorkedOnDate(endDate) {
   let timeIn = this.timeInEvents.find(e => e.date === endDate)
   let timeOut = this.timeOutEvents.find(e => e.date === endDate)
   return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
   return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArr, firstName) {
    return srcArr.find(thisName => thisName.firstName === firstName)
}

function calculatePayroll(records) {
    return records.reduce((initValue, currentValue) => initValue + allWagesFor.call(currentValue),0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

