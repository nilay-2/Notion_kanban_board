export const getTasks = async () => {
  const response = fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
