import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "test-comp",
  outputTargets: [
    {
      type: "dist", esmLoaderPath: '../loader'
    },
    { type: "www", dir: "./build", serviceWorker: null }
  ],
  plugins: [sass()],
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  }
};
