export async function fetchAllProfucts() {
  const data = await fetch(`${process.env.API_URL}/fetch.php`, {
    headers: { "Content-Type": "application/json" },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
