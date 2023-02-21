import React, { useState } from 'react';
import './styles.css'

function Input({ label, id }) {

  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');

  function submit() {
    const aux = (etanol / gasolina).toFixed(2)

    if (etanol === '' || gasolina === '') {
      alert(`Preencha os campos`)
      return
    }

    if (aux < 0.7) {
      alert(`O cálculo será igual a ${aux} portanto, compensa mais abastecer com etanol.`)
    } else {
      alert(`O cálculo será igual a ${aux} portanto, compensa mais abastecer com gasolina.`)
    }
  }

  return (
    <div style={{ margin: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
      <p>Preço - litro etanol (R$):</p>
      <input type="number" value={etanol} onChange={e => setEtanol(e.target.value)} style={{ background: "#5c3f89", borderColor: 'white', borderRadius: 4, width: '15rem', height: '2rem', }} required />
      <p>Preço - litro gasolina (R$):</p>
      <input type="number" value={gasolina} onChange={e => setGasolina(e.target.value)} style={{ background: "#5c3f89", borderColor: 'white', borderRadius: 4, width: '15rem', height: '2rem', }} required />
      <button className="botao" type='submit' onClick={submit}>Calcular</button>
    </div>
  );
}

export default Input;
