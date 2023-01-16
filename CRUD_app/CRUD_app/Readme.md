# Notes

`getAll` - The getAll method in searchParams is a method that allows you to retrieve all the values associated with a specific key in a search query string. It returns an array of strings containing the values associated with the specified key. For example, if you have a search query string "?name=john&age=30", you can use the getAll method to retrieve the values for "name" and "age" by calling searchParams.getAll("name") and searchParams.getAll("age"). The getAll method is useful when you have multiple values for a single key in the search query string.

`get` - searchParams.get is a method in the URLSearchParams interface in the JavaScript Web API. It can be used to get the value of a particular parameter in the search string (the part of a URL that comes after the ?) of a URL.

Here is an example of how it can be used:
```
const searchString = '?name=john&age=30';
const searchParams = new URLSearchParams(searchString);

console.log(searchParams.get('name')); // prints 'john'
console.log(searchParams.get('age')); // prints '30'
```
Note that searchParams.get returns null if the specified parameter is not found in the search string.
