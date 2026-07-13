import sanitizeHtmlLib from "sanitize-html";

const allowedTags = sanitizeHtmlLib.defaults.allowedTags.concat([
  "img", "h1", "h2", "h3", "h4", "h5", "h6", "figure", "figcaption",
  "video", "source", "iframe", "del", "ins",
]);

const allowedAttributes = {
  ...sanitizeHtmlLib.defaults.allowedAttributes,
  img: ["src", "alt", "width", "height", "loading", "class"],
  a: ["href", "target", "rel", "class"],
  iframe: ["src", "width", "height", "allowfullscreen", "frameborder", "allow"],
  video: ["src", "controls", "width", "height"],
  source: ["src", "type"],
  "*": ["class", "id", "style"],
};

export function sanitizeHtml(html: string): string {
  return sanitizeHtmlLib(html, {
    allowedTags,
    allowedAttributes,
    allowedSchemes: ["http", "https", "mailto"],
  });
}
