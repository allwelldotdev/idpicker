import "reflect-metadata";
import { RouteMetadataKey } from "../utils/metadata.js";

// Get method decorator
export function Get(path: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    // Store metadata using reflect-metadata
    Reflect.defineMetadata(
      RouteMetadataKey,
      { method: "GET", path },
      target,
      propertyKey
    );
  };
}

// Post method decorator
export function Post(path: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    // Store metadata using reflect-metadata
    Reflect.defineMetadata(
      RouteMetadataKey,
      { method: "POST", path },
      target,
      propertyKey
    );
  };
}
