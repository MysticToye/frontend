export const apiCall = async (endpoint, options = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";
  
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  // Check for token in localStorage (if client-side)
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      defaultHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }

  return data;
};

export const api = {
  get: (endpoint) => apiCall(endpoint),
  post: (endpoint, body) => apiCall(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: (endpoint, body) => apiCall(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  delete: (endpoint) => apiCall(endpoint, { method: "DELETE" }),
};
