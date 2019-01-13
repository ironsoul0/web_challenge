const htmlDecode = input => {
  const e = document.createElement("div")
  e.innerHTML = input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
}

const checkEntrance = (array, target) => {
  for (const object of array) {
    if (JSON.stringify(object) === JSON.stringify(target)) {
      return true
    }
  }
  return false
}

const parseForKeywords = (keywordString) => {
  const parsingString = keywordString + ','
  let keywords = []
  let currentKeyword = ''
  for (let i = 0; i < parsingString.length; i++) {
    if (parsingString[i] === ',') {
      keywords.push(currentKeyword)
      i++
      currentKeyword = ''
    } else {
      currentKeyword += parsingString[i]
    }
  }
  return keywords
}

const API_URL = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=500'

export { 
  htmlDecode, 
  checkEntrance, 
  parseForKeywords,
  API_URL 
}