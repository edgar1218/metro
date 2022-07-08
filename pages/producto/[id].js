
import Container from '../../Componentes/container';
import Head from 'next/head';

function  perfilp({data})  {
  return (
  
    
       <Container>

<h1>hola</h1> 
       <h5> {data.title}</h5>
   
       </Container>
       
  )
}
export default perfilp

export async function getStaticPaths() {
  try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json()
      const paths= data.map(({id})=> ({params:{id:`${id}`}}))
      
      return{
          paths,
          fallback:false
      }

  } catch(erorr){
      console.log(erorr)
  }
}
export async function getStaticProps({params}) {


  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data
    },
  };
}