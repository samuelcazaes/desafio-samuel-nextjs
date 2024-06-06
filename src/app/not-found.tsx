import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container">
      <div 
        style={{
          backgroundColor: '#CDCFDF',
          padding: '2px 20px 25px 20px',
          marginTop: '40px',
          borderRadius: '10px',
        }}>
        <h1 className="title" style={{color: '#454564'}}>
          Página não encontrada ou sob construção...⚠️
        </h1>
        <Image 
          src={'/imagens/not-found.jpg'}
          width={800}
          height={400}
          alt="não encontrada ou em construção"
          style={{borderRadius: '5px', boxShadow: '1px 1px 1px .4'}}
        />
        <p style={{color: '#454564', fontWeight: '500'}}>Volte para a home.</p>
        <Link href="/"><button style={{width: '300px'}}>Voltar</button></Link>
      </div>
    </section>
  )
}