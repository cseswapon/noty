import React from 'react'
import variable from './Enterprise.module.scss';
import SingleEnterprise from '../SingleEnterprise/SingleEnterprise';
import Link from 'next/link';
import Image from 'next/image';

export default function Enterprise() {
  const enterprise = [
    {
      logo: "/icon/Darty/logo.svg",
      title: "DARTY",
      subtitle: "Entreprise de vente au détail",
      reviewImage: "/icon/Darty/review.svg",
      score: "4.3/5",
      nombre: "250",
    },
    {
      logo: "/icon/Ennakl/logo.svg",
      title: "Ennakl Automobiles",
      subtitle: "Concessionnaire de Voitures",
      reviewImage: "/icon/Ennakl/review.svg",
      score: "2.5/5",
      nombre: "121",
    },
    {
      logo: "/icon/La/logo.svg",
      title: "La Cigale Tabarka Hôtel-Thalasso & Spa - Golf",
      subtitle: "Hôtels et Maisons d'Hôte",
      reviewImage: "/icon/La/review.svg",
      score: "4.4/5",
      nombre: "121",
    },
    {
      logo: "/icon/GlobalNet/logo.svg",
      title: "GlobalNet",
      subtitle: "IT et Communication",
      reviewImage: "/icon/GlobalNet/review.svg",
      score: "1.8/5",
      nombre: "10",
    },
    {
      logo: "/icon/Bolt/logo.svg",
      title: "Bolt",
      subtitle: "Services de Taxi et VTC",
      reviewImage: "/icon/Bolt/review.svg",
      score: "1.0/5",
      nombre: "150",
    },
    {
      logo: "/icon/Zara/logo.svg",
      title: "Zara",
      subtitle: "Magasin de Vêtements",
      reviewImage: "/icon/Zara/review.svg",
      score: "2.3/5",
      nombre: "150",
    },
  ];
  return (
    <section className={`${variable.container} py-5`}>
      <div>
        {/* enterprise heading content */}
        <div>
          <h3>Entreprises les mieux notées</h3>
          <p>
            Plongez dans notre sélection des entreprises les mieux évaluées et
            les plus recommandées par nos utilisateurs satisfaits.
          </p>
        </div>
        {/* enterprise details */}
        <div className={`${variable.gap} justify-content-between py-5 row`}>
          {enterprise.map((en, i) => (
            <SingleEnterprise
              key={i}
              logo={en.logo}
              title={en.title}
              subTitle={en.subtitle}
              review={en.reviewImage}
              score={en.score}
              nombre={en.nombre}
            />
          ))}
        </div>
        {/* enterprise footer navigation */}
        <div className="d-flex justify-content-between">
          <div>
            <Link href="#">Trouver d'autres entreprises recommandées <Image src="/icon/arrow.svg" width={18} height={5} alt='avatar'/></Link>
          </div>
          <div>
            <Image src="/icon/leftArrow.svg" alt='avatar' width={40} height={40} />
            <Image src="/icon/rightArrow.svg" alt='avatar' width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
