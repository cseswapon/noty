import React from 'react'
import variable from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`${variable.footerBg}`}>
      <div className={`${variable.container}`}>
        {/* 1st */}
        <div className="row justify-content-between border-bottom">
          <div className="col-7">
            <Image src="/icon/logo2.svg" width={189} height={84} alt="avatar" />
            <p>
              Construisant des ponts entre les consommateurs et les entreprises
              pour une meilleure expérience de consommation en Tunisie.
            </p>
          </div>
          <div className="col-5 row">
            <div className="col">
              <h6>Noty</h6>
              <Link className='d-block' href="#">Notre mission</Link>
              <Link className='d-block' href="#">Carrières</Link>
              <Link className='d-block' href="#">Nous contacter</Link>
              <Link className='d-block' href="#">Guide d’utilisation</Link>
            </div>
            <div className="col">
              <h6>Entreprises</h6>
              <Link className='d-block' href="#">Pourquoi Noty?</Link>
              <Link className='d-block' href="#">Plans & tarifs</Link>
              <Link className='d-block' href="#">Espace Entreprise</Link>
            </div>
            <div className="col">
              <h6>Légal</h6>
              <Link className='d-block' href="#">Conditions d'utilisation</Link>
              <Link className='d-block' href="#">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              &copy; 2023 Noty - Tous droits réservés. | Conçu et Développé par{" "}
              <Image src="/icon/yuni.svg" alt="avatar" width={92} height={20} />
            </p>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/icon/SocialMedia/instagram.svg"
                alt="avatar"
                width={16}
                height={16}
              />
            </Link>
            <Link href="#">
              {" "}
              <Image
                src="/icon/SocialMedia/facebook.svg"
                alt="avatar"
                width={16}
                height={16}
              />
            </Link>
            <Link href="#">
              <Image src="/icon/SocialMedia/x.svg" alt="avatar" width={16} height={16} />
            </Link>
            <Link href="#">
              <Image
                src="/icon/SocialMedia/tiktok.svg"
                alt="avatar"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
