import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'
// import dadosIniciais from '../../data/dados_iniciais.json'
import categoriasRepository from '../../repositories/categorias'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect( () => {
    categoriasRepository.getAll(true)
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ background: "#141414" }}>
        <PageDefault paddingAll={0}>
          { dadosIniciais.length === 0 && (<div>Loading...</div>) }

          { dadosIniciais.map( (categoria, indice) => {
              if (indice === 0) {
                return (
                  <div key={categoria.id}>
                    <BannerMain
                      videoTitle={categoria.videos[0].titulo}
                      url={categoria.videos[0].url}
                      videoDescription="O que é front-end? Trabalhando na área."
                    />

                    <Carousel
                      ignoreFirstVideo
                      category = {categoria}
                    />
                  </div>
                );
              } else {
                  return (
                    <Carousel
                      key = {categoria.id}
                      category = {categoria}
                    />
                  );
              }
            })
          }

          {/*
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
          */}
        </PageDefault>
    </div>
  );
}

export default Home;
