## Two Pointers
- Brute force -> O(n2)
```

// Naive solution to find if there is a
// pair in A[0..N-1] with given sum.

function isPairSum(A, N, X)
{
		for (var i = 0; i < N-1; i++)
		{
			for (var j = i+1; j < N; j++)
			{
				// as equal i and j means same element
				if (i == j)
					continue;

				// pair exists
				if (A[i] + A[j] == X)
					return 1;

				// as the array is sorted
				if (A[i] + A[j] > X)
					break;
			}
		}

		// No pair found with given sum.
		return 0;
}
	
		var arr=[ 3, 5, 9, 2, 8, 10, 11 ];
		
		// value to search
		var val = 17;
	
		// size of the array
		var arrSize = 7;
	
		// Function call
		document.write(isPairSum(arr, arrSize, val));
```
- Actual 2 pointers
```
// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.
function isPairSum(A, N, X)
{

	// represents first pointer
	var i = 0;

	// represents second pointer
	var j = N - 1;

	while (i < j) {

		// If we find a pair
		if (A[i] + A[j] == X)
			return true;

		// If sum of elements at current
		// pointers is less, we move towards
		// higher values by doing i++
		else if (A[i] + A[j] < X)
			i++;

		// If sum of elements at current
		// pointers is more, we move towards
		// lower values by doing j--
		else
			j--;
	}
	return false;
}

// Driver code

	// array declaration
	var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
	
	// value to search
	var val = 17;
	
	// size of the array
	var arrSize =7;
	
	// Function call
	document.write(isPairSum(arr, arrSize, val));
	
	// This Code is Contributed by Harshit Srivastava
```
## Quick Sort
https://www.geeksforgeeks.org/quick-sort/
https://www.doabledanny.com/quick-sort-in-javascript
```function QuicklySort(N, arr){
    let bag = ""
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                // var temp = arr[j];
                // arr[j] = arr[i];
                // arr[i] = temp;
                swap(arr,i, j)
            }
        }
        bag += arr[i] + " "
    }
    console.log(bag)    
}

function swap(arr,i, j){
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    // console.log(arr)
}
```
## Bubble Sort
https://www.geeksforgeeks.org/bubble-sort/
```
function solve(N,arr){
    
    var done = false;
    
    while (!done) {
        done = true;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }

    console.log(arr.join(" "))
}
```
## Selection Sort
https://www.geeksforgeeks.org/selection-sort/
```
// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

function printArray( arr, size)
{
	var i;
	for (i = 0; i < size; i++)
		document.write(arr[i] + " ");
	document.write(" <br>");
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
	selectionSort(arr, n);
	document.write("Sorted array: <br>");
	printArray(arr, n);

```
## Merge Sort
https://www.geeksforgeeks.org/merge-sort/
```
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


function result(arr) {
    var res = mergeSort(arr);
    console.log(res.join(" "));
}
```
## Recursion
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
https://developer.mozilla.org/en-US/docs/Glossary/Recursion
```
Input - 5
Outout - 120
```
```
function numFactorial(num){
   
  if(num == 0 || num == 1){
      
      return 1
  }
  else{
      
      return num * numFactorial(num - 1)
  }

}
```
## Detect Palindrome
```
input - 1221
output - Yes
```
```
function Palindrome(num){
    let bag = num
    let z = 0;
    while(num != 0){
        var rem = num % 10;
        z = z * 10 + rem;
        num = Math.floor(num / 10)
    }
    // console.log(z)
    if(z == bag){
        console.log("Yes");
    }
    else{
        console.log("No")
    }
}
```
