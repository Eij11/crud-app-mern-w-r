# TERMINOLOGIES

### `async` and `await`

- **`async`**: This keyword is used to declare an asynchronous function. When a function is declared with `async`, it means that it will return a promise and can use the `await` keyword inside it.
- **`await`**: This keyword is used to pause the execution of an `async` function until a promise is resolved. It makes asynchronous code look and behave more like synchronous code, which can make it easier to read and understand.

### `req` and `res`

- **`req` (Request)**: This object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
- **`res` (Response)**: This object represents the HTTP response that an Express app sends when it gets an HTTP request.

### HTTP Methods: `GET` and `POST`

- **`GET`**: This method is used to request data from a specified resource. In your code, `app.get("/", (req, res) => { ... })` handles GET requests to the root URL.
- **`POST`**: This method is used to send data to a server to create/update a resource. In your code, `app.post("/api/products", async (req, res) => { ... })` handles POST requests to the `/api/products` endpoint.

### HTTP Status Codes: `200` and `500`

- **`200 OK`**: This status code indicates that the request has succeeded. In your code, `res.status(200).json(product)` sends a 200 status code along with the created product data when the product is successfully created.
- **`500 Internal Server Error`**: This status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. In your code, `res.status(500).json({ message: error.message })` sends a 500 status code along with an error message if something goes wrong during the product creation process.

# HTTP status codes

- are grouped into five classes, each represented by a range of numbers:

### `Informational responses (100–199)`:

- These codes indicate that the request was received and understood, and the client should continue with the request or ignore it if already finished.

### `Successful responses (200–299)`:

- These codes indicate that the request was successfully received, understood, and accepted.

### `Redirection messages (300–399)`:

- These codes indicate that further action needs to be taken by the client to complete the request.

### `Client error responses (400–499)`:

- These codes indicate that the request contains bad syntax or cannot be fulfilled.

### `Server error responses (500–599)`:

- These codes indicate that the server failed to fulfill a valid request.

### Informational Responses (100–199)

- **100 Continue**: The server has received the request headers, and the client should proceed to send the request body.
- **101 Switching Protocols**: The requester has asked the server to switch protocols, and the server has agreed to do so.

### Successful Responses (200–299)

- **200 OK**: The request has succeeded.
- **201 Created**: The request has succeeded, and a new resource has been created as a result.
- **202 Accepted**: The request has been received but not yet acted upon.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

### Redirection Messages (300–399)

- **301 Moved Permanently**: The resource has been moved to a new URL permanently.
- **302 Found**: The resource has been found at a different URL temporarily.
- **304 Not Modified**: The resource has not been modified since the last request.

### Client Error Responses (400–499)

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server can not find the requested resource.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.

### Server Error Responses (500–599)

- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to being overloaded or down for maintenance.
- **504 Gateway Timeout**: The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.

# FILE PATH

`./ `→ Same directory.

`../ `→ Move up one directory.

`.../ `→ Invalid, not used in JavaScript imports.
