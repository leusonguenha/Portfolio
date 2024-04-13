import Image from "next/image";
function SobreMim() {
  const perfil =
    "https://media.licdn.com/dms/image/C4D03AQEG6U3VAwD2Ng/profile-displayphoto-shrink_800_800/0/1657371024941?e=1716422400&v=beta&t=BdscUsmbiM1-3_8OkAQYbyLkWWjzrmTREqSH-MVaG8E";
  return (
    <>
      <div className="conteudo-sobre">
        <div className="sobre">
          <h1>DEIXE-ME APRESENTAR-ME</h1>
          <p>
            Me apaixonei por programação e pelo menos aprendi alguma coisa, eu
            acho… &#x1F605;
          </p>
        </div>
        <div className="foto">
          <Image
            className="card-image"
            src={perfil}
            alt="Profile Picture"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
export default SobreMim;
