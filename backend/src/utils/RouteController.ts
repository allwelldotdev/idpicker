import { Application, Router, RequestHandler } from "express";
import { MetadataKeys, RouteMetadata } from "../types/routeTypes.js";
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
          const middlerware: RequestHandler[] =
            Reflect.getMetadata(
              this.metadataKeys.middleware,
              prototype,
              propertyName
            ) || [];

          // Create function with permanently bound 'this' keyword
          const handler = instance[propertyName].bind(instance);

          // Combine middleware and handler
          const routeHandlers: RequestHandler[] = [...middlerware, handler];

          // Register route with Express
          console.log(
            `Registering route: ${method} "${path}" with ${middlerware.length} middlerware(s) and controller bound to "${instance.constructor.name}.${propertyName}" method.`
          );
          (app as any)[method.toLowerCase()](path, ...routeHandlers);
        }
      });
    });
  }
}
