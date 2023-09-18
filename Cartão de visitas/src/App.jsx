import React from 'react';
import './App.css';

function App() {
  return (
    <div className="card">
      <img
        src="https://scontent.fbsb20-1.fna.fbcdn.net/v/t1.6435-9/186556756_2846734432210824_1109364079230803508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG1SDBZlHajXW0EBG8XC1J5yz26Nd88NerLPbo13zw16nvLilCZaTFiVjnrEc75DomsV3Rk9CcfyWJ9Qu0yg8H6&_nc_ohc=a2z5nQkVGfUAX8FZRJy&_nc_ht=scontent.fbsb20-1.fna&oh=00_AfD6HFTHl_8Q--Bn8knO7RZm8GV_ghk_rIoJwEb5nhiPPw&oe=653012EF" // Insira a URL da sua imagem de perfil aqui
        alt="Imagem de Perfil"
        className="profile-image"
      />
      <h1>Petrus</h1>
      <p>Olá eu sou Petrus. Sou estudante de TI e tento programar em javascript</p>
      <p>Minha rede social: https://www.instagram.com/aff4bility/</p>
    </div>
  );
}

export default App;
