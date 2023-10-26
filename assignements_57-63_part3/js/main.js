function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log('Age Out Of Range');
    } else {
        console.log('Months Example => ' + theAge * 12 + ' Months')
        console.log('Weeks Example => ' + theAge * 52 + ' Weeks')
        console.log('Days Example => ' + theAge * 365 + ' Days')
        console.log('Hours Example => ' + theAge * 8760 + ' Hours')
        console.log('Minutes Example => ' + theAge * 525600 + ' Minutes')
        console.log('Seconds Example => ' + theAge * 31536000 + ' Seconds')
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(10); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months