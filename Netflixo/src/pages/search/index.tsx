import { ArrowLeftOutlined, AudioOutlined, PlayCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";

function Search() {
    return (
        <>

            {/* Back Arrow Start */}
            <div className="text-white m-3">
                <Link to="#" onClick={() => window.history.back()}>
                    <ArrowLeftOutlined className="text-4xl font-bold" />
                </Link>
            </div>
            {/* Back Arrow End */}

            {/* Search Start */}
                <div className="mt-5 p-3 w-screen bg-gray4 h-10 flex justify-center items-center text-center">
                    <SearchOutlined className='text-3xl text-white'/>
                    <Input className="bg-gray4 border-none placeholder:text-gray7 placeholder:text-lg" placeholder="Busque séries, jogos e filmes..."/>
                    <AudioOutlined className='text-3xl text-white'/>
                </div>
            {/* Search End */}

            <div className=" text-white m-3">

                {/* Games Content Start */}
                    <div className="mt-3 text-white">

                    {/* Recommending Games Start */}
                        <p className="text-2xl font-semibold md:text-3xl">Jogos para celular e tablet recomendados</p>
                        <div className='scrollA items-center justify-between overflow-x-auto max-w-screen-lg md:overflow-hidden'>
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
                {/* Games Content End */}

                <div className="mt-5">
                    <p className="text-2xl font-semibold md:text-3xl">Séries e filmes recomendados</p>

                    {/* Dragon Ball Start */}
                    <Link to={'#'} className="mt-5 flex justify-between items-center">
                        <img src="./../../../public/images/dragonball-1.svg" className='w-44 md:w-72' alt="dragon-ball"/>
                        <p className="text-lg md:text-2xl font-bold">Dragon Ball Z</p>
                        <PlayCircleOutlined className="text-5xl md:text-6xl font-bold"/>
                    </Link>
                    {/* Dragon Ball End */}

                    {/* Supernatural Start */}
                    <Link to={'#'} className="mt-5 flex justify-between items-center">
                        <img src="./../../../public/images/supernatural2.svg" className='w-44 md:w-72' alt="Supernatural"/>
                        <p className="text-lg md:text-2xl font-bold">Supernatural</p>
                        <PlayCircleOutlined className="text-5xl md:text-6xl font-bold"/>
                    </Link>
                    {/* Supernatural End */}

                    {/* Mickey Start */}
                    <Link to={'#'} className="mt-5 flex justify-between items-center">
                        <img src="./../../../public/images/mickey.svg" className='w-44 md:w-72' alt="Mickey e os 3 mosqueteiros"/>
                        <p className="text-lg md:text-2xl font-bold w-29">Mickey e os 3 mosqueteiros </p>
                        <PlayCircleOutlined className="text-5xl md:text-6xl font-bold"/>
                    </Link>
                    {/* Mickey End */}

                    {/* Assassinato no Expresso do Oriente Start */}
                    <Link to={'#'} className="mt-5 flex justify-between items-center">
                        <img src="./../../../public/images/melhorFilme.svg" className='w-44 md:w-72' alt="Assassinato no Expresso do Oriente"/>
                        <p className="text-lg md:text-2xl font-bold w-29">Assassinato no expresso do oriente </p>
                        <PlayCircleOutlined className="text-5xl md:text-6xl font-bold"/>
                    </Link>
                    {/* Assassinato no Expresso do Oriente End */}

                </div>

            </div>

        </>
    )
}

export default Search;
