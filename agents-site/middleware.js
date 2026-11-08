// Content negotiation: agents asking for text/markdown get the markdown twin.
export const config = { matcher: ["/", "/issues", "/issues/"] };

export default async function middleware(req) {
  if (!(req.headers.get("accept") || "").includes("text/markdown")) return;
  const url = new URL(req.url);
  const target = url.pathname === "/" ? "/agents.md" : "/llms.txt";
  const r = await fetch(new URL(target, url));
  return new Response(r.body, {
    status: r.status,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept",
      "access-control-allow-origin": "*",
    },
  });
}
