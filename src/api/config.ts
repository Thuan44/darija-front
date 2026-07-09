function getApiBaseUrl(): string {
  const url = import.meta.env.VITE_API_URL;

  if (!url) {
    throw new Error("VITE_API_URL is not defined.");
  }

  return url.startsWith("http") ? url : `http://${url}`;
}

export const apiConfig = {
  baseUrl: getApiBaseUrl(),
} as const;
