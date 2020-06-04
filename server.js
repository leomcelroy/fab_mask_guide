import { Application } from "abc";

const app = new Application();
const port = 3000;
app
  .static("/", "/")
  .start({ port });

console.log(`server listening on http://localhost:${port}`);
