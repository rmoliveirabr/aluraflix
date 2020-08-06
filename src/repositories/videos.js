import URL_BACKEND_TOP from '../config'

function createVideo(video) {
  // http://localhost:3004/categorias?_embed=videos
  const URL_VIDEOS = `${URL_BACKEND_TOP}/videos`

  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video)
  })
    .then(async (resposta) => {
        if (resposta.ok) {
          const respostaJSON = await resposta.json();
          return respostaJSON;
        }

        throw new Error('Não foi possível cadastrar o video')
    });
}

export default {createVideo}
