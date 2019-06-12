function titleCase (string) {
    let splitString = string.toLowerCase().split(' ');
    
    for (let i = 0; i < splitString.length; i++) {
        // You do not need to check if i is larger than splitString length, as your for does that for you
        // Assign it back to the array
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
    }

    // Directly return the joined string
    return splitString.join(' '); 
}

module.exports = titleCase