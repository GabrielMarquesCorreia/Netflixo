import { BellOutlined, DesktopOutlined, DiscordOutlined, DownloadOutlined, ExclamationCircleOutlined, FireOutlined, HomeOutlined, JavaOutlined, PlaySquareOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { Link } from 'react-router-dom';

function News() {

    return (

        <>

            {/* Desktops Menu Start */}
                <div className='bg-gray8 h-screen w-28 z-30 fixed hidden lg:flex items-center justify-center text-center text-white -mt-20'>
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

        {/* Header Start */}
        <div className='hidden md:flex bg-gray2 h-20 items-center justify-center lg:justify-between text-center gap-12 p-4 lg:bg-transparent lg:ml-28 fixed w-screen -mt-20'>

        {/* Logo Start */}
            <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-44 xxl:w-52 flex items-center'/>
        {/* Logo End */}

        {/* Tablets Links Menu Start */}
            <div className='flex gap-8 text-white lg:hidden'>
            <Link to={'../home'} className='text-xl font-semibold'>Home</Link>
            <Link to={'#'} className='text-xl font-bold text-red-700'>Novidades</Link>
            <Link to={'../games'} className='text-xl font-semibold'>Jogos</Link>
            <Link to={'../profile/1'} className='text-xl font-semibold'>Perfil</Link>
            </div>
        {/* Tablets Links Menu End */}

        {/* Buttons Start */}
            <div className='text-white'>

            {/* Search Tablet Icon Start */}
                <button type="button" className='bg-none lg:hidden'>
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
        {/* Buttons End */}
        
        </div>
        {/* Header End */}

            <div className='m-3 text-white z-10 h-111 md:h-auto lg:ml-32 mt-20'>
                {/* Header Mobile Start */}
                    <div className='flex justify-between md:hidden'>
                        <p className='text-3xl font-semibold'>Novidades</p>

                        {/* Search Mobile Start */}
                            <button type="button" className='bg-none lg:hidden'>
                                <Link to={'../search'}>
                                    <SearchOutlined className='font-bold text-4xl'/>
                                </Link>
                            </button>
                        {/* Search Mobile Ens */}

                    </div>
                {/* Header Mobile End */}

                {/* Options Mobile Start */}
                <div className='scrollA items-center justify-between overflow-x-auto max-w-screen-lg xl:max-w-screen-xl xl:overflow-hidden'>
                    <div className='flex mt-5 w-150 md:w-151 gap-4 lg:w-152 mb-3 xl:justify-center xl:items-center xxl:w-153'>

                        {/* Coming Soon Start */}
                            <Button className='bg-white rounded-3xl text-black h-12 items-center font-semibold flex justify-center text-center gap-3'>
                                <JavaOutlined className='text-red-500 text-3xl -mt-2'/>
                                <p className='text-xl font-bold'>Em breve</p>
                            </Button>
                        {/* Coming Soon End */}

                        {/* Top News Start */}
                            <Button className='border-solid border-2 bg-transparent border-white rounded-3xl text-white h-12 items-center font-semibold flex justify-center text-center gap-3'>
                                <FireOutlined className='text-red-500 text-3xl -mt-1' />
                                <p className='text-xl font-bold'>Todo mundo está falando</p>
                            </Button>
                        {/* Top News End */}

                        {/* Screen Start */}
                            <Button className='border-solid border-2 bg-transparent border-white rounded-3xl text-white h-12 items-center font-semibold flex justify-center text-center gap-3'>
                                <DesktopOutlined className='text-green-500 text-3xl -mt-1' />
                                <p className='text-xl font-bold'>Direto do forno para a sua tela</p>
                            </Button>
                        {/* Screen End */}

                        {/* :D Start */}
                            <Button className='border-solid border-2 bg-transparent border-white rounded-3xl text-white h-12 items-center font-semibold flex justify-center text-center gap-3'>
                                <SmileOutlined className='text-yellow-500 text-3xl font-bold -mt-1'/>
                            </Button>
                        {/* :D End */}

                    </div>
                </div>
                {/* Options Mobile End */}

                {/* Content Start */}
                    
                    {/* Kung Fu Panda Start */}
                        <div className='flex justify-between mt-6'>
                            <div className='flex-col justify-center'>
                                <p className='text-xl md:text-2xl text-gray9'>MAR</p>
                                <p className='text-3xl md:text-4xl text-end'>21</p>
                            </div>
                            <div className='xl:flex pl-2 justify-start items-start text-start gap-3'>
                                <div className='text-end flex justify-end'>
                                    <div className='text-lg md:text-2xl text-white font-bold bg-black bg-opacity-60 absolute z-10 m-3 w-12 md:w-14 h-7 md:h-8 flex justify-center text-center items-center rounded-lg'>
                                        <p className='-mt-1'>AL</p>
                                    </div>
                                    <video src="./../../../public/images/panda2.mp4" controls poster='./../../../public/images/panda.svg' className='w-screen xl:w-223' />
                                </div>
                                <div className='xl:grid xl:grid-cols-9 xl:-mt-5'>
                                    <div className='flex gap-2 justify-between col-span-9'>
                                        <img src="./../../../public/images/panda3.svg" alt="Logo-Panda" className='w-36 md:w-72 xl:w-44' />
                                        <div className='flex gap-2 md:gap-10'>
                                            <button className='text-center mt-3 bg-none'>
                                                <BellOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Receber aviso</p>
                                            </button>
                                            <button className='text-center mt-3 bg-none'>
                                                <ExclamationCircleOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Saiba mais</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-span-9'>
                                        <p className='text-white font-bold text-xl mt-3 md:text-2xl xl:mt-1 xl:text-xl xxl:text-2xl'>Disponível em 21 de março</p>
                                        <p className='text font-bold mt-3 text-gray10 md:text-xl xl:text-lg xxl:text-xl'>Nesta nova sequência, Po é designado a se tornar o Líder Espiritual e deverá escolher um novo Dragão Guerreiro. No entanto, o corajoso panda se depara com uma novavilã, a Camaleoa, que deseja obter o Cajado da Sabedoria, que daria à personagem o poder  de convocar todos os mestres vilões.</p>
                                        <p className='text font-bold mt-3 text-white md:text-xl xl:text-lg xxl:text-xl'>Aventura - Comédia - Infantil - Para toda família</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Kung Fu Panda End */}
                    
                    {/* The Strangers Start */}
                        <div className='flex justify-between mt-12'>
                            <div className='flex-col justify-center'>
                                <p className='text-xl md:text-2xl text-gray9'>MAR</p>
                                <p className='text-3xl md:text-4xl text-end'>17</p>
                            </div>
                            <div className='xl:flex pl-2 justify-start items-start text-start gap-3'>
                                <div className='text-end flex justify-end'>
                                    <div className='text-lg md:text-2xl text-white font-bold bg-black bg-opacity-60 absolute z-10 m-3 w-12 md:w-14 h-7 md:h-8 flex justify-center text-center items-center rounded-lg'>
                                        <p className=''>A18</p>
                                    </div>
                                    <video src="./../../../public/images/strangers3.mp4" controls poster='./../../../public/images/strangers.svg' className='w-screen xl:w-223' />
                                </div>
                                <div className='xl:grid xl:grid-cols-9 xl:-mt-5'>
                                    <div className='flex gap-2 justify-between col-span-9'>
                                        <img src="./../../../public/images/strangers2.svg" alt="Logo-Panda" className='w-48 md:w-80 xl:w-72' />
                                        <div className='flex gap-2 md:gap-10 xl:mt-5'>
                                            <button className='text-center mt-3 bg-none'>
                                                <BellOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Receber aviso</p>
                                            </button>
                                            <button className='text-center mt-3 bg-none'>
                                                <ExclamationCircleOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Saiba mais</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-span-9'>
                                        <p className='text-white font-bold text-xl mt-3 md:text-2xl xl:mt-1 xl:text-xl xxl:text-2xl'>Disponível em 17 de março</p>
                                        <p className='text font-bold mt-3 text-gray10 md:text-xl xl:text-lg xxl:text-xl'>Em Os Estranhos: Capítulo 1, a jovem Maya (Madelaine Petsch) viaja para o campo com seu namorado para começar uma nova vida. Quando seu carro quebra, o casal é forçado a passar a noite em um Airbnb isolado na floresta, onde o casal é aterrorizado até o amanhecer por três estranhos mascarados.</p>
                                        <p className='text font-bold mt-3 text-white md:text-xl xl:text-lg xxl:text-xl'>Ação - Terror - Suspense</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* The Strangers End */}
                    
                    {/* Alita Start */}
                        <div className='flex justify-between mt-12'>
                            <div className='flex-col justify-center'>
                                <p className='text-xl md:text-2xl text-gray9'>MAR</p>
                                <p className='text-3xl md:text-4xl text-end'>15</p>
                            </div>
                            <div className='xl:flex pl-2 justify-start items-start text-start gap-3'>
                                <div className='text-end flex justify-end'>
                                    <div className='text-lg md:text-2xl text-white font-bold bg-black bg-opacity-60 absolute z-10 m-3 w-12 md:w-14 h-7 md:h-8 flex justify-center text-center items-center rounded-lg'>
                                        <p className=''>A16</p>
                                    </div>
                                    <video src="./../../../public/images/alita3.mp4" controls poster='./../../../public/images/alita.svg' className='w-screen xl:w-270' />
                                </div>
                                <div className='xl:grid xl:grid-cols-9'>
                                    <div className='flex gap-2 justify-between col-span-9'>
                                        <img src="./../../../public/images/alita2.svg" alt="Logo-Panda" className='w-40 md:w-72 xl:w-56' />
                                        <div className='flex gap-2 md:gap-10'>
                                            <button className='text-center mt-3 bg-none'>
                                                <BellOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Receber aviso</p>
                                            </button>
                                            <button className='text-center mt-3 bg-none'>
                                                <ExclamationCircleOutlined className='text-3xl mb-2 md:text-4xl'/>
                                                <p className='text-gray5 text-md font-semibold text-center md:text-xl'>Saiba mais</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-span-9'>
                                        <p className='text-white font-bold text-xl mt-3 md:text-2xl xl:mt-1 xl:text-xl xxl:text-2xl'>Disponível em 15 de março</p>
                                        <p className='text font-bold mt-3 text-gray10 md:text-xl xl:text-lg xxl:text-xl'>Abandonada em um ferro-velho de Iron City, a ciborgue Alita é encontrada pelo cientista Dyson Ido. Revitalizada, ela acorda sem memória e reconhecimento do mundo em que se encontra. Determinada a conhecer seu passado e explorar suas habilidades surpreendentes de luta, Alita se torna uma poderosa caçadora de recompensas, combatendo forças mortais.</p>
                                        <p className='text font-bold mt-3 text-white md:text-xl xl:text-lg xxl:text-xl'>Ação - Sci-fi - Aventura</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Alita End */}

                {/* Content End */}
            </div>

            {/* Mobile Menu Start */}
            <div className='md:hidden z-0 fixed bg-gray2 -mt-31 w-full h-24 flex justify-center items-center text-center gap-7'>

                {/* Home Icon Mobile Start */}
                    <button type='button' className='text-center'>
                        <Link to={'../home'}>
                            <HomeOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg font-semibold'>Home</p>
                        </Link>
                    </button>
                {/* Home Icon Mobile End */}

                {/* News Mobile Icon Start */}
                    <button type='button' className='text-center'>
                        <PlaySquareOutlined className='text-white text-5xl'/>
                        <p className='text-white text-lg font-bold'>Novidades</p>
                    </button>
                {/* News Mobile Icon End */}
          
                {/* Games Icon Start */}
                    <button type='button' className='text-center'>
                        <Link to={'../games'}>
                            <DiscordOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg font-semibold'>Jogos</p>
                        </Link>
                    </button>
                {/* Games Icon End */}

            </div>
            {/* Mobile Menu End */}
      
        </>

    )

}

export default News;
