import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import firestore from "@/firestore";
import vagueQuantifiers from "@/vagueQuantifiers";

// Page to display the results of the survey
export default function Results() {
  const router = useRouter();
  const [results, setResults] = useState({});

  // Fetch the results from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      const results = {};

      for (const quantifier of vagueQuantifiers) {
        // Updated reference to vagueQuantifiers
        const doc = await firestore
          .collection("quantifiers")
          .doc(quantifier)
          .get();
        if (doc.exists) {
          results[quantifier] = doc.data();
        }
      }

      setResults(results);
    };

    fetchData();
  }, []);

  // Navigate back to the survey page
  const handleBack = () => {
    router.push("/survey");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Results</h1>

      {Object.entries(results).map(([quantifier, data]) => (
        <div key={quantifier} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{quantifier}</h2>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Smallest</h3>
              <p>{data.smallest}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Largest</h3>
              <p>{data.largest}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Most Likely</h3>
              <p>{data.mostLikely}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleBack}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Survey
      </button>
    </div>
  );
}
