export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

export class HTTPError extends Error {
  public readonly statusCode: number;
  public readonly code: number;
  public readonly extra: JSONValue | undefined;
  constructor(statusCode: number, message: string, code: number, extra: JSONValue | undefined = undefined) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'HTTPError';
    this.code = code;
    this.extra = extra;
    // this.cause = undefined;
  }

  dto() {
    return {
      code: this.code,
      message: this.message,
      extra: this.extra,
    };
  }
}

export class NotFoundError extends HTTPError {
  constructor() {
    super(404, 'Not found', 404);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends HTTPError {
  constructor() {
    super(401, 'Unauthorized', 401);
    this.name = 'UnauthorizedError';
  }
}
