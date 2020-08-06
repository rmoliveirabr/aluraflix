import React, { useEffect } from 'react';

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

import {Link} from 'react-router-dom'

import useForm from '../../../hooks/useForm'

import categoriasRepository from '../../../repositories/categorias'

function CadastroCategoria() {

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  }

  const { value, values, setValue, setValues, handleChange} = useForm(valoresIniciais);

  useEffect( () => {
    categoriasRepository.getAll(false)
      .then((categorias) => {
          console.log('=== categorias', categorias);
          setValues([
            ...categorias
          ]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setValues([
      ...values,
      value
    ])

    setValue(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

          <FormField
            label="Nome da Categoria"
            type="text"
            value={value.titulo}
            name="titulo"
            onChange={handleChange}
            />

          <FormField
            label="Descrição"
            type="textarea"
            value={value.descricao}
            name="descricao"
            onChange={handleChange}
            />

          <FormField
            label="Cor"
            type="color"
            value={value.cor}
            name="cor"
            onChange={handleChange}
            />

        <Button>Cadastrar</Button>
      </form>

      {values.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {values.map( (val, i) => {
          return (
            <li key={`${val.titulo}${i}`}>{val.titulo} - {val.cor}</li>
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
