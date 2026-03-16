export function withBase(path: string, baseUrl = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (baseUrl === "/") {
    return normalizedPath;
  }

  const normalizedBase = `/${baseUrl.replace(/^\/+|\/+$/g, "")}`;

  if (normalizedPath === "/") {
    return `${normalizedBase}/`;
  }

  return `${normalizedBase}${normalizedPath}`;
}
