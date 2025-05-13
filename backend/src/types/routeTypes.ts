export interface RouteMetadata {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
}

export interface MetadataKeys {
  route: Symbol;
  middleware?: Symbol;
  // Add other metadata keys here if needed, e.g. (validation, parameter mapping etc.)
}
