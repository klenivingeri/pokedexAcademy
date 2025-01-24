export const SearchTextArray = (arr, text) => {

  return arr.findIndex(ar => {
    console.log(ar, text, ar == text)
    return ar == text;
  })
}