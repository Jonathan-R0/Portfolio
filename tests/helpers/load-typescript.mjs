import { readFileSync } from "node:fs";
import ts from "typescript";

// Load dependency-free TypeScript helpers without generating build artifacts.
// This keeps tests compatible with Node 20 as well as newer Node releases.
export async function loadTypeScript(url) {
  const source = readFileSync(url, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  );
}
