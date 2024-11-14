class ApiResponse {
    constructor( message = "Request successful", data = null, errors = []) {
        this.success = statusCode<400;  // Boolean indicating success (true) or failure (false)
        this.message = message;  // Message string to provide feedback
        this.data = data;  // Data payload for successful responses
        this.errors = errors;  // Array of error details if the response contains errors
    }

    // Static method to generate a success response
    static success(message = "Request successful", data = null) {
        return new ApiResponse(true, message, data);
    }

    // Static method to generate an error response
    static error(message = "An error occurred", errors = [], data = null) {
        return new ApiResponse(false, message, data, errors);
    }
}

export { ApiResponse };
