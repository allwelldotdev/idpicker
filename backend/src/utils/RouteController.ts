import { Application, Router, RequestHandler } from "express";
import { MetadataKeys } from "../utils/metadataKeys.js";
import { RouteMetadata } from "../types/RouteMetadata.js";
import "reflect-metadata";

export default class RouteController {
  private metadataKeys: MetadataKeys;

  constructor(metadataKeys: MetadataKeys) {
    this.metadataKeys = metadataKeys;
  }

  register(app: Application | Router, controllers: any[]) {
    controllers.forEach((controller) => {
      const instance = new controller(); // Create controller instance

      // Get all property names (including methods) from prototype
      const prototype = Object.getPrototypeOf(instance);
      const propertyNames = Object.getOwnPropertyNames(prototype);

      propertyNames.forEach((propertyName) => {
        // Check if property is a method
        if (
          typeof prototype[propertyName] !== "function" ||
          propertyName === "constructor"
        )
          return;

        // Read method's routeMetadata
        const routeMetadata: RouteMetadata | undefined = Reflect.getMetadata(
          this.metadataKeys.route,
          prototype, // Use prototype as target for instance methods
          propertyName
        );

        if (routeMetadata) {
          const { method, path } = routeMetadata;

          // Check if method has middleware metadata, then read them
          const middlewares: RequestHandler[] =
            Reflect.getMetadata(
              this.metadataKeys.middleware,
              prototype,
              propertyName
            ) || [];

          // Create function with permanently bound 'this' keyword
          const handler = instance[propertyName].bind(instance);

          // Combine middleware and handler
          const routeHandlers: RequestHandler[] = [...middlewares, handler];

          // Register route with Express
          console.log(
            `Registering route: ${method} "${path}" with ${middlewares.length} middlerware(s) and controller bound to "${instance.constructor.name}.${propertyName}" method.`
          );

          // app[method](path, ...routeHandlers); // Resulted in type error (See fix below)

          // Fix: Cast the dynamically accessed method to a function type
          // that explicitly accepts a rest parameter of RequestHandlers
          // and call the casted methods with the spread argument.
          // This reassures TypeScript that the spread is valid here.
          (
            app[method] as (path: string, ...handlers: RequestHandler[]) => void
          )(path, ...routeHandlers);
        }
      });
    });
  }
}
