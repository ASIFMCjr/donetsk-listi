const fetchHandler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const indexRoutes = ['/','/catalog','/about','/contacts'];
  const catalogRegex = /\/catalog\/product-(1[0-1]|[1-9])\b/g;
  if (url.pathname === "/catalog.pdf") return new Response(Bun.file("catalog.pdf"));
  if (url.pathname.includes("/assets/")) return new Response(Bun.file("." + url.pathname))
  if (indexRoutes.includes(url.pathname) || catalogRegex.test(url.pathname)) return new Response(Bun.file("index.html"));
  return new Response("404!");
}

const server = Bun.serve({
  hostname: "0.0.0.0",
  port: 3000,
  fetch: fetchHandler,
});
