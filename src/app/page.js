// Importing required modules
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vague Quantifiers Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center my-8">
          Vague Quantifiers Survey
        </h1>
        <h2 className="text-5xl text-center">🍎🍎🍎🍎🍎🍎🍏🍏🍏🍏</h2>
        <p className="text-lg my-4">
          How many is "a lot"? How about "a couple" or "several"?
        </p>
        <p className="text-lg my-4">
          Our language is peppered with these <strong>vague quantifiers</strong>
          —terms like "a few", "multiple", "most", and "almost all" don't have a
          strict numerical definition even though they might initially sound
          like they do. Using these terms can lead to miscommunication,
          especially if the people using them don't realize how vague the terms
          actually are.
        </p>
        <p className="text-lg my-4">
          This survey aims to measure the precise vagueness of these vague
          quantifiers. It was made by{" "}
          <a
            className="hover:underline text-blue-500"
            href="https://twitter.com/cgenco"
            target="_blank"
          >
            Christian Genco
          </a>{" "}
          in 2023 just for fun.
        </p>
        <p className="text-lg my-4">
          Your input is anonymous and will only be used in aggregate. At the end
          of this survey we'll show you the results we've collected so far.
        </p>
        <p className="text-lg my-4">
          Your perspective is a crucial piece of this linguistic puzzle. Thank
          you for your curiosity and participation!
        </p>
        <div className="flex justify-center my-8">
          <Link
            href="/survey"
            id="start-survey-button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Start Survey
          </Link>
        </div>
      </main>
    </div>
  );
}
