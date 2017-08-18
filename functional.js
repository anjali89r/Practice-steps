
//  function doubler(num){
//     return num*2;
// }
//OR
var doubler = function(num){
    return num*2;
}

function map(arr,callback){
      var myArr = [];
      for (var i = 0; i < arr.length; i++){
          var myNum = callback(arr[i]);
          myArr.push(myNum);

      }
      return myArr;
  }

function filter(arr, callback){
    var myFilterArr = [];
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            myFilterArr.push(arr[i]);
        }
    }
    return myFilterArr;
}


function contains(collection, chechNum){
	for (key in collection){
		if (collection.hasOwnProperty(key)){
			if (collection[key] === chechNum){
				return true;
			}
		}
	}
	return false;
}
//or 
// function contains(collection, userVal){
// 	var keyArr = Object.keys(collection);
// 	console.log(keyArr)
// 	for (var i = 0; i < keyArr.length; i++){
		
// 		if (collection[keyArr[i]] === userVal){
// 			return true;
// 		}
// 	}
// 	return false;
	
// }

function countWords(str){
	var arr = str.split(" ");
	return arr.length;
}
function reduce(arr, initialValue, callback){
  	var acc = initialValue;
  	for (var i = 0; i < arr.length; i++){
  		acc = callback(acc, arr[i]);
  	}
  	return acc;
  }
  var countWordsInReduce = function(acc,currentValue){
	acc = acc + countWords(currentValue);
	return acc;
    //or return acc + countWords(currentValue);
}
//OR
// var countWordsInReduce = function(acc,currentValue){
// 	var arr = currentValue.split(" ");
// 	acc = acc + arr.length;
// 	return acc;
// }
function sum(arr){
	return reduce(arr, 0, function(acc, element){
		return acc + element;
	})
}

var every = function(array, checkerFunc) {
  var everyIterator = function (currentVal, nextVal) {
    return currentVal && checkerFunc(nextVal);
  };

  return reduce(array, true, everyIterator);
};
var any = function(array, checkerFunc) {
  var everyIterator = function (currentVal, nextVal) {
    return currentVal || checkerFunc(nextVal);
  };

  return reduce(array, false, everyIterator);
};