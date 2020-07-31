import React from 'react';

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

import {Link} from 'react-router-dom'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Button as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo
