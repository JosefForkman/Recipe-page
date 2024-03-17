import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import purge from '@erbelion/vite-plugin-laravel-purgecss'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        purge({
            paths: [
                "src/App.jsx",
                "index.html",
            ],
        }),
    ],
});
