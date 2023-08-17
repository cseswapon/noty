import React from "react";
import variable from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`${variable.container} py-4`}>
      <div className="row justify-content-between align-items-center">
        <div className="col-9 d-flex align-items-center">
          <Image src="/icon/logo.svg" width={90.51} height={38} alt="Picture of the author" />
          <ul
            className={`d-flex align-items-center m-0 ${variable.headerLink}`}
          >
            <li className="list-unstyled mx-4">
              <Link className="text-decoration-none" href="#" target="_blank">
                À propos de nous
              </Link>
            </li>
            <li className="list-unstyled mx-4">
              <Link className="text-decoration-none" href="#" target="_blank">
                Catégories
              </Link>
            </li>
            <li className="list-unstyled mx-4">
              <Link className="text-decoration-none" href="#" target="_blank">
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="d-flex align-items-center m-0">
            <li className={`list-unstyled mx-4 ${variable.regText}`}>
              <Image
                src="/icon/login.svg"
                width={17}
                height={17}
                className="me-2"
                alt="Picture of the author"
              />
              Connexion
            </li>
            <li className="list-unstyled">
              <button className={`${variable.blue} ${variable.reg_btn}`}>
                Pour Entreprises
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
