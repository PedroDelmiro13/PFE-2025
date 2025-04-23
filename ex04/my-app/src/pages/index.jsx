import Navbar from "@/components/navbar"

export default function Home (){
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
    <div className="flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-4xl shadow-md">
    <h1 className="text-4xl font-bold text-center text-black mb-6">Atividade Front-end</h1>
<p className="text-2xl text-black-500 mb-4 text-center">Esse site tem fins acadêmicos e foi criado para praticar com o NextJS.</p>

<ol className="text-left mt-10 space-y-2 mx-auto w-fit">
  <li><strong>Sobre:</strong> Texto explicativo sobre o criador do site.</li>
  <li><strong>Moeda:</strong> Nessa página podemos calcular a conversão de Real para Dólar e vice-versa.</li>
  <li><strong>Temperatura:</strong> Nessa página podemos converter Temperatura.</li>
  <li><strong>Medida:</strong> Nessa página podemos converter comprimento de metro para pés e polegadas.</li>
</ol>
    </div>
    </div>
    </div>
  )
}