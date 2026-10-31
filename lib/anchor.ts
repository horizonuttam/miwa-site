// Turns a heading into a URL-safe id for in-page links, e.g. "Tools and technologies" -> "tools-and-technologies".
export function anchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
