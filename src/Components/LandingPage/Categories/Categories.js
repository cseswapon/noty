import React from 'react'
import variable from "./Categories.module.scss";

export default function Categories() {
    return (
      <section className={`${variable.container} py-5`}>
        {/* categories section text */}
        <div className='d-flex justify-content-between align-items-start'>
          <div>
            <h3>Explorez par Catégorie</h3>
            <p>
              Découvrez les entreprises et produits les mieux notés dans chaque
              catégorie et trouvez exactement ce que vous cherchez.
            </p>
          </div>
          <p>Voir Plus {"->"}</p>
        </div>
        {/* all categories section */}
        <div></div>
      </section>
    );
}
