import { HomeOutlined, PlaySquareOutlined, DiscordOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Games() {

    return (

        <>

        {/* Header Start */}
            <div className='hidden md:flex bg-gray2 h-20 items-center justify-center lg:justify-between text-center gap-12 p-4 lg:bg-transparent lg:ml-28 lg:hidden fixed w-screen -mt-28'>

                {/* Logo Start */}
                    <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-44 xxl:w-52 flex items-center lg:hidden'/>
                {/* Logo End */}

                {/* Tablets Links Menu Start */}
                    <div className='flex gap-8 text-white lg:hidden'>
                        <Link to={'#'} className='text-xl font-semibold'>Home</Link>
                        <Link to={'../news'} className='text-xl font-semibold'>Novidades</Link>
                        <Link to={'#'} className='text-xl font-bold text-red-700'>Jogos</Link>
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

                    </div>
                {/* Buttons End */}

                </div>
            {/* Header End */}

            {/* Background Tablet Start */}
                <img src="./../../../public/images/tabletGames.svg" alt="Games Tablet" className="mt-28 sm:hidden md:flex lg:hidden"/>
            {/* Background Tablet End */}

            <div className='m-3 md:m-6 text-white z-10 h-114 md:h-auto lg:hidden'>

                {/* Header Mobile Start */}
                    <div className='flex justify-between md:hidden'>
                        <p className='text-3xl font-semibold'>Jogos</p>

                        {/* Search Mobile Start */}
                            <button type="button" className='bg-none lg:hidden'>
                                <Link to={'../search'}>
                                    <SearchOutlined className='font-bold text-4xl'/>
                                </Link>
                            </button>
                        {/* Search Mobile Ens */}

                    </div>
                {/* Header Mobile End */}

                {/* Content Games Mobile Start */}
                    <div className="bg-gradient-to-b from-bgBlue to-bgPurple mt-5 p-4 text-center text-white rounded-2xl md:hidden">
                        <div className="grid grid-cols-12 gap-3">
                            <img src="./../../../public/images/onePiece-game.svg" alt="One Piece Game" className="col-span-4"/>
                            <img src="./../../../public/images/war.svg" alt="War Game" className="col-span-4"/>
                            <img src="./../../../public/images/nbb.svg" alt="NBB Game" className="col-span-4"/>
                            <img src="./../../../public/images/pac-man.svg" alt="Pac Man Game" className="col-span-4"/>
                            <img src="./../../../public/images/bingo.svg" alt="Bingo Game" className="col-span-4"/>
                            <img src="./../../../public/images/cartoonSoccer.svg" alt="Copa Cartoon Game" className="col-span-4"/>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <img src="./../../../public/images/gamesLogo.svg" alt="Games Logo" className="w-28"/>
                        </div>
                        <p className="font-semibold text-lg mt-3">Acesso ilimitado a jogos<br/>exclusivos</p>
                        <p className="text-lg">Sem anúncios. Sem custos adicionais. Sem compras no jogo. Todos os jogos incluídos na sua aassinatura.</p>
                    </div>
                {/* Content Games End */}

                {/* Games Content Start */}
                    <div className="mt-5">

                        {/* Recently Released Start */}
                            <p className="text-2xl font-semibold md:text-3xl">Lançados recentemente</p>
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
                                            <img src="./../../../public/images/pac-man.svg" alt="Pac Man Game" className="mb-2 md:hidden"/>
                                            <img src="./../../../public/images/pac-man2.svg" alt="Pac Man Game" className="mb-2 sm:hidden md:flex"/>
                                            <p className="font-bold text-md md:text-lg">Pac - Man</p>
                                            <p className="font-bold text-lg text-gray7 md:text-xl">Arcade</p>
                                        </button>
                                    {/* Pac Man End */}

                                </div>
                            </div>
                        {/* Recently Released End */}

                        {/* Sports Games Start */}
                            <p className="text-2xl font-semibold mt-5 md:text-3xl">Jogos de esportes</p>
                            <div className='scrollA items-center justify-between overflow-x-auto max-w-screen-lg md:overflow-hidden'>
                                <div className='flex mt-3 w-154 gap-4 md:gap-9 mb-2'>

                                    {/* Monkeys FC Start */}
                                        <button type="button" className="text-start -mt-5">
                                            <img src="./../../../public/images/monkeysFC.svg" alt="Monkeys FC Game" className="mb-2 md:hidden"/>
                                            <img src="./../../../public/images/monkeysFC2.svg" alt="Monkeys FC Game" className="mb-2 sm:hidden md:flex"/>
                                            <p className="font-bold text-md md:text-lg">Monkeys FC</p>
                                            <p className="font-bold text-lg text-gray7 md:text-xl">Sport</p>
                                        </button>
                                    {/* Monkeys FC End */}

                                    {/* Fórmula 1 Start */}
                                        <button type="button" className="text-start mt-1">
                                            <img src="./../../../public/images/f1.svg" alt="Fórmula 1 Game" className="mb-2 md:hidden"/>
                                            <img src="./../../../public/images/f1-2.svg" alt="Fórmula 1 Game" className="mb-2 sm:hidden md:flex"/>
                                            <p className="font-bold text-md md:text-lg">F1:<br/>The Last Race</p>
                                            <p className="font-bold text-lg text-gray7 md:text-xl">Sport</p>
                                        </button>
                                    {/* Fórmula 1 End */}

                                    {/* NBB Start */}
                                        <button type="button" className="text-start -mt-7">
                                            <img src="./../../../public/images/nbb.svg" alt="NBB Game" className="mb-2 md:hidden"/>
                                            <img src="./../../../public/images/nbb2.svg" alt="NBB Game" className="mb-2 sm:hidden md:flex"/>
                                            <p className="font-bold text-md md:text-lg">NBB</p>
                                            <p className="font-bold text-lg text-gray7 md:text-xl">Sport</p>
                                        </button>
                                    {/* NBB End */}

                                    {/* NFL Start */}
                                        <button type="button" className="text-start -mt-6">
                                            <img src="./../../../public/images/nfl.svg" alt="NFL Game" className="mb-2 md:hidden"/>
                                            <img src="./../../../public/images/nfl2.svg" alt="NFL Game" className="mb-2 sm:hidden md:flex"/>
                                            <p className="font-bold text-md md:text-lg">NFL</p>
                                            <p className="font-bold text-lg text-gray7 md:text-xl">Sport</p>
                                        </button>
                                    {/* NFL End */}

                                </div>
                            </div>
                        {/* Sports Games End */}

                        {/* Board Games Start */}
                            <p className="text-2xl font-semibold mt-5 md:text-3xl">Jogos de tabuleiro</p>
                            <div className='flex mt-3 gap-4 mb-2'>

                                {/* War Game Start */}
                                    <button type="button" className="text-start">
                                        <img src="./../../../public/images/war.svg" alt="War Game" className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/war2.svg" alt="War Game" className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">War Online:<br/>WW2</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Action</p>
                                    </button>
                                {/* War Game End */}

                                {/* Dice Game Start */}
                                    <button type="button" className="text-start mt-1">
                                        <img src="./../../../public/images/dice.svg" alt="King Dice Game"className="mb-2 md:hidden"/>
                                        <img src="./../../../public/images/dice2.svg" alt="King Dice Game"className="mb-2 sm:hidden md:flex"/>
                                        <p className="font-bold text-md md:text-lg">King Dice:<br/>Tables</p>
                                        <p className="font-bold text-lg text-gray7 md:text-xl">Terror</p>
                                    </button>
                                {/* Dice Game End */}
                            </div>
                        {/* Board Games End */}

                    </div>
                {/* Games Content End */}

            </div>

            {/* Mobile Menu Start */}
                <div className='md:hidden z-0 fixed bg-gray2 -mt-46 w-full h-24 flex justify-center items-center text-center gap-7'>

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
                        <Link to={'../news'}>
                            <PlaySquareOutlined className='text-gray3 text-5xl'/>
                            <p className='text-gray3 text-lg font-semibold'>Novidades</p>
                        </Link>
                    </button>
                {/* News Mobile Icon End */}

                {/* Games Icon Start */}
                    <button type='button' className='text-center'>
                        <Link to={'../games'}>
                            <DiscordOutlined className='text-white text-5xl'/>
                            <p className='text-white text-lg font-bold'>Jogos</p>
                        </Link>
                    </button>
                {/* Games Icon End */}

                </div>
            {/* Mobile Menu End */}

            {/* Desktops Start */}
                <div className="sm:hidden lg:flex justify-center items-center mt-10">
                    <img src="./../../../public/images/logo-principal.svg" alt="" className="w-72"/>
                </div>
                <div className="sm:hidden lg:block text-center text-white mt-20">
                    <p className="text-9xl font-bold">404...</p>
                    <br/>
                    <p className="text-6xl">Algo deu errado, por favor clique no botão abaixo para voltar ao início!</p>
                </div>
                <div className="sm:hidden lg:flex text-center justify-center items-center mt-14">
                    <Link to={"../"} type="button" className=" bg-red-600 text-4xl h-24 flex text-center justify-center items-center w-56 text-white font-bold border-solid border-white border-2 rounded-xl">
                        Voltar ao início
                    </Link>
                </div>
            {/* Desktops End */}
            
        </>

    )

}

export default Games;