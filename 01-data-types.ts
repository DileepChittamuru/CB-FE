// Boolean
	let isDone: boolean = true;
	console.log("boolean=>before", isDone);
	isDone = false;
	console.log("boolean=>After", isDone);

// Number
	let hex: number = 20;
	console.log("number==>Before", hex);
	hex = 30;
	console.log("number==>After", hex);

// String
	let color: string = "green";
	console.log("string==>Before", color);
	color = "red";
	console.log("string==>after", color);

// Array
	let arr: number[] = [1,2,3,4];
	console.log("array==>", arr, arr[9]);

// Tuple

	let tple: [number, string] = [23, 'cdr'];

	console.log(tple[1]);


// Enum

	enum Color {Red, Green, Blue}

	let c: Color = Color.Red;

	console.log("enum==>", c);

	let colorName: string = Color[2];

	console.log("enum==>", colorName);

// Any

	let notSure: any = false;
	console.log("boolean any", notSure);
	notSure = "cdr";
	console.log("string any", notSure);
	notSure = 1;
	console.log("number any", notSure);
    
	let arryAny: any[] = [1, "true", false];
	console.log("arrAny", arryAny);

// Type assertion

	let str: any= "cdr is a goo dboyd";
	let strLength: number = (<string>str).length;

	console.log("strLength", strLength);
