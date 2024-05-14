import { ArrowLeftOutlined, BellOutlined, CaretRightOutlined, DiscordOutlined, DownloadOutlined, HomeOutlined, InfoCircleOutlined, MoreOutlined, PlayCircleOutlined, PlaySquareOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, Input } from "antd";
import { Link } from "react-router-dom";

function Home() {

    return (

        <>

        {/* Desktops Menu Start */}
        <div className='bg-gray8 h-screen w-28 z-30 fixed sm:hidden lg:flex items-center justify-center text-center text-white'>
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
        <div className='hidden md:flex bg-gray2 h-20 items-center justify-center lg:justify-between text-center gap-12 p-4 lg:bg-transparent lg:ml-28 fixed z-40 w-screen -mt-3 lg:m-0 lg:relative lg:w-screen'>

            {/* Logo Start */}
                <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-44 xxl:w-52 flex items-center'/>
            {/* Logo End */}

            {/* Tablets Links Menu Start */}
                <div className='flex gap-8 text-white lg:hidden'>
                <Link to={'#'} className='text-xl font-semibold'>Home</Link>
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

            <div className="z-10 h-113 md:mt-7 lg:w-156 lg:ml-32">
                
                <div className="bg-gradient-to-b from-bgGray to-black lg:from-black">
                    {/* Head Mobile Start */}
                    <div className="text-white flex justify-between p-5 md:hidden">
                        <div className="flex items-center gap-3 justify-center text-center">
                            <div className="text-white">
                                <Link to="#" onClick={() => window.history.back()}>
                                    <ArrowLeftOutlined className="text-white text-3xl font-bold" />
                                </Link>
                            </div>
                            <h1 className="text-3xl font-bold -mt-1">Séries</h1>
                        </div>
                        <Link to={"../search"}>
                            <SearchOutlined className="text-white text-4xl font-bold" />
                        </Link>
                    </div>
                    {/* Head Mobile End */}

                    {/* Options Mobile/Tablet Start */}
                    <div className="p-5 md:bg-black md:fixed md:bg-opacity-55 z-30 w-screen -mt-8 md:mt-16 h-28 flex justify-center items-center text-center lg:hidden">
                        <div className='scrollA items-center justify-between overflow-x-auto max-w-screen-lg xl:max-w-screen-xl xl:overflow-hidden md:overflow-hidden'>
                            <div className='flex mt-5 md:mt-2 w-155 md:justify-center md:items-center md:w-auto gap-4 lg:w-152 mb-3 xl:justify-center xl:items-center xxl:w-153'>
                                <button className="font-bold text-black text-xl w-52 md:w-72 md:text-2xl bg-white rounded-2xl h-9 flex text-center items-center justify-center">Todas as categorias</button>
                                <button className="font-bold text-white text-xl w-24 md:w-36 md:text-2xl bg-transparent border-solid border-2 border-white rounded-2xl h-9 flex text-center items-center justify-center">Séries</button>
                                <button className="font-bold text-white text-xl w-24 md:w-36 md:text-2xl bg-transparent border-solid border-2 border-white rounded-2xl h-9 flex text-center items-center justify-center">Filmes</button>
                            </div>
                        </div>
                    </div>
                    {/* Options Mobile End */}

                    <div className="p-5 -mt-5 lg:p-0 lg:m-0">

                        {/* Principal Serie Start */}
                        <div className="flex justify-center items-center lg:hidden">
                            <div className=" md:mt-40 z-0">
                                <img src="./../../../public/images/doctor.svg" alt="Doctor House" className="w-96 h-96 md:w-35 md:h-35"/>
                            </div>
                            <div className="z-10 mt-64 absolute">
                                <div className="flex gap-5">
                                    <button className=" text-black bg-white w-28 h-9 flex justify-center items-center text-center font-bold gap-2">
                                        <CaretRightOutlined className="text-2xl" />
                                        Assisitr
                                    </button>
                                    <button className="z-10 text-white bg-gray5  bg-opacity-75 w-36 h-9 flex justify-center items-center text-center font-bold gap-2">
                                        <PlusOutlined className="text-2xl" />
                                        Minha Lista
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Principal Serie End */}
                        
                        {/* Games Content Start */}
                        <div className="text-white lg:hidden">

                            {/* Recommending Games Start */}
                            <p className="text-2xl font-semibold md:text-3xl">Jogos para celular e tablet recomendados</p>
                            <div className='items-center justify-between overflow-x-auto max-w-screen-lg md:overflow-hidden'>
                                <div className='flex mt-3 w-154 gap-4 md:gap-9 mb-2'>

                                    {/* One Piece Game Start */}
                                    <button type="button" className="text-start">
                                        <img src="./../../../public/images/onePiece-game.svg" alt="One Piece Game" className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/onePiece-game2.svg" alt="One Piece Game" className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">Um Pedaço:<br/>Tesouros</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Adventure</p>
                                    </button>
                                    {/* One Piece Game End */}

                                    {/* Ninja Game Start */}
                                    <button type="button" className="text-start">
                                        <img src="./../../../public/images/ninja.svg" alt="Ninja Assassin Game" className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/ninja2.svg" alt="Ninja Assassin Game" className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">Ninja Assassin:<br/>Rival</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Action</p>
                                    </button>
                                    {/* Ninja Game End */}
                                                
                                    {/* Fish Game Start */}
                                    <button type="button" className="text-start -mt-6">
                                        <img src="./../../../public/images/fish.svg" alt="Fish Game" className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/fish2.svg" alt="Fish Game" className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">Pesca Mortal</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Relaxing</p>
                                    </button>
                                    {/* Fish Game End */}

                                    {/* Pac Man Start */}
                                    <button type="button" className="text-start -mt-6">
                                        <img src="./../../../public/images/pac-man.svg" alt="Pac Man Game"className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/pac-man2.svg" alt="Pac Man Game"className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">Pac - Man</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Arcade</p>
                                    </button>
                                    {/* Pac Man End */}

                                </div>
                            </div>
                            {/* Recommending Games End */}

                        </div>

                        <div className="text-white font-bold text-2xl mt-3 lg:hidden">
                            Jogos Baseados em filmes e séries
                            <div className="bg-gradient-to-b from-opBg to-opBg2 mt-4 rounded-2xl border-solid border-2 border-white pb-4">
                                <img src="./../../../public/images/one-piece.svg" alt="One Pice" className="rounded-t-2xl" />
                                <div className="flex justify-center">
                                    <video src="./../../../public/images/onePiece3.mp4" controls poster='./../../../public/images/one-piece2.svg' className='w-80 md:w-39' />
                                </div>
                                <div className="flex pl-3 pr-3 mt-3 justify-between">
                                    <div className="flex gap-2">
                                        <img src="./../../../public/images/onePiece-game.svg" alt="One Pice" className="w-20 md:w-36" />
                                        <div>
                                            <p className="text-lg font-semibold md:text-2xl">Um Pedaço:<br/>Tesouros</p>
                                            <p className="text-lg font-semibold text-gray5 md:text-2xl">Adventure</p>
                                        </div>
                                    </div>
                                    <div className="gap-7 md:gap-10 flex">
                                        <button className="text-lg font-semibold">
                                            <PlusOutlined className="text-3xl ml-1 md:text-5xl" />
                                            <p className="w-10 md:w-auto flex justify-center text-center md:text-xl">Minha Lista</p>
                                        </button>
                                        <button className="text-lg font-semibold">
                                            <DownloadOutlined className="text-3xl ml-1 md:text-5xl" />
                                            <p className="w-10 md:w-auto flex justify-center text-center md:text-xl">Baixar Jogo</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Games Content End */}

                        {/* Downloads For User Start */}
                        <div className="text-white font-bold text-2xl mt-5">
                            Downloads para você
                            <div>
                                <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg gap-3'>
                                <div className='flex gap-5 md:mt-2 w-156'>
                                    <img src="./../../../public/images/assistir-offline.svg" alt="Assitir Offline" className="w-72 mt-2 md:w-96"/>
                                    <button type="button" className='bg-none flex-shrink-0'>
                                        <img src="./../../../public/images/ice-age.svg" alt="A Era do Gelo" className='mt-3 h-40 md:h-52'/>
                                    </button>
                                    <button type="button" className='bg-none flex-shrink-0'>
                                        <img src="./../../../public/images/dragon-ball.svg" alt="Dragon Ball Z" className='mt-3 h-40 md:h-52'/>
                                    </button>
                                    <button type="button" className='bg-none flex-shrink-0'>
                                        <img src="./../../../public/images/cuphead.svg" alt="Cuphead" className='mt-3 h-40 md:h-52'/>
                                    </button>
                                    <button type="button" className='bg-none flex-shrink-0'>
                                        <img src="./../../../public/images/chefão.svg" alt="O Poderoso Chefão" className='mt-3 h-40 md:h-52'/>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* Downloads For User End */}

                    </div>
                </div>

                <div className="p-5 -mt-10">

                    {/* Series Start */}
                    <div className="text-white font-bold text-2xl mt-4">
                        Séries para maratonar
                        <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                            <div className='flex gap-5 md:mt-2 w-156'>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/olho.svg" alt="O olho" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/time-rush.svg" alt="time-rush" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/mulher-poderosa.svg" alt="mulher-poderosa" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/muito-lindo.svg" alt="muito-lindo" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/one-piece4.svg" alt="One Piece" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/dark.svg" alt="Dark" className='mt-3 w-28 md:w-36'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Series End */}

                    {/* Filmes Start */}
                    <div className="text-white font-bold text-2xl mt-3">
                        Filmes amados
                        <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                            <div className='flex gap-5 md:mt-2 w-156'>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/divertidamente.svg" alt="divertidamente" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/panda4.svg" alt="Kung Fu Panda" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/chefão.svg" alt="O Poderoso Chefão" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/astronauta.svg" alt="astronauta" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/titans.svg" alt="Jovens Titãs" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/think.svg" alt="O Pensador" className='mt-3 w-28 md:w-36'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Filmes End */}

                    {/* Coming Soon Start */}
                    <div className="text-white font-bold text-2xl mt-3">
                        Lançamentos
                        <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                            <div className='flex gap-5 md:mt-2 w-156'>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/panda4.svg" alt="Kung Fu Panda" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/alita4.svg" alt="Alita Anjo de Combate" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/normais.svg" alt="Os Normais" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/astronauta.svg" alt="astronauta" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/titans.svg" alt="Jovens Titãs" className='mt-3 w-28 md:w-36'/>
                                </button>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/demon-slayer.svg" alt="Demon Slayer" className='mt-3 w-28 md:w-36'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Coming Soon End */}

                    {/* Continue Start */}
                    <div className="text-white font-bold text-2xl mt-3">
                        Continue assistindo
                        <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                            <div className='flex gap-5 md:mt-2 w-156'>

                            {/* Dragon ball Start */}
                            <div className="relative bg-gray6 mt-3 w-36 h-64 rounded-xl overflow-hidden">
                                <button className="absolute inset-0 bg-gray6 bg-opacity-50 flex justify-center items-center text-center h-56">
                                    <PlayCircleOutlined className="font-bold text-5xl"/>
                                </button>
                                <img src="./../../../public/images/dragon-ball.svg" alt="Dragon Ball Z" className='w-full h-56 object-cover -mt-3'/>
                                <div className="flex justify-between">
                                    <button>
                                        <InfoCircleOutlined className="text-white ml-2 mt-2 text-3xl"/>
                                    </button>
                                    <button>
                                        <MoreOutlined className="text-white mt-2 text-3xl"/>
                                    </button>
                                </div>
                            </div>
                            {/* Dragon ball End */}

                            {/* Cuphead Start */}
                            <div className="relative bg-gray6 mt-3 w-36 h-64 rounded-xl overflow-hidden">
                                <button className="absolute inset-0 bg-gray6 bg-opacity-50 flex justify-center items-center text-center h-56">
                                    <PlayCircleOutlined className="font-bold text-5xl"/>
                                </button>
                                <img src="./../../../public/images/cuphead.svg" alt="Cuphead" className='w-full h-56 object-cover -mt-3'/>
                                <div className="flex justify-between">
                                    <button>
                                        <InfoCircleOutlined className="text-white ml-2 mt-2 text-3xl"/>
                                    </button>
                                    <button>
                                        <MoreOutlined className="text-white mt-2 text-3xl"/>
                                    </button>
                                </div>
                            </div>
                            {/* Cuphead End */}

                            {/* Chefão Start */}
                            <div className="relative bg-gray6 mt-3 w-36 h-64 rounded-xl overflow-hidden">
                                <button className="absolute inset-0 bg-gray6 bg-opacity-50 flex justify-center items-center text-center h-56">
                                    <PlayCircleOutlined className="font-bold text-5xl"/>
                                </button>
                                <img src="./../../../public/images/chefão.svg" alt="O Poderoso Chefão" className='w-full h-56 object-cover -mt-3'/>
                                <div className="flex justify-between">
                                    <button>
                                        <InfoCircleOutlined className="text-white ml-2 mt-2 text-3xl"/>
                                    </button>
                                    <button>
                                        <MoreOutlined className="text-white mt-2 text-3xl"/>
                                    </button>
                                </div>
                            </div>
                            {/* Chefão End */}

                            </div>
                        </div>
                    </div>
                    {/* Continue End */}

                </div>
            </div>

            {/* Mobile Menu Start */}
            <div className='md:hidden z-0 fixed bg-gray2 -mt-47 w-full h-24 flex justify-center items-center text-center gap-7'>

                {/* Home Icon Mobile Start */}
                    <button type='button' className='text-center'>
                        <Link to={'#'}>
                            <HomeOutlined className='text-white text-5xl'/>
                            <p className='text-white text-lg font-semibold'>Home</p>
                        </Link>
                    </button>
                {/* Home Icon Mobile End */}

                {/* News Mobile Icon Start */}
                    <button type='button' className='text-center'>
                        <Link to={'../news'}>
                            <PlaySquareOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg font-bold'>Novidades</p>
                        </Link>
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

export default Home;