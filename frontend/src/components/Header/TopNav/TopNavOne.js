import React, { useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {
  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <p className="top-nav__wrapper__promo">
            MADAME NATURAL
          </p>
          <div className="top-nav__wrapper__selectors">
            <Link href={"/administration/login"}>
              <a className="top-nav__auth">ADMINISTRACIÓN</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
