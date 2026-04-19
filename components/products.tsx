export default function Products() {
  return (
    <section id="products">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Products we ship
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Alongside our consulting work, we build and maintain our own
              software products.
            </p>
          </div>

          {/* Products grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* T2DayList card */}
            <div
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              data-aos="zoom-y-out"
            >
              {/* App icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 shadow-sm">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11.414l-3.293-3.293-1.414 1.414L9 14.243l9.707-9.707-1.414-1.414L9 11.414zM20 19H4v-8H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7h-2v12z" />
                </svg>
              </div>

              {/* Badge */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  iOS
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  Task Management
                </span>
              </div>

              {/* Name & description */}
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                T2DayList
              </h3>
              <p className="mb-5 grow text-[15px] text-gray-600">
                A focused iOS task management application that helps you
                capture, organize, and complete what matters most — one day at
                a time.
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
