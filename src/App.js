import React from 'react';
import Menu from './components/Menu'

function App() {
  return (
    <div stylle={{ background: "#141414" }}>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="O que é front-end? Trabalhando na área."
        />

        <Carousel
          ignoreFirstVideo
          category = {dadosIniciais.categorias[0]}
        />

        <Carousel
          category = {dadosIniciais.categorias[1]}
        />

        <Carousel
          category = {dadosIniciais.categorias[2]}
        />
    </div>
  );
}

export default App;
