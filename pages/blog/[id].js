import React from 'react'

export default function products({data}) {
  return (
    <div>
        <h2>{data.id}</h2>
    </div>
  )
}
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