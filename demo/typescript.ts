import { ReactHTML, ComponentType } from "react";

export type HTMLTags = keyof ReactHTML;

type HTMLTransform = {
  [tag in HTMLTags]: HTMLTags | ComponentType;
};

interface Options {
  transform: Partial<HTMLTransform>,
  preserveAttributes: Array<String | RegExp>,
  dangerouslySetChildren: HTMLTags[]
};

export default function convert(html: string, options: Partial<Options>) {
  const transform = options.transform || {};
  console.log("input", html);
  return transform;
}
