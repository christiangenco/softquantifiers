import Link from "next/link";
import fetchQuantifiers from "./fetchQuantifiers";

import Histogram from "./Histogram";

export default async function Results() {
  const quantifiers = await fetchQuantifiers();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Results</h1>
      {/*<Histogram
        data={{
          0: 0,
          1: 0,
          2: 1,
          3: 3,
          4: 7,
          5: 3,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
        }}
      />*/}
      {quantifiers.map((quantifier) => {
        {
          /*const data = {};*/
        }
        return (
          <div key={quantifier} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{quantifier.id}</h2>
            <p className="mb-4">
              According to this survey, "{quantifier.id}" of 10 items most
              likely means:
            </p>
            <Histogram data={quantifier.mostLikely} />

            <p className="mb-4">
              "{quantifier.id}" of 10 items means at minimum:
            </p>
            <Histogram data={quantifier.smallest} />

            <p className="mb-4">
              "{quantifier.id}" of 10 items means at maximum:
            </p>
            <Histogram data={quantifier.largest} />
          </div>
        );
      })}

      {/*<Link href="/" className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
        Back to Survey
      </Link>*/}
    </div>
  );
}
