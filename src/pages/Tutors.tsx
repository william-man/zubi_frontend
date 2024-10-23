import { Tutor } from "../types/interfaces";
import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";

const Tutors: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchTutors = async () => {
    try {
      const response = await fetch("/api/tutors");
      if (!response.ok) {
        throw new Error("Failed to fetch tutors");
      }
      const data = await response.json();
      setTutors(data);
    } catch (err) {
      setError("Could not fetch tutors");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <Layout>
      <div className="mt-16 p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-zubiLogo">Tutors</h1>

        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="p-4 border rounded-md shadow-lg bg-zubiGreen text-white">
                <h2 className="text-xl font-bold mb-2">{tutor.tutor_name}</h2>
                <p className="text-base">{tutor.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tutors;