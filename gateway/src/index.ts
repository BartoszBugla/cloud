import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", (req) => fetch({ url: req.request.url, headers: req.re }))
  .listen(3000);
