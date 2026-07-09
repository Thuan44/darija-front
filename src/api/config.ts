function getApiBaseUrl(): string {
  const url = import.meta.env.VITE_API_URL;

  if (!url) {
    throw new Error("VITE_API_URL is not defined.");
  }

  const base = url.startsWith("http") ? url : `http://${url}`;
  return `${base.replace(/\/$/, "")}/api`;
}

export const apiConfig = {
  baseUrl: getApiBaseUrl(),
} as const;
