// let keyword


for (let i = 0; i < 10 ; i++) {
   // setTimeout(function() { console.log(i); }, 100 * i);
}


for (let i = 0; i < 10 ; i++) {
    //setTimeout(function() { console.log(i); }, 100 * i);
}

// const keyword
	
// Array Destructuring
 
	let input = [1, 2 , 3];
	let [first, second] = input;
	console.log(first); // outputs 1
	console.log(second); // outputs 2

	[second, first] = [first, second];

	console.log(first); // outputs 2
	console.log(second); // outputs 1


	function f([first, second]: [number, number]) {
	    console.log(first);
	    console.log(second);
	}
	f([1, 2]);


// Object destructuring

	let o = {
	    a: "foo",
	    b: 12,
	    c: "bar"
	};


	let { a, c } = o;

	console.log(a) // foo
	console.log(c) // bar


	let { b, ...passthrough } = o;
	let total = passthrough.c + passthrough.c.length;
	console.log(total); // bar3

// Property renaming
	let { a: newName1, b: newName2 } = o;

	console.log(newName1); // foo
	console.log(newName2); // 12

// Default values
	function keepWholeObject(wholeObject: { a: string, b?: number }) {
    	let { a, b = 1001 } = wholeObject;
    	console.log("a", a);
    	console.log("b", b);
	}
    
    var obj = {a: "cdr"};
	keepWholeObject(obj);

// Function declarations

  // destrcutring also works in function declarations

	function f2({ a, b = 0 } = { a: "" }): void {
	    // ...
	}
	f2({ a: "yes" }); // ok, default b = 0
	f2(); // ok, default to { a: "" }, which then defaults b = 0
	// f({}); // error, 'a' is required if you supply an argument

// Spread

	// spread operator allows to spread an array into another array & an object ino another object

		let myfirst = [1,2];
		let mysecond = [3,4];
		let bothPlus = [0, ...myfirst, ...mysecond, 5];
		console.log(bothPlus); // [0,1,2,3,4,5]

		let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
		let search = { ...defaults, food: "rich" };

		console.log("search", search); // {food: "rich", price: "$$", ambiance: "noisy"}