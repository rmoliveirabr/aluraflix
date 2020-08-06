import { useState } from 'react';

function useForm(valoresIniciais) {
  const [value, setValue] = useState(valoresIniciais);
  const [values, setValues] = useState([value]);

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;

    setValue({
      ...value,
      [chave]: valor,
    })
  }

  return {
    value,
    values,
    setValue,
    setValues,
    handleChange
  }
}

export default useForm
