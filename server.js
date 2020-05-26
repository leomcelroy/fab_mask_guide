import { Application } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";

const app = new Application();
const port = 3000;
app
  .static("/", "/public")
  .start({ port });

console.log(`server now listening on http://localhost:${port}`);
