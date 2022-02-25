import {React, useState} from 'react'
import "../Home/Home.css"
import Logo from "../media/Group.png"

function Home() {


  return (
    <div>

      {/* // !---- Header Start ---! */}
    <section className='header'>
      <nav>
        <a href="#"><img src={Logo} alt='error'/></a>
        <div className="nav-links">
        <ul>
        <li><a href="#">Yangiliklar</a></li>
          <li><a href="#">Kurslar</a></li>
          <li><a href="#">O'qish</a></li>
          <li><a href="#">Izohlar</a></li>
          <li><a href="#">Kurslar</a></li>
          <li><a href="#">O'qish</a></li>
          <li><a href="#">Izohlar</a></li>
        </ul>
        </div>
        
      </nav>
      <div className="text-box">
      <h1>Biznig oquv markaz haqida</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quod ex minus deserunt nostrum, sunt, facilis repellat voluptas saepe iusto dignissimos tempore in qui totam, excepturi sequi praesentium modi tenetur. Voluptate nisi dolorum adipisci dicta magni unde nobis delectus! Cupiditate dolores quae debitis ad?</p>
    <button className='btn_1'>  <a href="#">Oquv markazni korish</a></button>
    </div>
    </section>
    {/* !---- Header end -----! */}

    {/* !--- Course start ----! */}
      <section className='course'>
      <h1>Course We Offer</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, veni</p>
      


    <div className="row">
      {/* first skill */}
      <div className="course-col">
        <h3>English</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam autem ipsam exercitationem aut odio nisi accusamus doloribus suscipit officia impedit illo explicabo error officiis, hic debitis odit quibusdam? Dolores veniam nisi, ipsum libero, eligendi temporibus labore ex optio accusantium doloribus, culpa adipisci rerum?</p>
      </div>
    {/* second skill */}
    <div className="course-col">
        <h3>Russian</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam autem ipsam exercitationem aut odio nisi accusamus doloribus suscipit officia impedit illo explicabo error officiis, hic debitis odit quibusdam? Dolores veniam nisi, ipsum libero, eligendi temporibus labore ex optio accusantium doloribus, culpa adipisci rerum?</p>
      </div>
      {/* third skill */}
      <div className="course-col">
        <h3>Arabic</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam autem ipsam exercitationem aut odio nisi accusamus doloribus suscipit officia impedit illo explicabo error officiis, hic debitis odit quibusdam? Dolores veniam nisi, ipsum libero, eligendi temporibus labore ex optio accusantium doloribus, culpa adipisci rerum?</p>
      </div>

    </div>

      </section>
    {/* !--- Course end ----! */}


    {/* !--- Study cennter start ---! */}
    <section className='study'>
    <h1>Our Study Center</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisici Recusandae?</p>

    <div className="row">
      <div className="campus-col">
      
      <div className="layer">

      </div>
      </div>
    </div>
    </section>
    {/* !--- Study cennter end ---! */}

      </div>
  )
}

export default Home


