import Image from "next/image";
import profilePic from "../public/perfil.jpg";

function Card() {
  return (
    <div className="card">
      <Image className="card-image" src={profilePic} alt="Profile Picture" />
      <h2 className="card-title">Leuso Nguenha</h2>
      <p className="card-text">
        Estudante Universitário que esta aprendendo a programar. Estou fazendo
        este site justamente para melhorar os meus skills como desenvolvedor
      </p>
    </div>
  );
}
export default Card;
