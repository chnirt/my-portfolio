import React from "react"

export default function HeroSection() {
  const handleSeeMore = () => {
    window.location.href =
      "https://learnworthy.net/why-programming-is-the-skill-you-have-to-learn/"
  }

  return (
    <>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why programming is the skill
              <br class="hidden lg:inline-block" />
              you have to learn
            </h1>
            <p class="mb-8 leading-relaxed">
              Apart from companies in the technology sector, the number of
              businesses relying on computer code is increasing drastically.
              It's really no wonder it's listed 8th of the top 25 jobs this year
              according to GlassDoor.
            </p>
            <div class="flex justify-center">
              <button
                onClick={handleSeeMore}
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                See more
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://learnworthy.net/wp-content/uploads/2019/12/Why-programming-is-the-skill-you-have-to-learn.jpg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
