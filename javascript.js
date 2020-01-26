$(()=>{
	console.log('v');
	
	/*
	// sync:
	$('#theButton').click(()=>{
		const file = $('#theFile')[0].files[0];
		if(!file)return;
		const reader = new FileReader();
		reader.onload=()=>{
			const text = reader.result;
			console.log(text);
			$('#theText').val(text);
		};
		reader.onerror=()=>{
			console.log(reader.error);
		};
		reader.readAsText(file);
	});
	*/
	
	// async:
	const readAsync=(file)=>new Promise((r, q)=>{
		const reader = new FileReader();
		reader.onload=()=>{
			r(reader.result);
		};
		reader.onerror=()=>{
			console.log(reader.error);
			q();
		};
		reader.readAsText(file);
	});
	
	$('#theButton').click(async()=>{
		const file = $('#theFile')[0].files[0];
		if(!file)return;
		const text = await readAsync(file);
		console.log(text);
		$('#theText').val(text);
	});
});










