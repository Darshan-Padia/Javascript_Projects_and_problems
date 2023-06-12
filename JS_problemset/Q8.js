const chkLeapYear = (yr) => {
    if (yr % 400 == 0 || (yr % 4 ==0 && yr % 100 != 0) ) {
        return true;
    }
    return false;
}

console.log( chkLeapYear(2400) );