const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let matches = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return matches
}

function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(name => name.startsWith(string))
    return matches 
}

function matchName(drivers, name) {
    return drivers.filter(function(driver){
        return driver.name === name
    })
}