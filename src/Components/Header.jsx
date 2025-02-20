import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      <nav>
        <img src="/public/task_center-logo.png" alt="Task Center logo" />
        <div>
          <Link className='ruta' to={'/'} >Home</Link>
          <Link className='ruta' to={"/CursosBasicos"} >Cursos Basicos</Link>
          <Link className='ruta' to={"/CursosMedios"} >Cursos Medios</Link>
          <Link className='ruta' to={"/CursosAvanzados"} >Cursos Avanzados</Link>
        </div>
      </nav>
    </header>
  )
}
