export interface RouteMetadata {
  method: Methods;
  path: string;
}

export enum Methods {
  get = "get",
  post = "post",
  put = "put",
  patch = "patch",
  delete = "delete",
  all = "all",
}
