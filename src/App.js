import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {

  const [resultado, setResultado] = useState('')
  const [campoUno, setCampoUno] = useState('')
  const [campoDos, setCampoDos] = useState('')
  const [campoTres, setCampoTres] = useState('')
  const [estado, setEstado] = useState('')
  const [Reprobado, setReprobado] = useState(false)
  const [Bueno, setBueno] = useState(false)
  const [MuyBueno, setMuyBueno] = useState(false)
  const [Sobresaliente, setSobresaliente] = useState(false)

  const onClickOperacion = () => {
    let n1 = parseInt(campoUno)
    let n2 = parseInt(campoDos)
    let n3 = parseInt(campoTres)
    let resultados = (n1+n2+n3)/3;
    setResultado(resultados)

    if (resultado< 59){
       setEstado('Reprobado')
       setReprobado(true)
    }
  }


  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 mx-auto">
            <form >
              <fieldset>
                <legend className="text-center mb-3">Fomulario Notas</legend>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" placeholder='Ingrese la nota uno' id="campo1" value={campoUno} onChange={(e) => setCampoUno(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" placeholder='Ingrese la nota dos' id="campo2" value={campoDos} onChange={(e) => setCampoDos(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" placeholder='Ingrese la nota tres' id="campo3" value={campoTres} onChange={(e) => setCampoTres(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <input type="number" className="form-control" value={resultado} readOnly placeholder='Resultado' id="campo3" />
                </div>
                {
                  Reprobado ? (
                    <div class="alert alert-danger" role="alert">{estado}</div>
                  ):null
                }
                
              </fieldset>
            </form>
            <button className="btn btn-primary w-50" onClick={() => onClickOperacion()}>Calcular</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
