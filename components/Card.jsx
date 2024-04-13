import Image from "next/image";
import React from "react";

function Card() {
  const perfil =
    "https://media.licdn.com/dms/image/C4D03AQEG6U3VAwD2Ng/profile-displayphoto-shrink_800_800/0/1657371024941?e=1716422400&v=beta&t=BdscUsmbiM1-3_8OkAQYbyLkWWjzrmTREqSH-MVaG8E";
  return (
    <div className="card">
      <Image
        className="card-image"
        src={perfil}
        alt="Profile Picture"
        width={300}
        height={300}
      />
      <h2 className="card-title">Leuso Nguenha</h2>
      <p className="card-text">
        Me apaixonei por programação e pelo menos aprendi alguma coisa, eu acho…
        &#x1F605;
      </p>
    </div>
  );
}
export default Card;
