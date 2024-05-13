import {} from 'react';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <>
      <div className='pt-5 md:pt-7 flex-column text-white justify-center text-center'>
        <div className='flex justify-center items-center'>
          <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-56 xxl:w-80'/>
        </div>
        <h2 className='text-2xl font-semibold mt-16 mb-7 md:text-4xl md:mb-9 lg:hidden'>Quem está assistindo?</h2>
        <div className='flex justify-center lg:mt-20 xxl:mt-40'>
          <div className='grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-11 lg:gap-16 xl:grid-cols-4 xxl:grid-cols-5'>
            <Link to="../profile/1" className='cursor-pointer'>
              <img src="./../../../public/images/profile1.svg" alt="profile" className='w-36 col-2 md:w-44 lg:w-48 xxl:w-56'/>
              <p className='text-xl font-bold mt-3 md:text-2xl'>Usuário 1</p>
            </Link>
            <Link to="../profile/2" className='cursor-pointer'>
              <img src="./../../../public/images/profile3.svg" alt="profile" className='w-36 col-2 md:w-44 lg:w-48 xxl:w-56'/>
              <p className='text-xl font-bold mt-3 md:text-2xl'>Usuário 2</p>
            </Link>
            <Link to="../profile/3" className='cursor-pointer'>
              <img src="./../../../public/images/profile2.svg" alt="profile" className='w-36 col-2 md:w-44 lg:w-48 xxl:w-56'/>
              <p className='text-xl font-bold mt-3 md:text-2xl'>Gabriel</p>
            </Link>
            <Link to="../profile/infantil" className='cursor-pointer'>
              <img src="./../../../public/images/infantil.svg" alt="infantil" className='w-36 col-2 md:w-44 lg:w-48 xxl:w-56'/>
              <p className='text-xl font-bold mt-3 md:text-2xl'>Infantil</p>
            </Link>
            <Link to="../profile/1" className='cursor-pointer'>
              <img src="./../../../public/images/adicionar.svg" alt="add" className='w-36 col-2 md:w-44 lg:w-48 xxl:w-56'/>
              <p className='text-xl font-bold mt-3 md:text-2xl'>Adicionar</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
