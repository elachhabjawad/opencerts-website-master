import Link from "next/link";
import React from "react"; 

export const FooterBar: React.FunctionComponent = () => (
  <footer className="flex-shrink-0 bg-navy text-white py-2">
    <div className="container pt-8 pb-12">
      <div className="flex flex-wrap">
        <div className="w-40 lg:mr-40 mb-8 lg:mb-0">
          <h6 className="font-montserrat font-bold mb-2">Alimenté par</h6>
          <a
            className="inline-block transition-opacity hover:opacity-75"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/images/logo.png" alt="Government Digital Services logo" />
          </a>
        </div>
        <div className="w-full lg:w-40 mb-8 lg:mb-0">
          <h6 className="font-montserrat font-bold mb-2">Partners</h6>
          <ul className="text-sm">
            <li>
              <Link href="/registry">
                <a>Registry</a>
              </Link>
            </li>
            <li>
              <Link href="/collaborate">
                <a>Collaborate</a>
              </Link>
            </li>
            <li>
              <a href="https://go.gov.sg/opencerts-feedback" target="_blank" rel="noopener noreferrer">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-40 mb-8 lg:mb-0">
          <h6 className="font-montserrat font-bold mb-2">Support</h6>
          <ul className="text-sm">
            <li>
              <a href="https://www.ancfcc.gov.ma/" target="_blank" rel="noopener noreferrer">
                Web Site
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-40">
          <h6 className="font-montserrat font-bold mb-2">Contact</h6>
          <ul className="text-sm">
            <li>
              <Link href="/privacy">
                <a>+212 6 60 10 26 83</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>+212 6 60 10 26 84</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>+212 6 60 10 26 85</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>+212 5 37 70 58 85</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">

                <a>Angle Avenue My Youssef et My Hassan 1er - Rabat</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="border-t border-gray-600" />
      <p className="text-center text-xs py-4">Copyright © 2021 Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie</p>
    </div>
  </footer>
);
