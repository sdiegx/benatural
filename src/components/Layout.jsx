import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='container'>
      <nav class="navbar fixed-top">
        <div class="d-flex flex-row justify-content-evenly px-5 w-100" style={{backgroundColor: '#ffa384'}}>
          <div  >
            <a className="navbar-brand fs-1" style={{fontFamily: "Reenie Beanie, cursive"}} href="#">be natural</a>
          </div>
          <div className='navEffect'>
            <a className="navbar-brand fw-bold" style={{fontFamily: "Cabin Sketch, cursive"}} href="#">Productos</a>
          </div>
          <div className='navEffect'>
            <a className="navbar-brand fw-bold" style={{fontFamily: "Cabin Sketch, cursive"}} href="#">Fitness</a>
          </div>
          <div className='navEffect'>
            <a className="navbar-brand fw-bold" style={{fontFamily: "Cabin Sketch, cursive"}} href="#">Coaching</a>
          </div>
          <div className='navEffect'>
            <a className="navbar-brand fw-bold" style={{fontFamily: "Cabin Sketch, cursive"}} href="#">Contactos</a>
          </div>
          
        </div>        
      </nav>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout