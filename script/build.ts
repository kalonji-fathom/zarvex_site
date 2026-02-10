import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, "../client");
const outDir = path.join(__dirname, "../docs");

async function build() {
  try {
    // Remove existing docs directory
    await fs.remove(outDir);
    console.log("Cleaned docs directory");

    // Copy client files to docs
    await fs.ensureDir(outDir);
    await fs.copy(srcDir, outDir);
    console.log("Successfully built static site to /docs");
  } catch (err) {
    console.error("Error during build:", err);
    process.exit(1);
  }
}

build();
