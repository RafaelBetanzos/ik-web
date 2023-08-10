"use client";

export default function Footer() {
  return (
    <footer className="bg-zinc-700 py-36">
      <div className="container mx-auto px-8 xl:px-48">
        <div className="flex flex-col justify-between gap-16 md:flex-row md:gap-0">
          <div className="mb-8 md:mb-0">
            <img
              className="mx-auto h-48 w-auto opacity-80 invert md:h-24 lg:h-48"
              src="assets/images/logo.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              <a href="/about">About</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="/about">
                Our mission
              </a>
              <a className="text-sm" href="/about">
                History
              </a>
              <a className="text-sm" href="/about">
                Values
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              <a href="/innovation">Innovation</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="/innovation">
                Traditional knowledge
              </a>
              <a className="text-sm" href="/innovation">
                Modern science
              </a>
              <a className="text-sm" href="/innovation">
                Environmental quality
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              <a href="/health">Health</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="/health">
                Research
              </a>
              <a className="text-sm" href="/health">
                Products
              </a>
              <a className="text-sm" href="/health">
                Quality
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              <a href="/animals">Animals</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="/animals">
                Research
              </a>
              <a className="text-sm" href="/animals">
                Products
              </a>
              <a className="text-sm" href="/animals">
                Quality
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              <a href="/agriculture">Agriculture</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="/agriculture">
                Research
              </a>
              <a className="text-sm" href="/agriculture">
                Products
              </a>
              <a className="text-sm" href="/agriculture">
                Quality
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-stone-400">© 2023 Ik-Holcán™</div>
        <div className="mt-4 flex h-auto divide-x-2 divide-solid divide-stone-600">
          <div className="px-2">
            <a href="#" className="">
              <img
                src="assets/images/facebook.svg"
                alt=""
                className="w-8 opacity-20 invert transition-all hover:opacity-100"
              />
            </a>
          </div>
          <div className="px-2">
            <a href="#" className="">
              <img
                src="assets/images/instagram.svg"
                alt=""
                className="w-8 opacity-20 invert transition-all hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
