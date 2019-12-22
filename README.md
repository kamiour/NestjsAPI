"# NestjsAPI"

- POST request for creating a product can be tested by sending this JSON body via Postman, for example, to localhost:3001/products:
{
	"title": "Test title",
	"description": "Test description",
	"price": 29.99
}

- GET request for checking ALL the created products can be tested by sending a GET request to localhost:3001/products

- GET request for checking ANY SINGLE created product can be tested by sending a GET request to localhost:3001/products/id, where you can take the ID of any product you created before

- PATCH request to update a product can be tested by sending a PATCH request to localhost:3001/products/id with the body of the updated product, for example:
{
	"title": "Patched title"
}

- DELETE request to remove a single product can be tested by sending a DELETE request to localhost:3001/products/id