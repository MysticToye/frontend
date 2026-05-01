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

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    } else {
      const textData = await response.text();
      throw new Error(`Server returned ${response.status}: Make sure your API URL is correct.`);
    }
  }

  const data = await response.json();

  return data;
};

export const api = {
  get: (endpoint) => apiCall(endpoint),
  post: (endpoint, body) => apiCall(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: (endpoint, body) => apiCall(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  delete: (endpoint) => apiCall(endpoint, { method: "DELETE" }),
};
