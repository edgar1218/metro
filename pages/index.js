import Productos from '../Componentes/Productos'
import Container from '../Componentes/container'
import Carusel from '../Componentes/Carusel'
import Slider from "react-slick";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'




export async function getStaticProps() {


  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Head>
        <title> Metroplis CENTER</title>
      </Head>

      <Carusel />
      <div>

         <h2 className={styles.subti}> Prendas y accesorios</h2>
         </div>
      <div className={styles.contenedor} >

      
      <Slider {...settings}>
          {data.map(({ id, image, title, description }) => (

            <div key={id} className={styles.col}>
              <div className="card m-2" >
                <Link href= {`/producto/${id}`}>
                  <a> 
                <img src= {image} className={styles.img} alt="..."/>
                </a>
                </Link>
               <div className="cardbody">
                    <h5 className={styles.titulo}>{title}</h5>
                    <p className={styles.cardtext}>{description}</p>
                  </div>

              </div>



            </div>
          ))}
            </Slider>
       
      </div>
    </Container>
  );

}


