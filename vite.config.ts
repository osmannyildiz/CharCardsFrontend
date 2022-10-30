import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from "vite-tsconfig-paths";

// const BASE_URL = "/path/to/dist/"
const BASE_URL = "/";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), EnvironmentPlugin({ BASE_URL })],
	base: BASE_URL,
});
