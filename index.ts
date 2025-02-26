const fetchHandler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const indexRoutes = ['/','/catalog','/about','/contacts'];
  if (url.pathname === "/catalog.pdf") return new Response(Bun.file("catalog.pdf"));
  if (url.pathname.includes("/assets/")) return new Response(Bun.file("." + url.pathname))
  if (indexRoutes.includes(url.pathname)) return new Response(Bun.file("index.html"));
  return new Response("404!");
}

const server = Bun.serve({
  hostname: "0.0.0.0",
  port: 3000,
  fetch: fetchHandler,
});
