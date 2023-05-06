export default function Formulario() {
    return (
        <div className="container">
      <form action="">
        <div className="form-group col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div className="col-md-6">
            <label htmlFor="">Identificacion</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="" 
            name="ident" />
          </div>
          <div className="col-md-6">
            <label htmlFor="">Nombre completo</label>
            <input
            type="text" 
            className="form-control" 
            placeholder="" 
            name='fullname'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Asiganatura</label>
            <input
            type="number" 
            className="form-control" 
            placeholder="" 
            name='asigna'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Nota Momento 1</label>
            <input
            type="number" 
            className="form-control" 
            placeholder="30%" 
            name='m1'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Nota Momento 2</label>
            <input
            type="number" 
            className="form-control" 
            placeholder="35%" 
            name='m2'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Nota Momento 3</label>
            <input
            type="number" 
            className="form-control" 
            placeholder="35%" 
            name='m3'/>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="">Definitava</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="" 
            disabled
            name="Def" />
          </div>
          <div className="col-md-6">
            <label htmlFor="">Obsevacion</label>
            <input
            type="text" 
            className="form-control" 
            placeholder="" 
            disabled
            name='observation'/>
          </div>
        </div>
        <br />
        <br />
        <div>
          <button className="btn btn-primary">Calcular</button>
          <button className="btn btn-danger">Limpiar</button>    
        </div>
      </form>
    </div>
    )
}
