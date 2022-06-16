
export function Login(){
  return(
  <> 
  <div className="App">
    <h3 class="title-login">Burger Queen</h3>
    <form>
      <div class="mb-3">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña"/>
      </div>
      <button  type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
  </>
)
};