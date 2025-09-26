function merge(arr1, arr2) {
	let i = 0,
		j = 0;
	mergedArr = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else {
			mergedArr.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j++;
	}
	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length == 1) return arr;
	const mid = Math.ceil(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([105, 79, 100, 110]));
