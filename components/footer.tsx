import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBuilding,
  FaGavel,
  FaHeadset,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className=" 2xl:max-w-[90%] mx-auto flex flex-col xl:flex-row justify-center border-t-2 border-b-2 border-black">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between xl:flex-col xl:items-start xl:gap-10 space-y-10 sm:space-y-0 p-10 xl:p-20 xl:py-20 xl:w-1/3">
          <div className="sm:flex sm:flex-col sm:justify-start sm:items-start">
            <Image
              src="/images/penguinworldlogo.png"
              alt="Favicon Penguin World"
              className="w-40 pb-4"
              width={1000}
              height={1000}
            />
            <p className="text-muted-foreground text-sm mt-4">
              73 T rue Francis de Pressensé, 69100 Villeurbanne, France
              <br />
              SIREN : 819 192 964
              <br />
              Création : 11/03/2016
              <br />
              Dirigé par : Torro Raphael
            </p>
          </div>
          <div className="flex gap-6 justify-start sm:justify-end">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-[#feb516] transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-[#feb516] transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-[#feb516] transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-[#feb516] transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="xl:w-2/3 md:grid grid-cols-3  md:border-t-2 xl:border-t-0">
          <div className="w-full p-10 xl:border-l-2 border-white md:border-r-2 md:py-20 ">
            <h3 className="mb-4 flex items-center gap-2 text-xl">
              <FaBuilding className="text-sm text-primary" />
              Entreprise
            </h3>
            <div className="w-[24px] h-[2px] w-full bg-white mb-10" />
            <ul className="w-max space-y-1">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-10 md:border-r-2 md:py-20 ">
            <h3 className="mb-4 flex items-center gap-2 text-xl">
              <FaGavel className="text-sm text-primary" />
              Légal
            </h3>
            <div className="w-[24px] h-[2px] w-full bg-white mb-10" />
            <ul className="space-y-1">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Politique de cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Accord de traitement des données
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Sécurité des données
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-10 xl:pr-20 2xl:pr-10 md:py-20 bg-white text-black ">
            <h3 className="mb-4 flex items-center gap-2 text-xl">
              <FaHeadset className="text-sm text-primary" />
              Support
            </h3>
            <div className="w-[24px] h-[2px] bg-black w-full mb-10" />
            <ul className="space-y-1">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Centre d&apos;aide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Support technique
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Communauté
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-[#feb516] text-sm"
                >
                  Statut du service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="bg-black md:bg-white md:text-black text-center text-sm py-4 md:border-t-2 border-white">
        Réalisation et conception par 🚀
        <Link
          className="font-semibold px-2 hover:text-[#feb516] transition"
          href="https://www.linkedin.com/in/christopher-luvumbo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          L.Christopher
        </Link>
      </p>
    </footer>
  );
}
