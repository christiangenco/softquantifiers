// Importing required modules
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soft Quantifiers Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center my-8">
          Soft Quantifiers Survey
        </h1>

        <p className="text-lg text-center mx-4">
          Welcome to SoftQuantifiers.com, a platform dedicated to unveiling the
          numerical mysteries behind common phrases. Our language is peppered
          with soft quantifiers—terms like "a few", "several", "most", and
          "almost all". While they slide effortlessly into daily conversation,
          the precise quantities they represent remain nebulous.
        </p>
        <p className="text-lg text-center mx-4">
          This survey aims to capture the public's interpretation of these
          terms, casting light on the numerical range or specific amounts people
          envision when they encounter these phrases. By participating, you're
          contributing to a fascinating community exploration into the
          language-numerics intersection. The insights derived could fuel a
          better understanding of communication nuances, aiding educators,
          communicators, and curious minds alike.
        </p>
        <p className="text-lg text-center mx-4">
          Your input is anonymous and will only be used in aggregate to analyze
          trends and patterns. At the end of this survey, we'll share the
          collective findings right here on SoftQuantifiers.com, offering a
          unique glimpse into how our community quantifies the vague.
        </p>
        <p className="text-lg text-center mx-4">
          Slide into the inquiry, explore the questions, and contribute to
          unveiling the numerical essence of soft quantifiers. Your perspective
          is a crucial piece of this linguistic puzzle. Thank you for your
          curiosity and participation!
        </p>

        <div className="flex justify-center my-8">
          <Link href="/survey">
            <a
              id="start-survey-button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Start Survey
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
