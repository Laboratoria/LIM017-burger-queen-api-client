import React, {useRef} from "react";

export const NavRef = () => {
  let refMenu = useRef();
  let refMenuBtn = useRef();

  console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    if(refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent="Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  }

  return (
    <>
    <h2> BURGER QUEENS</h2>
    <button ref={refMenuBtn} onClick={handleToggleMenu}>
      Menú
    </button>
    <nav ref ={refMenu} style={{display: "none"}}>
    <a href="#">Menu</a>
    <br />
    <a href="#">Ordenes</a>
    <br />
    <a href="#">Usuarios</a>
    <br />
    <a href="#">Productos</a>
    <br />
    </nav>
    </>
  )
}


// export function Navbar(){
//   return(
//     <>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid">
//     <a class="navbar-brand" href="#">Bienvenido User</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </>
//   )

// }