import "reflect-metadata";
import metadataKeys from "../utils/metadataKeys.js";
import { Methods } from "../types/RouteMetadata.js";
// import { Methods } from "../types/";

const routeBinder = function (method: Methods) {
  return function (path: string) {
    return function (
      target: any,
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) {
      // Store metadata using reflect-metadata
      Reflect.defineMetadata(
        metadataKeys.route,
        { method: method, path },
        target,
        propertyKey
      );
    };
  };
};

// Get method decorator
export const Get = routeBinder(Methods.get);
// Post method decorator
export const Post = routeBinder(Methods.post);
