exports.rewrites = [
	{
		"from": "/go",
		"to": "/index.html",
		"method": "GET"
	}, {
		"from": "/go\#one",
		"to": "/index.html#one",
		"method": "GET"
	}, {
		"from": "/go\#two",
		"to": "/index.html\#two",
		"method": "GET"
	}, {
		"from": "/go\#three",
		"to": "/index.html\#three",
		"method": "GET"
	}

]
