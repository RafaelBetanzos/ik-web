"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Footer(dark: boolean = true) {
  return (
    <footer className="bg-stone-700 py-36">
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
              Productos
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="#">
                Cosmética natural
              </a>
              <a className="text-sm" href="#">
                Fármacos naturales
              </a>
              <a className="text-sm" href="#">
                Agricultura orgánica
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              Servicios
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="#">
                Estudio amigo
              </a>
              <a className="text-sm" href="#">
                Propiedad intelectual
              </a>
              <a className="text-sm" href="#">
                Tu marca en nuestros productos
              </a>
              <a className="text-sm" href="#">
                Revisión de etiquetas
              </a>
              <a className="text-sm" href="#">
                Tarjeta sanitaria
              </a>
            </div>
          </div>
          <div className="flex flex-col text-stone-200">
            <div className="font-display mb-4 text-lg uppercase tracking-widest">
              Legal
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a className="text-sm" href="#">
                Aviso de privacidad
              </a>
              <a className="text-sm" href="#">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-stone-400">
          © 2023 Ik-Holcán™. Todos los derechos reservados.
        </div>
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
