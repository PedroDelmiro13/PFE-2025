import Navbar from "@/components/navbar"

export default function Sobre() {
    return (
        <div className="min-h-screen bg-gray-100">
  <Navbar />
  <div className="flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-4xl shadow-md w-full max-w-3xl">
      <h1 className="text-4xl font-bold text-center text-black mb-6">Sobre</h1>
      <p className="text-xl text-black mb-4 text-center">
        Me chamo <span className="font-semibold">Pedro Delmiro</span>, tenho 18 anos e sou um desenvolvedor Back-end.
        Tenho focado meus estudos em <span className="font-semibold">Spring Boot</span> e <span className="font-semibold">Postgres</span>, e atualmente estou explorando o <span className="font-semibold">NextJS</span> para expandir meus conhecimentos em Front-end.
      </p>
    </div>
  </div>
</div>
    );
}