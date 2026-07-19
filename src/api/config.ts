function formatApiBaseUrl(url: string): string {
  const base = url.startsWith("http") ? url : `http://${url}`;
  return `${base.replace(/\/$/, "")}/api`;
}

export function isApiConfigured(): boolean {
  return Boolean(import.meta.env.VITE_API_URL?.trim());
}

function getApiBaseUrl(): string {
  const url = import.meta.env.VITE_API_URL?.trim();

  if (!url) {
    throw new Error("VITE_API_URL is not defined.");
  }

  return formatApiBaseUrl(url);
}

export const apiConfig = {
  get baseUrl(): string {
    return getApiBaseUrl();
  },
} as const;
