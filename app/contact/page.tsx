"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ContactForm from "../components/contact";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <main>
      <NavBar dark={true} />

      <section className="bg-stone-100">
        <div className="container mx-auto flex flex-col items-center justify-between p-12 pt-24 lg:flex-row">
          <div>
            <h2 className="font-display text-center text-4xl tracking-wide text-gray-900 sm:text-left sm:text-6xl">
              Contact us
            </h2>
            {/* <p className="mt-2 text-center text-lg leading-8 text-gray-600 sm:text-left">
              Escríbenos y te respondemos...
            </p> */}

            <div className="mt-16 flex flex-col gap-8 text-stone-600">
              <div className="flex">
                <div className="mr-4">
                  <BuildingOfficeIcon className="w-6" />
                </div>
                <div>
                  <div>Buenos Aires, Argentina</div>
                  <div>Ensenada, Baja California, México</div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <PhoneIcon className="w-6" />
                </div>
                <div>
                  <div>
                    <a href="tel:111">+54 9 11 6666 6666</a>
                  </div>
                  <div>
                    <a href="tel:6462498495">+646 249 8495</a>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <EnvelopeIcon className="w-6" />
                </div>
                <div>
                  <a href="mailto:contacto@ikholcan.com">
                    contacto@ikholcan.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
