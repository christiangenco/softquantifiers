"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/components/Slider";
import firestore from "@/firestore";

// List of vague quantifiers
const vagueQuantifiers = [
  "All",
  "None",
  "A Few",
  "A Couple",
  "Several",
  "A Handful",
  "Some",
  "Many",
  "Most",
  "Multiple",
  // "A Little",
  // "A Lot",
  // "Numerous",
  // "A Smattering",
  // "A Sprinkling",
  // "A Majority",
  // "Few",
  // "Scads",
  // "A Slew",
  // "Every",
  // "The Majority of",
  // "Almost All",
  // "Nearly All",
  // "Virtually All",
  // "Hardly Any",
  // "Barely Any",
];

export default function Survey() {
  const router = useRouter();
  const [responses, setResponses] = useState({});

  // Function to handle slider value change
  const handleSliderChange = (quantifier, key, value) => {
    setResponses({
      ...responses,
      [quantifier]: {
        ...responses[quantifier],
        [key]: Number(value),
      },
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Save responses to Firebase
    const docRef = await firestore.collection("responses").add({
      createdAt: new Date(),
      responses,
    });

    // Redirect to results page
    router.push(`/results`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Vague Quantifiers Survey</h1>

      <form onSubmit={handleSubmit}>
        {vagueQuantifiers.map((quantifier) => (
          <div key={quantifier} className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              {quantifier} of the apples are red
            </h2>

            <div className="mb-4">
              <label className="block mb-1">
                What's the <strong>smallest</strong> number of apples that could
                be red for the above statement to be true?
              </label>
              <Slider
                value={responses[quantifier]?.smallest || 0}
                setValue={(value) =>
                  handleSliderChange(quantifier, "smallest", value)
                }
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                What's the <strong>largest</strong> number of apples that could
                be red for the above statement to be true?
              </label>
              <Slider
                value={responses[quantifier]?.largest || 0}
                setValue={(value) =>
                  handleSliderChange(quantifier, "largest", value)
                }
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                What's the <strong>most likely</strong> number of apples that
                could be red for the above statement to be true?
              </label>
              <Slider
                value={responses[quantifier]?.mostLikely || 0}
                setValue={(value) =>
                  handleSliderChange(quantifier, "mostLikely", value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
