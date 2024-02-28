import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
  ssr: {
    noExternal: ["react-dropzone"],
  },
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()],
});
