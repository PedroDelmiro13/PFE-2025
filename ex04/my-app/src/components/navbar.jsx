import Link from 'next/link'

export default function Navbar(){
    return(
        <nav className='bg-gray-800 text-white p-4 flex justify-end gap-7'>
        <Link href="/" className='hover:text-blue-400 transition duration-300'>Home</Link>
        <Link href="/sobre" className='hover:text-blue-400 transition duration-300'>Sobre</Link>
        <Link href="/conversor-real-dolar" className='hover:text-blue-400 transition duration-300'>Moeda</Link>
        <Link href="/conversor-temperatura" className='hover:text-blue-400 transition duration-300'>Temperatura</Link>
        <Link href="/conversor-medida" className='hover:text-blue-400 transition duration-300'>Medida</Link>
        </nav>
    )
}