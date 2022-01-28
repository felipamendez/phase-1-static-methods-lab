class Formatter {
  static capitalize(str) {
    let length = str.length
    let capitalizeString = str[0].toUpperCase() + str.slice(1,length)
    return capitalizeString
  }

  static sanitize(str) {
    return str.replace(/[&\/\\#,+()^@$~%.":*?!<>{}]/g, '')
  }

  static titleize(str) {
     return str.toLowerCase().split(" ").map(word => {
     return  (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(' ')
    //if contains some words, to lower case 
    //filter words, lower case them, add them back in
    // if (str.includes('the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from')) {

    // }

    //always capitalize first word capitalize at end ez
  }
}

const str = Formatter.capitalize(alligator)
str;

// const str2 = Formatter.titleize(felipa)
// str2;