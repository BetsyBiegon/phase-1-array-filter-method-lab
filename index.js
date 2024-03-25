// Function to find matching drivers' names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided string
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to match driver names exactly with the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };
  