  function Texto1(){
    return <p>Um outro parágrafo de texto</p>
  } 

export default function Home() {
  const aula = 2;
  return (<div><h1>Oá Turma!!!</h1>
  <p>Essa é a nossa {aula} aula de programação</p>
  <Texto1 />
  <Texto1 />
  </div>);
}
