export default function upperCase (text) {
  if(text.includes("-")) {
    text = text.split("-");

    return text.map(word => {
      if (text.length < 5) word = word.toUpperCase()
      else word = word.charAt(0).toUpperCase() + word.slice(1)

      return (word.charAt(0).toUpperCase() + word.slice(1) + " ")
    })
  }
  if (text.length < 5) return text.toUpperCase()
  else return text.charAt(0).toUpperCase() + text.slice(1)
}