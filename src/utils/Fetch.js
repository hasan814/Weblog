export const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Something went wrong!");

  const data = await response.json();
  return data;
};

export const getDataById = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Something went wrong!");

  const data = await response.json();
  return data;
};

export const getUserById = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Something went wrong!");

  const data = await response.json();
  return data;
};
