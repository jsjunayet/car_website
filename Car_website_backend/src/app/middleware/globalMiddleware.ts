/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { TErrorSource, TGenericError } from '../interface/error.interface';
import AppErrors from '../errors/AppErrors';
import { ZodError } from 'zod';
import { ZodErrors } from '../errors/ZodErrors';
import { DuplicateError } from '../errors/DuplicateError';

export const globalMiddleWare = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let stack: string | undefined = '';
  let message = 'Something is Wrong!';
  let errorsource: TErrorSource = [
    {
      path: '',
      message: 'Something is Wrong!',
    },
  ];
  if (error instanceof ZodError) {
    const semplifiedError = ZodErrors(error);
    statusCode = semplifiedError.statusCode;
    message = semplifiedError.message;
    errorsource = semplifiedError.errorsource;
    stack = error.stack;
  } else if (error.code === 11000) {
    const semplifyError: TGenericError = DuplicateError(error);
    statusCode = semplifyError?.statusCode;
    message = semplifyError?.message;
    errorsource = semplifyError?.errorSource;
    stack = error.stack;
  } else if (error instanceof AppErrors) {
    statusCode = error.statusCode;
    message = error.message;
    errorsource = [
      {
        path: '',
        message: error.message,
      },
    ];
    stack = error.stack;
  } else if (error instanceof Error) {
    message = error.message;
    errorsource = [
      {
        path: '',
        message: error.message,
      },
    ];
    stack = error.stack;
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    error: errorsource,
    stack: stack,
  });
};
