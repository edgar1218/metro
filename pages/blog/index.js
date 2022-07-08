import Link from "next/link";

export default function index({data}) {
  return (
   
    <div  >



          {data.map(({ id,  title }) => (

            <div key={id} >
            
                <Link href= {`/blog/${id}`}>
                  <a> 
              <h2>{title}</h2>
                </a>
                </Link>
             




            </div>
          ))}
        

      </div>

 
  )
}
export async function getServerSideProps () {


    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return {
      props: {
        data
      }
    }
  }