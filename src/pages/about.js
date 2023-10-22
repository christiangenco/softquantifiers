import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        // Updated the title to reflect the new name
        <title>About - Vague Quantifiers Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-4">
        // Updated the heading to reflect the new name
        <h1 className="text-4xl font-bold text-center mb-4">
          About Vague Quantifiers Survey
        </h1>

        <p className="text-lg text-center mb-4">
          This project is an exploration into the numerical interpretations of
          vague quantifiers such as "most," "least," and "most likely." By
          participating in the survey, you're contributing to a fascinating
          community exploration into the language-numerics intersection. The
          insights derived could fuel a better understanding of communication
          nuances, aiding educators, communicators, and curious minds alike.
        </p>

        <p className="text-lg text-center mb-4">
          Your input is anonymous and will only be used in aggregate to analyze
          trends and patterns. At the end of this survey, we'll share the
          collective findings right here on VagueQuantifiers.com, offering a
          unique glimpse into how our community quantifies the vague.
        </p>

        <p className="text-lg text-center mb-4">
          For any queries or feedback, you can reach out to us on Twitter at{" "}
          <a href="https://twitter.com/cgenco" className="text-blue-500">
            @cgenco
          </a>
          .
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
