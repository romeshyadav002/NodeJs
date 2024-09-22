* Difference between JavaScript Object & JSON Object

1. `JavaScript Object`	
 - Definition: A JavaScript object is a data structure used in JavaScript to store key-value pairs. It can contain functions (methods), variables, and other objects.
 - Structure: JavaScript objects are written in the form of key-value pairs, where keys can be strings or symbols, and values can be any valid JavaScript data types (numbers, strings, arrays, objects, functions, etc.).
 - Usage: JavaScript objects are used within the JavaScript environment for programming purposes.
 
 - Can contain functions, methods, and undefined values.
 - Keys do not require double quotes (though they can be quoted).
 - Used in actual JavaScript programming and memory.
 - Is a live object that can be manipulated.

2. `JSON Object`
 - Definition: JSON is a lightweight data interchange format used to represent data as text. It is language-independent but based on the JavaScript object syntax.
 - Structure: JSON is a string representation of a data structure, and it is always in double-quoted key-value pairs. Keys and string values must be wrapped in double quotes ("), and it cannot contain functions or undefined values.
 - Usage: JSON is primarily used for data transfer between a server and a client (e.g., APIs), and for storing data in files or databases.

 - Cannot contain functions, methods, or undefined values.
 - Only supports basic data types: strings, numbers, arrays, objects, booleans, and null.
 - Keys and string values must be double-quoted.
 - Used for data transmission as a text format.
 - Is a string that needs to be parsed into an object.