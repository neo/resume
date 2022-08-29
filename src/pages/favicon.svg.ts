import type { EndpointOutput } from "astro";

const pathL = path`M 2,2
V 12
Q 2,14 4,14
H 9
V 12
H 5
Q 4,12 4,11
V 2
Z`;

const pathI = path`M 11,8
V 14
H 13
V 8
Z`;

const svg = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-color-scheme: dark) {
      rect { fill: whitesmoke; }
      g { fill: #222; }
    }
  </style>
  <rect width="16" height="16" rx="3" fill="#222" />
  <g fill="ghostwhite">
    <path d="${pathL}" />
    <path d="${pathI}" />
    <circle cx="12" cy="4" r="2" />
  </g>
</svg>`;

export function get(): EndpointOutput {
  return { body: svg };
}

function path(strings: TemplateStringsArray): string {
  return strings
    .join("")
    .split("\n")
    .filter((item) => !item.startsWith("// "))
    .map((item) => item.replace(" ", ""))
    .join("");
}
