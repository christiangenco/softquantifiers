"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/components/Slider";
import firestore from "@/firestore";

import vagueQuantifiers from "@/vagueQuantifiers";

export default function Survey() {
  const router = useRouter();
  const [responses, setResponses] = useState({});
  const [pageIndex, setPageIndex] = useState(0);

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

  const quantifier = vagueQuantifiers[pageIndex];
  const quantifierAnswered =
    Object.keys(responses[quantifier] || {}).length >= 3;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        🍎 Vague Quantifiers Survey
      </h1>

      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          <span className="font-script">
            {pageIndex + 1}/{vagueQuantifiers.length}. "{quantifier} of the 10
            apples are red"
          </span>
        </h2>

        <div className="mb-6">
          <label className="block mb-1">
            If someone told you that{" "}
            <strong>
              "{quantifier.toLowerCase()} of the 10 apples are red"
            </strong>{" "}
            what's your intuitive sense of how many apples would be red?
          </label>
          <Slider
            value={responses[quantifier]?.mostLikely}
            setValue={(value) =>
              handleSliderChange(quantifier, "mostLikely", value)
            }
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">
            In your opinion, what's the <strong>smallest</strong> number of
            apples that could be red for{" "}
            <strong>
              "{quantifier.toLowerCase()} of the 10 apples are red"
            </strong>{" "}
            to still be a true and reasonable statement?
          </label>
          <Slider
            value={responses[quantifier]?.smallest}
            setValue={(value) =>
              handleSliderChange(quantifier, "smallest", value)
            }
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">
            In your opinion, what's the <strong>largest</strong> number of
            apples that could be red for{" "}
            <strong>
              "{quantifier.toLowerCase()} of the 10 apples are red"
            </strong>{" "}
            to still be a true and reasonable statement?
          </label>
          <Slider
            value={responses[quantifier]?.largest}
            setValue={(value) =>
              handleSliderChange(quantifier, "largest", value)
            }
          />
        </div>
      </div>

      <button
        className={`${
          quantifierAnswered
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "cursor-not-allowed bg-gray-200 text-black"
        } transition-colors px-4 py-2 w-full rounded mb-12`}
        onClick={async () => {
          if (quantifierAnswered) {
            if (pageIndex < vagueQuantifiers.length - 1) {
              setPageIndex(pageIndex + 1);
            } else {
              const docRef = await firestore.collection("responses").add({
                createdAt: new Date(),
                userAgent: navigator.userAgent,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                responses,
              });

              // Redirect to results page
              router.push(`/results`);
            }
          }
        }}
      >
        Next
      </button>
    </div>
  );
}
