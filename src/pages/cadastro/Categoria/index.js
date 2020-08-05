import React, { useState, useEffect } from 'react';

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

import {Link} from 'react-router-dom'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }

  const [categoria, setCategoria] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([categoria]);

  function setValue(chave, valor) {
    // chave: nome, descricao, etc.
    setCategoria({
      ...categoria,
      [chave]: valor,
    })
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      categoria
    ])
  }

  useEffect( () => {
    const URL = 'http://localhost:3004/categorias';
    fetch(URL)
      .then(async (resposta) => {
          const respostaJSON = await resposta.json();
          setCategorias([
            ...respostaJSON
          ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form
          onSubmit={handleSubmit}>

          <FormField
            label="Nome da Categoria"
            type="text"
            value={categoria.nome}
            name="nome"
            onChange={handleChange}
            />

          <FormField
            label="Descrição"
            type="textarea"
            value={categoria.descricao}
            name="descricao"
            onChange={handleChange}
            />

          <FormField
            label="Cor"
            type="color"
            value={categoria.cor}
            name="cor"
            onChange={handleChange}
            />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map( (categoria, i) => {
          return (
            <li key={`${categoria.nome}${i}`}>{categoria.nome} - {categoria.cor}</li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria
