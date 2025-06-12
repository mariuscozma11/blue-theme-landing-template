import React from "react";

const Hero = () => {
  return (
    <header className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Mecha
            <strong className="bg-gradient-to-r from-indigo-600 to-blue-300 bg-clip-text text-transparent">
              Fusion{" "}
            </strong>
            <br />
            Clubul de robotica al{" "}
            <strong className="bg-gradient-to-r from-indigo-600 to-blue-300 bg-clip-text text-transparent">
              U
            </strong>
            niversitatii{" "}
            <strong className="bg-gradient-to-r from-indigo-600 to-blue-300 bg-clip-text text-transparent">P</strong>
            olitehnice din <strong className="bg-gradient-to-r from-indigo-600 to-blue-300 bg-clip-text text-transparent">T</strong>imisoara
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex justify-left gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Descopera
            </a>
 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
