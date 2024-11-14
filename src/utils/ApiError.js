class ApiError extends Error {
    constructor(
        message = "Something went wrong",
        statusCode = 500,
        error = [],
        stack = ""
    ) {
        super(message);  // Call the parent class (Error) constructor with the message
        this.name = this.constructor.name;  // Set the error name to the class name
        this.statusCode = statusCode;  // Custom status code for HTTP errors
        this.success = false;  // Indicates the request was unsuccessful
        this.errors = error;  // Array of error details, if any
        this.data = null;  // Optional data property, set to null by default
        
        if (stack) {
            this.stack = stack;  // Override the default stack trace if provided
        }

        // Capture stack trace for better debugging, if supported
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
