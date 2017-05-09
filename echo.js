function print(arr1, arr2) {
	console.log(arr1);
	console.log(arr2);

	var is_same = (arr1.length == arr2.length) && arr1.every(function(element, index, arr2) {
	    return element == arr2[index];
	});

	return is_same;
}

exports.print = print;