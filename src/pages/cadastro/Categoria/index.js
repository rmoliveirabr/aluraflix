import React from 'react';

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

import {Link} from 'react-router-dom'

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <Button as={Link} to="/">
        Ir para Home
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria
