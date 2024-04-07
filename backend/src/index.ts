import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Bun!"));

const BASEPATH = "/api";
const PORT = 4000;

app.all(BASEPATH, (c) => {
  return fetch(`http://localhost:${PORT}`, {
    method: c.method,
    headers: c.headers,
    body: c.body,
  });
});

export default app;
