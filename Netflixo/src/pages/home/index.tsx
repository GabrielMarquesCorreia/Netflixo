import { ArrowLeftOutlined, CaretRightOutlined, DownloadOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Home() {

    return (

        <>
            <div className="bg-gradient-to-b from-bgGray to-black">
                {/* Head Mobile Start */}
                <div className="text-white flex justify-between p-5">
                    <div className="flex items-center gap-3 justify-center text-center">
                        <ArrowLeftOutlined className="text-white text-3xl font-bold" />
                        <h1 className="text-3xl font-bold -mt-1">Séries</h1>
                    </div>
                    <Link to={"../search"}>
                        <SearchOutlined className="text-white text-4xl font-bold" />
                    </Link>
                </div>
                {/* Head Mobile End */}

                <div className="p-5 pt-0">

                    {/* Options Mobile Start */}
                    <div className='scrollA items-center justify-between overflow-x-auto max-w-screen-lg xl:max-w-screen-xl xl:overflow-hidden'>
                        <div className='flex mt-5 w-155 md:w-151 gap-4 lg:w-152 mb-3 xl:justify-center xl:items-center xxl:w-153'>
                            <button className="font-bold text-black text-xl w-52 bg-white rounded-2xl h-9 flex text-center items-center justify-center">Todas as categorias</button>
                            <button className="font-bold text-white text-xl w-24 bg-transparent border-solid border-2 border-white rounded-2xl h-9 flex text-center items-center justify-center">Séries</button>
                            <button className="font-bold text-white text-xl w-24 bg-transparent border-solid border-2 border-white rounded-2xl h-9 flex text-center items-center justify-center">Filmes</button>
                        </div>
                    </div>
                    {/* Options Mobile End */}

                    {/* Principal Serie Start */}
                    <div className="flex justify-center items-center">
                        <div className=" z-0">
                            <img src="./../../../public/images/doctor.svg" alt="Doctor House" className="w-96 h-96"/>
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
                    <div className="text-white">

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

                    <div className="text-white font-bold text-2xl mt-3">
                        Jogos Baseados em filmes e séries
                        <div className="bg-gradient-to-b from-opBg to-opBg2 mt-4 rounded-2xl border-solid border-2 border-white pb-4">
                            <img src="./../../../public/images/one-piece.svg" alt="One Pice" className="rounded-t-2xl" />
                            <div className="flex justify-center">
                                <video src="./../../../public/images/panda2.mp4" controls poster='./../../../public/images/one-piece2.svg' className='w-80' />
                            </div>
                            <div className="flex pl-3 pr-3 mt-3 justify-between">
                                <div className="flex gap-2">
                                    <img src="./../../../public/images/onePiece-game.svg" alt="One Pice" className="w-20" />
                                    <div>
                                        <p className="text-lg font-semibold">Um Pedaço:<br/>Tesouros</p>
                                        <p className="text-lg font-semibold text-gray5">Adventure</p>
                                    </div>
                                </div>
                                <div className="gap-7 flex">
                                    <button className="text-lg font-semibold">
                                        <PlusOutlined className="text-3xl ml-1" />
                                        <p className="w-10 flex justify-center text-center">Minha Lista</p>
                                    </button>
                                    <button className="text-lg font-semibold">
                                        <DownloadOutlined className="text-3xl ml-1" />
                                        <p className="w-10 flex justify-center text-center">Baixar Jogo</p>
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
                            <div className='flex gap-5 md:mt-2 w-150'>
                                <img src="./../../../public/images/assistir-offline.svg" alt="Assitir Offline" className="w-72 mt-2"/>
                                <button type="button" className='bg-none flex-shrink-0'>
                                    <img src="./../../../public/images/ice-age.svg" alt="A Era do Gelo" className='mt-3 w-28 h-40 md:w-36'/>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Downloads For User End */}

                </div>
            </div>

            <div className="p-5 -mt-3">

                {/* Series Start */}
                <div className="text-white font-bold text-2xl mt-5">
                    Séries para maratonar
                    <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                        <div className='flex gap-5 md:mt-2 w-150'>
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
                        </div>
                    </div>
                </div>
                {/* Series End */}

                {/* Filmes Start */}
                <div className="text-white font-bold text-2xl">
                    Filmes amados
                    <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
                        <div className='flex gap-5 md:mt-2 w-150'>
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
                        </div>
                    </div>
                </div>
                {/* Filmes End */}

            </div>
            
        </>

    )

}

export default Home;