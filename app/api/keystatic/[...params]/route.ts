import { makeRouteHandler } from "@keystatic/next/route-handler";
import config, { keystaticEnabled } from "../../../../keystatic.config";

const handler = makeRouteHandler({ config });
const notFound = async () => new Response("Not Found", { status: 404 });

export const GET = keystaticEnabled ? handler.GET : notFound;
export const POST = keystaticEnabled ? handler.POST : notFound;
