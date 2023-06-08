import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className=" bg-white pt-32 ">
      <div className="relative mb-20">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/19/33/conifers-1850227_1280.jpg"
          alt="Top Image"
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          Blog
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Blog
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {/* <!-- article - start --> */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2014/03/28/00/18/car-299772_1280.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-blue-500 active:text-blue-600"
                  >
                    New trends in Tech
                  </a>
                </h2>

                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-blue-500">Mike Lane</span>
                      <span className="block text-sm text-gray-400">
                        July 19, 2023
                      </span>
                    </div>
                  </div>

                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}

            {/* <!-- article - start --> */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_1280.jpg"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-blue-500 active:text-blue-600"
                  >
                    Working with legacy stacks
                  </a>
                </h2>

                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_1280.jpg"
                        loading="lazy"
                        alt="Photo by peter bucks"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-blue-500">Jane Jackobs</span>
                      <span className="block text-sm text-gray-400">
                        April 07, 2023
                      </span>
                    </div>
                  </div>

                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}

            {/* <!-- article - start --> */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_1280.jpg"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-blue-500 active:text-blue-600"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>

                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_1280.jpg"
                        loading="lazy"
                        alt="Photo by Jassir Jonis"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-blue-500">Tylor Grey</span>
                      <span className="block text-sm text-gray-400">
                        March 15, 2023
                      </span>
                    </div>
                  </div>

                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}

            {/* <!-- article - start --> */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465_1280.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-blue-500 active:text-blue-600"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>

                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_1280.jpg"
                        loading="lazy"
                        alt="Photo by Aiony Haust"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-blue-500">Ann Park</span>
                      <span className="block text-sm text-gray-400">
                        January 27, 2023
                      </span>
                    </div>
                  </div>

                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
