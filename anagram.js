/**
 * Anagram Sorter without ES6 Syntax
 * @calvinalx
 */

var dict = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"]
var anagrams = []

// Sort the word and put them into object to sort by key
var sortedDict = {}
for (i in dict) {
  var word = bubbleSort(dict[i].split(""))
  sortedDict[word.join("")] += "," + dict[i]
}

// Transform the object into array
for (key in sortedDict) {
  anagrams.push(sortedDict[key].split(",").splice(1))
}

// Print the result
console.log(anagrams)

// Utility: Bubble sort
function bubbleSort(arr) {
  var done = false
  while (!done) {
    done = true
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false
        var tmp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}
