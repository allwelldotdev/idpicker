export interface MetadataKeys {
  route: Symbol;
  middleware?: Symbol;
  // Add other metadata keys here if needed, e.g. (validation, parameter mapping etc.)
}

const metadataKeys: MetadataKeys = {
  route: Symbol("route"),
  middleware: Symbol("middleware"),
};

export default metadataKeys;
