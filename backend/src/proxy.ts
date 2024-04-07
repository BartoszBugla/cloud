import bun from "bun";

export const proxy = async (url: string, req: Request) => {
  return fetch(url, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });
};
