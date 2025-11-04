import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/Api";
import Card from "../components/Card";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Card title="User Data">
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <ul className="grid gap-2">
        {filtered.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </Card>
  );
}
