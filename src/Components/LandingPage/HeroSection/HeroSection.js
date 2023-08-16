import Image from "next/image";
import React from "react";
import variable from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={`${variable.container} d-flex py-5`}>
      <div>
        <h1>
          Noty - Votre guide de confiance pour les services et produits en
          Tunisie.
        </h1>
        <p>Trouvez les meilleurs produits et services en un seul endroit.</p>
        <div>
          <input type="text" name="" id="" />
          <button>Laissez votre avis </button>
        </div>
      </div>
      <div>
        {/* first review section card*/}
        <div>
          <div>
            <Image
              src="/icon/firstR1.svg"
              width={34}
              height={34}
              alt="avatar"
            />
            <Image
              src="/icon/firstReview.svg"
              width={108}
              height={20}
              alt="avatar"
            />
          </div>
          <div>
            <p>
              Awel mara mchit lil hotel hetha 3adit séjour 3alamiya ama l mekla
              flop 3alekher!!
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image src="/icon/secR2.svg" width={34} height={34} alt="avatar" />
            <Image
              src="/icon/secReview.svg"
              width={108}
              height={20}
              alt="avatar"
            />
          </div>
          <div>
            <p>
              Awel mara mchit lil hotel hetha 3adit séjour 3alamiya ama l mekla
              flop 3alekher!!
            </p>
          </div>
        </div>
        {/* sec review section card */}
        <div>
          <div>
            <Image src="/icon/theR3.svg" width={34} height={34} alt="avatar" />
            <Image
              src="/icon/theReview.svg"
              width={108}
              height={20}
              alt="avatar"
            />
          </div>
          <div>
            <p>
              Cette salle de sport est vraiment généale. les équipements sont de
              qualités, le personel est compétent mais trouver une machine libre
              peut prendre du temps et devenir frustrant.
            </p>
          </div>
        </div>
        {/* the review section card */}
        <div>
          <div>
            <div>
              <Image
                src="/icon/fourR4.svg"
                width={34}
                height={34}
                alt="avatar"
              />
              <Image
                src="/icon/fourReview.svg"
                width={108}
                height={20}
                alt="avatar"
              />
            </div>
            <div>
              <p>
                Honestly, their taxi drivers are awful and disrespectful. It’s
                true they get to you whenever you are but the customer
                satisfaction is not fulfilled at all.
              </p>
            </div>
          </div>
          {/* 5th card */}
          <div>
            <div>
              <Image
                src="/icon/fifthR5.svg"
                width={34}
                height={34}
                alt="avatar"
              />
              <Image
                src="/icon/fifthReview.svg"
                width={108}
                height={20}
                alt="avatar"
              />
            </div>
            <div>
              <p>تجربة كارثية. ما بعثوليش الأرتيكل إلى حبيت عليه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
