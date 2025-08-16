import React, { useEffect } from "react";
type Props = {
  url: string;
  noindex?: boolean;
};
export default function Canonical({ url, noindex = false }: Props) {
  useEffect(() => {
    // canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // robots meta
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (noindex) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", "noindex,follow");
    } else {
      if (meta) meta.setAttribute("content", "index,follow");
    }

    // Keep elements in head on unmount (stable for SPA navigation)
    return () => {
      /* noop */
    };
  }, [url, noindex]);

  return null;
}