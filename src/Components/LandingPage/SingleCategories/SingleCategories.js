import React from "react";
import variable from "./SingleCategories.module.scss";
import Image from "next/image";

export default function SingleCategories({ img, title }) {
  return (
      <div className={`${variable.card} col-3 gap-2`}>
        <Image src={img} height={48.82} width={43.44} alt="avatar" />
        <p>{title}</p>
      </div>
  );
}
