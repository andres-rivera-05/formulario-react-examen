import React, { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FaRedo } from "react-icons/fa";
import { alertaWarnig } from './funcionesAlerta';

function App() {

  const [resultado, setResultado] = useState('')
  const [campoUno, setCampoUno] = useState('')
  const [campoDos, setCampoDos] = useState('')
  const [campoTres, setCampoTres] = useState('')
  const [estado, setEstado] = useState('')
  const [Reprobado, setReprobado] = useState(null)
  const [Bueno, setBueno] = useState(null)
  const [MuyBueno, setMuyBueno] = useState(null)
  const [Sobresaliente, setSobresaliente] = useState(null)
  

  const onClickOperacion = () => {

    if(campoUno > 30){
      alertaWarnig('Ups! la nota maxima aceptada es de 30', 'campo1')
      return
    } else if (campoDos > 30){
      alertaWarnig('Ups! la nota maxima aceptada es de 30', 'campo2')
      return
    }else if(campoTres > 40){
      alertaWarnig('Ups! la nota maxima aceptada es de 40', 'campo3')
      return
    }

    if(campoUno === ''){
      alertaWarnig('Completa el campo uno', 'campo1')
    }else if(campoDos === ''){
      alertaWarnig('Completa el campo dos', 'campo2')
    }else if(campoTres === ''){
      alertaWarnig('Completa el campo tres', 'campo3')
    }
    else{
      let n1 = parseInt(campoUno)
      let n2 = parseInt(campoDos)
      let n3 = parseInt(campoTres)
      let resultados = parseInt(n1 + n2 + n3);
      setResultado(resultados)
    }
  }

  const Limpiar = () => {
    setResultado('')
    setCampoUno('')
    setCampoDos('')
    setCampoTres('')
    setReprobado(false)
    setBueno(false)
    setMuyBueno(false)
    setSobresaliente(false)
  }

  useEffect(() => {
    if (resultado !== '') {
      if (resultado >= 0 && resultado <= 59) {
        setEstado('Reprobado')
        setReprobado(true)
      } else if (resultado >= 60 && resultado <=79) {
        setEstado('Bueno')
        setReprobado(false)
        setBueno(true)
      } else if (resultado >= 80 && resultado <=90) {
        setEstado('Muy Bueno')
        setReprobado(false)
        setBueno(false)
        setMuyBueno(true)
      } else {
        setEstado('Sobresaliente')
        setSobresaliente(true)
      }
    }
  }, [resultado])

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 mx-auto ctn-form">
            <form >
              <fieldset>
                <legend className="text-center mb-3">Fomulario Notas</legend>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" min={0} max={30} placeholder='Ingrese la nota uno, max 30%' id="campo1" value={campoUno} onChange={(e) => setCampoUno(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" min={0} max={30} placeholder='Ingrese la nota dos, max 30%' id="campo2" value={campoDos} onChange={(e) => setCampoDos(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-pen"></span>
                  </div>
                  <input type="number" className="form-control" min={0} max={40} placeholder='Ingrese la nota tres, max 40%' id="campo3" value={campoTres} onChange={(e) => setCampoTres(e.target.value)} />
                </div>
                <div className="mb-3 input-group">
                  <input type="number" className="form-control" value={resultado} readOnly placeholder='Resultado' id="campo-resultado" />
                  <div className='input-group-text'>
                    <span className=" fa-solid fa-percent"></span>
                  </div>
                </div>
                {
                  Reprobado ? (
                    <div className="alert alert-danger" role="alert">{estado}</div>
                  ) : Bueno ? (
                    <div className="alert alert-warning" role="alert">{estado}</div>
                  ) : MuyBueno ? (
                    <div className="alert alert-info" role="alert">{estado}</div>
                  ) : Sobresaliente ? (
                          <div className="alert alert-success" role="alert">{estado}</div>
                  ) :null
                }

              </fieldset>
            </form>
            <div className="d-grid gap-2 d-md-flex">
              <button className="btn btn-primary w-50" onClick={() => onClickOperacion()}>Calcular</button>
              <button className="btn btn-success w-50" onClick={() => Limpiar()}><FaRedo /> Limpiar</button>
            </div>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
