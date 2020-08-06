import URL_BACKEND_TOP from '../config'

function getAll(withVideos) {
  // http://localhost:3004/categorias?_embed=videos
  const URL_CATEGORIES = `${URL_BACKEND_TOP}/categorias`;
  const embedVideos = withVideos ? '?_embed=videos' : '';

  return fetch(`${URL_CATEGORIES}${embedVideos}`)
    .then(async (resposta) => {
        if (resposta.ok) {
          const respostaJSON = await resposta.json();
          return respostaJSON;
        }

        throw new Error('Não foi possível pegar lista de categorias')
    });
}

export default {getAll}
