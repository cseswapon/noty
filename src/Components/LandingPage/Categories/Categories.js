import React from "react";
import variable from "./Categories.module.scss";
import Link from "next/link";
import SingleCategories from "../SingleCategories/SingleCategories";

export default function Categories() {
  return (
    <section className={`${variable.container} py-5`}>
      {/* categories section text */}
      <div className="d-flex justify-content-between align-items-start py-4">
        <div>
          <h3>Explorez par Catégorie</h3>
          <p>
            Découvrez les entreprises et produits les mieux notés dans chaque
            catégorie et trouvez exactement ce que vous cherchez.
          </p>
        </div>
        <p>
          <Link href="#">Voir Plus {"->"}</Link>
        </p>
      </div>
      {/* all categories section */}
      <div className={`${variable.gap} justify-content-between row`}>
        <SingleCategories
          title={"Hôtels et Maisons d’Hôte"}
          img={"/icon/hotel.svg"}
        />
        <SingleCategories title={"Restaurants"} img={"/icon/resturent.svg"} />
        <SingleCategories
          title={"Services de Location de Voitures"}
          img={"/icon/service.svg"}
        />
        <SingleCategories title={"Boutique en Ligne"} img={"/icon/bou.svg"} />
        <SingleCategories
          title={"Banques et Services Financière"}
          img={"/icon/bank.svg"}
        />
        <SingleCategories title={"Bijouteries"} img={"/icon/bij.svg"} />
        <SingleCategories title={"Magasins de Meubles"} img={"/icon/mag.svg"} />
        <SingleCategories
          title={"Agences de Voyage"}
          img={"/icon/agency.svg"}
        />
      </div>
    </section>
  );
}
