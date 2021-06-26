import { Response } from 'express';

/**
 * custom Error constructor which extends the JavaScript Error constructor.
 */
class ErrorHandler extends Error {
   statusCode: Number;
   constructor(statusCode: Number = 500, message: string) {
      super();
      this.statusCode = statusCode;
      this.message = message;
   }
}

/**
 * a function for returning a formatted error response to the user.
 * 
 * @param {*} err 
 * @param {*} res 
 */
const handleError = (err, res: Response) => {
   const { statusCode = 500, message = "no message" } = err;
   res.status(statusCode).json({
      success: false,
      statusCode,
      message
   });
};

export { ErrorHandler, handleError };
