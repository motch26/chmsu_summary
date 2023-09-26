export const login = async (body) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (res.status !== 200) {
    return { ok: false, data: [] };
  }
  const data = await res.json();
  return { ok: true, data };
};
