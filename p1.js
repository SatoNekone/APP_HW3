function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'call'
		
	};

	callback(data);
}

greet(data => {
	console.log('0000000');
	console.log(data);
});

greet(data => {
	console.log('1111111');
	console.log(data.name);
	
});
