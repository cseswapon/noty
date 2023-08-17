import Image from "next/image";
import Link from "next/link";
import React from "react";
import variable from './SingleEnterprise.module.scss'

export default function SingleEnterprise({logo,title,subTitle,review,score,nombre,}) {
  return (
    <div className={`${variable.enterpriseCard} col-4`}>
      {/* card content */}
      <div className={`d-flex align-items-start py-2 ${variable.borderBottom}`}>
        <div>
          <Image src={logo} width={70} height={70} alt="avatar" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <Image src={review} width={203} height={20} alt="avatar" />
          <p>
            Score: <span className="text-primary">{score}</span>
          </p>
          <p>
            Nombre d’avis: <span className="text-primary">{nombre}</span>
          </p>
        </div>
      </div>
      {/* card footer */}
      <div className="d-flex justify-content-around align-items-center py-2">
        <div>
          <Link href="#">
            Lire les avis <Image src="/icon/arrow.svg" width={25} height={5} />
          </Link>
        </div>
        <div>
          <button>
            <Image
              src="/icon/siteView.svg"
              width={12.44}
              height={12.44}
              alt="avatar"
            />
            site web
          </button>
        </div>
      </div>
    </div>
  );
}
