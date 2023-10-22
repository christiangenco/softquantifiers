```javascript
import { useState } from 'react';
import { useRouter } from 'next/router';
import Slider from '../components/Slider';
import firebase from '../firebase';

// List of soft quantifiers
const softQuantifiers = [
  "A Few",
  "A Couple",
  "Several",
  "A Handful",
  "Some",
  "Many",
  "A Little",
  "A Lot",
  "Numerous",
  "A Smattering",
  "A Sprinkling",
  "Most",
  "Multiple",
  "A Majority",
  "Few",
  "Scads",
  "A Slew",
  "All",
  "None",
  "Every",
  "The Majority of",
  "Almost All",
  "Nearly All",
  "Virtually All",
  "Hardly Any",
  "Barely Any",
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
        [key]: value,
      },
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Save responses to Firebase
    const docRef = await firebase.firestore().collection('responses').add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      responses,
    });

    // Redirect to results page
    router.push(`/results/${docRef.id}`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Soft Quantifiers Survey</h1>

      <form onSubmit={handleSubmit}>
        {softQuantifiers.map((quantifier) => (
          <div key={quantifier} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{quantifier}</h2>

            <div className="mb-4">
              <label className="block mb-1">Smallest</label>
              <Slider
                value={responses[quantifier]?.smallest || 0}
                setValue={(value) => handleSliderChange(quantifier, 'smallest', value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Largest</label>
              <Slider
                value={responses[quantifier]?.largest || 0}
                setValue={(value) => handleSliderChange(quantifier, 'largest', value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Most Likely</label>
              <Slider
                value={responses[quantifier]?.mostLikely || 0}
                setValue={(value) => handleSliderChange(quantifier, 'mostLikely', value)}
              />
            </div>
          </div>
        ))}

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
```