export interface BaseMethod {
  method: string;
}

export interface PatchMethod extends BaseMethod {
  headers: {
    'Content-Type': string;
  };
  body: string;
}
