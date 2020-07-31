import React from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'
import dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div stylle={{ background: "#141414" }}>
        <PageDefault>

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

          <Carousel
            category = {dadosIniciais.categorias[3]}
          />

          <Carousel
            category = {dadosIniciais.categorias[4]}
          />

          <Carousel
            category = {dadosIniciais.categorias[5]}
          />

        </PageDefault>

    </div>
  );
}

export default Home;
