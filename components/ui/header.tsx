import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <Link
              href="#services"
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="#products"
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex flex-1 items-center justify-end">
            <Link
              href="#contact"
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
