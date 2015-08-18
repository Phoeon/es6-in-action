function bar(func = x => foo) {
	console.log(arguments)
  let foo = 'inner';
  console.log(func.toString())
  console.log(func(2.2386)); // outer
}
let ccc;
bar(ccc=i=>parseInt(i));