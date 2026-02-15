import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL;
    axios
      .get(`${base}/api/v1/health`)
      .then((res) => setData(res.data))
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-3">CodeBegun LMS (Dev)</h3>

          {err && <div className="alert alert-danger">{err}</div>}

          {data ? (
            <pre className="bg-light p-3 rounded">{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <div>Loading health check...</div>
          )}
        </div>
      </div>
    </div>
  );
}
