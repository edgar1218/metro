import React from 'react'
import Link from 'next/link'
import { BsList } from "react-icons/bs"
import { FaMotorcycle } from "react-icons/fa"
import { BsCartPlus } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";


const Navegar = () => {
  return (


    <div>


      <div className='contenedor-t'>

        <div className='contenedorde'>

          <Link href={"/"}  >
            <a> <FaMotorcycle size={"30px"} /> <span></span> (5)3300444    </a>
          </Link>

        </div>
        <div className='contenedorisq'>
          <Link href={"/blog"}  >
            <a> <FaBlog size={"20px"} />  Blog </a>
          </Link>
          <Link href={"/usuario"}  >
            <a> <FaUserCircle size={"20px"} />  Usuario  </a>
          </Link>
          <Link href={"/carrito"}  >
            <a> <BsCartPlus size={"20px"} />  Carrito  </a>
          </Link>


        </div>
      </div>


      <div className="conteiner d-flex ">

      <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="menu" data-bs-toggle="dropdown" aria-expanded="false">
  Todos
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        <div className='w-100' id='buscador'>
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="texto">
          </input>
        </div>
      </div>
      <div className="conteiner-fluid d-flex">
        <div className='dropdown asd'>

          <button id="b-menu">
            <BsList size="30px" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="drop" id="dropmenu-list">
            <li><a className="dropdown-item" >Hogar</a></li>
            <li><a className="dropdown-item"  >Autos y  Exteriores </a></li>
            <li><a className="dropdown-item" href="#">Electrico </a></li>
            <li><a className="dropdown-item" href="#">Ferreteria</a></li>
            <li><a className="dropdown-item" href="#">Herramientas</a></li>
            <li><a className="dropdown-item" href="#">Jardineria</a></li>
            <li><a className="dropdown-item" href="#">Mascota</a></li>
          </ul>
        </div>


        <div className='w-100' id="enlaces">

          <ul className="nav conteiner-fluid  justify-content-center " id="relleno">
            <li className="nav-item" id="pp">
              <a className="nav-link" href="#" >Ofertas del dia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos Nuevos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Outlet</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Comprar de Nuevo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Eventos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>




  );

}

export default Navegar