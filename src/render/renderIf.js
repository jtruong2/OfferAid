renderIf = (condition, content) => {
  if(condition) {
    return content
  } else {
    return null
  }
}

module.exports = renderIf
