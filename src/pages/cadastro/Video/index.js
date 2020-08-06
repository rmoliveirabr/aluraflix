import React, {useState, useEffect} from 'react';

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'

import {Link, useHistory} from 'react-router-dom'

import useForm from '../../../hooks/useForm'

import categoriasRepository from '../../../repositories/categorias'
import videoRepository from '../../../repositories/videos'

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(categoria => categoria.titulo)
  const { handleChange, value } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=kjhu1LEmRpY',
    categoria: 'Front End',
  });

  useEffect( () => {
    categoriasRepository
      .getAll(false)
      .then( (categorias) => {
        setCategorias(categorias);
      })
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
          e.preventDefault();

          const categoriaEscolhida = categorias.find( (categoria) => {
            return categoria.titulo === value.categoria
          });

          if (!categoriaEscolhida) {
            alert('Categoria inválida!');
            return false;
          }

          videoRepository.createVideo({
            titulo: value.titulo,
            url: value.url,
            categoriaId: categoriaEscolhida.id,
          }).then( () => {
            console.log("cadastrou com sucesso");
            history.push('/');
          })
        } }
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          value={value.titulo}
          name="titulo"
          onChange={handleChange}
          />

          <FormField
            label="URL do Vídeo"
            type="text"
            value={value.url}
            name="url"
            onChange={handleChange}
            />

          <FormField
            label="Categoria do Vídeo"
            type="text"
            value={value.categoria}
            name="categoria"
            onChange={handleChange}
            suggestions={categoryTitles}
            />
          <Button type="submit">Cadastrar</Button>
      </form>

      <br/>
      <br/>
      <br/>
      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo
