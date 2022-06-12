import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    "mode": "production",
    "entry": {
        concept: "./static/js/concept.js",
        map: "./static/js/map.js"
    },
    "output": {
        path: path.resolve(__dirname, "static", "bundles"),
        filename: "[name].bundle.js", 
    }
}