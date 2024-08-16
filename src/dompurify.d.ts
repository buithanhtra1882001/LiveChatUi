declare module "dompurify" {
  interface DOMPurifyI {
    sanitize(source: string | Node, config?: Config): string;
    addHook(
      hook: "beforeSanitizeAttributes" | "afterSanitizeAttributes",
      cb: (
        node: Element,
        data?: { attrName: string; attrValue: string }
      ) => void
    ): void;
  }

  const DOMPurify: DOMPurifyI;
  export default DOMPurify;
}
