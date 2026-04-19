export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg">
                J
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              "AiFlow Consulting took our vague idea and turned it into a
              production app in weeks.{" "}
              <em className="italic text-gray-500">
                Their AI expertise is the real deal
              </em>{" "}
              — not just buzzwords."
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">James Rivera</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-blue-500">
                Co-founder at Meridian Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
