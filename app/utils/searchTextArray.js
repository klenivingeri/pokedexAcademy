export const SearchTextArray = (arr, text) => {

  return arr.findIndex(ar => {
    return ar == text;
  })
}