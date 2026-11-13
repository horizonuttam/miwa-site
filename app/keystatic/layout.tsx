import { notFound } from "next/navigation";
import { keystaticEnabled } from "../../keystatic.config";
import KeystaticApp from "./keystatic";

export const metadata = { title: "Writing portal", robots: { index: false, follow: false } };

export default function Layout() {
  if (!keystaticEnabled) notFound();
  return <KeystaticApp />;
}
