function fibs(n) {
	arr = [];
	for (let i = 0; i < n; i++) {
		if (i == 0) arr.push(0);
		else if (i == 1 || i == 2) arr.push(1);
		else arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
}

function fibsRec(n) {
	if (n == 1) return [0, 1];
	let arr = fibsRec(n - 1);
	return arr.concat(arr[n - 1] + arr[n - 2]);
}
