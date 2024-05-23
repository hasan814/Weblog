// =========== Fetch Data from inner DB ==========
export const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("something went wrong");
  return response.json();
};

export const getDataById = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("Something went wrong.");
  const data = await response.json();
  return data;
};

// =========== Fetch Data from Outer DB ==========
// export const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   if (!response.ok) throw new Error("Something went wrong!");

//   const data = await response.json();
//   return data;
// };

// export const getDataById = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!response.ok) throw new Error("Something went wrong!");

//   const data = await response.json();
//   return data;
// };

// export const getUserById = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${slug}`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!response.ok) throw new Error("Something went wrong!");

//   const data = await response.json();
//   return data;
// };
