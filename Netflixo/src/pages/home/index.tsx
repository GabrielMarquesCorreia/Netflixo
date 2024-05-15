import { ArrowLeftOutlined, SearchOutlined, HomeOutlined, PlaySquareOutlined, BellOutlined, DownloadOutlined} from "@ant-design/icons";
import { Space, Input } from "antd";
import { Link } from "react-router-dom";


function Home() {

    return (

        <>

            <div className="flex">

                {/* Tablet/Desktop Header Start */}
                <div  className='hidden md:flex w-screen bg-gray2 h-20 items-center p-4 justify-between text-center lg:bg-transparent'>

                    {/* Logo Start */}
                    <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-44 lg:ml-28'/>
                    {/* Logo End */}

                    {/* Tablets Links Menu Start */}
                        <div className='flex gap-8 text-white lg:hidden'>
                        <Link to={'#'} className='text-xl font-semibold'>Home</Link>
                        <Link to={'/news'} className='text-xl font-bold text-red-700'>Novidades</Link>
                        <Link to={'../games'} className='text-xl font-semibold'>Jogos</Link>
                        <Link to={'../profile/1'} className='text-xl font-semibold'>Perfil</Link>
                        </div>
                    {/* Tablets Links Menu End */}

                    {/* Search Tablet Icon Start */}
                    <button type="button" className='bg-none lg:hidden text-white'>
                        <Link to={'../search'}>
                            <SearchOutlined className='font-bold text-4xl'/>
                        </Link>
                    </button>
                    {/* Search Tablet Icon End */}

                    {/* Search Desktops Start */}
                    <Space.Compact size="large" className='sm:hidden lg:flex'>
                        <SearchOutlined className='text-3xl text-gray5 bg-gray6 h-12 w-14 flex justify-center border-solid border-gray5 border-r-0 border-2 rounded-l-md'/>
                        <Input className='border-solid border-gray5 bg-gray6 border-2 rounded-md h-12 w-72 justify-center placeholder:text-gray5' type='search' placeholder='Pesquisar filmes ou séries...'/>
                    </Space.Compact>
                    {/* Search Desktops End */}

                </div>
                {/* Tablet/Desktop Header End */}

                {/* Desktops Menu Start */}
                <div className='bg-gray8 h-screen w-28 z-30 fixed hidden lg:flex items-center justify-center text-center text-white'>
                    <div className='flex-col justify-center gap-2 md:gap-12'>

                        {/* Home Start */}
                        <button type='button' className='text-center mt-5'>
                            <HomeOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-xl mt-2 font-semibold'>Home</p>
                        </button>
                        {/* Home End */}

                        {/* News Start */}
                        <button type='button' className='text-center mt-5'>
                            <PlaySquareOutlined className='text-white text-5xl'/>
                            <p className='text-white text-lg mt-2 font-bold'>Novidades</p>
                        </button>
                        {/* News End */}

                        {/* Notifications Start */}
                        <button type='button' className='text-center mt-5'>
                            <BellOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg mt-2 font-semibold'>Notificações</p>
                        </button>
                        {/* Notifications End */}

                        {/* Downloads Start */}
                        <button type='button' className='text-center mt-5'>
                            <DownloadOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg mt-2 font-semibold'>Downloads</p>
                        </button>
                        {/* Downloads End */}

                    </div>
                </div>
                {/* Desktops Menu End */}

                <div className="bg-gradient-to-b from-bgGray to-black lg:from-black">
                    {/* Header Mobile Start */}
                    <div className='flex justify-between md:hidden text-white p-3 w-screen'>

                        {/* Back Arrow Start */}
                        <div className="text-white flex justify-center items text-center gap-3">
                            <Link to="#" onClick={() => window.history.back()}>
                                <ArrowLeftOutlined className="text-4xl font-bold" />
                            </Link>
                        <p className='text-3xl font-semibold'>Séries</p>
                        </div>
                        {/* Back Arrow End */}

                        {/* Search Mobile Start */}
                        <button type="button" className='bg-none lg:hidden'>
                            <Link to={'../search'}>
                                <SearchOutlined className='font-bold text-4xl'/>
                            </Link>
                        </button>
                        {/* Search Mobile Ens */}

                    </div>
                    {/* Header Mobile End */}
                </div>

            </div>
            
        </>

    )

}

export default Home;