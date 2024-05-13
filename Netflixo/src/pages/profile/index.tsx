// Imports -
import { BellOutlined, CloseCircleOutlined, DiscordOutlined, DownOutlined, DownloadOutlined, EditOutlined, HomeOutlined, MenuOutlined, PlaySquareOutlined, QuestionCircleOutlined, RightOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// - Imports

function Profile() {

// Scripts -

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [changeProfile, setChangeProfile] = useState(false);

  // Backdrop -
    const toggleBackdrop = () => {
      setShowBackdrop(!showBackdrop);
      if (showBackdrop && showEdit) {
        setShowEdit(false);
      }
      if (showBackdrop && changeProfile) {
        setChangeProfile(false);
      }
    };
  // - Backdrop

  // Edit Profile -
    const toggleEdit = () => {
      setShowBackdrop(!showBackdrop);
      setShowEdit(!showEdit);
    };
  // - Edit Profile

  // Change Profile - 
    const toggleChangeProfile = () => {
      setShowBackdrop(!showBackdrop);
      setChangeProfile(!changeProfile);
    }
  // - Change Profile

  // Profiles ID -
    const { userId } = useParams();

    // Variables -
      let profileName, profileImg, otherImg1, otherName1, otherImg2, otherName2, otherImg3, otherName3, link1,link2,link3;
    // - Variables

    // First User -
      if (userId === '1') {
        profileName = "Usuário 1",
        profileImg = "./../../../public/images/profile1.svg",
        otherImg1 = "./../../../public/images/profile3.svg",
        otherName1 = "Usuário 2"
        otherImg2 = "./../../../public/images/profile2.svg",
        otherName2 = "Gabriel"
        otherImg3 = "./../../../public/images/infantil.svg",
        otherName3 = "infantil",
        link1 = "../profile/2",
        link2 = "../profile/3",
        link3 = "../profile/infantil"
      }
    // - First User

    // Second User - 
      if (userId === '2') {
        profileName = "Usuário 2",
        profileImg = "./../../../public/images/profile3.svg"
        otherImg1 = "./../../../public/images/profile1.svg",
        otherName1 = "Usuário 1"
        otherImg2 = "./../../../public/images/profile2.svg",
        otherName2 = "Gabriel"
        otherImg3 = "./../../../public/images/infantil.svg",
        otherName3 = "infantil",
        link1 = "../profile/1",
        link2 = "../profile/3",
        link3 = "../profile/infantil"
      }
    // - Second User 

    // Third User -
      if (userId === '3') {
        profileName = "Gabriel",
        profileImg = "./../../../public/images/profile2.svg"
        otherImg1 = "./../../../public/images/profile1.svg",
        otherName1 = "Usuário 1"
        otherImg2 = "./../../../public/images/profile3.svg",
        otherName2 = "Usuário 2"
        otherImg3 = "./../../../public/images/infantil.svg",
        otherName3 = "infantil",
        link1 = "../profile/1",
        link2 = "../profile/2",
        link3 = "../profile/infantil"
      }
    // - Third User

    // Infantil -
      if (userId === "infantil") {
        profileName = "Infantil",
        profileImg = "./../../../public/images/infantil.svg"
        otherImg1 = "./../../../public/images/profile1.svg",
        otherName1 = "Usuário 1"
        otherImg2 = "./../../../public/images/profile2.svg",
        otherName2 = "Gabriel"
        otherImg3 = "./../../../public/images/profile3.svg",
        otherName3 = "Usuário 2",
        link1 = "../profile/1",
        link2 = "../profile/3",
        link3 = "../profile/2"
      }
    // - Infantil

  // - Profiles ID

// - Scripts

return (
  <>

  {/* Desktops Menu Start */}
  <div className='bg-gray8 h-screen w-28 z-30 fixed sm:hidden lg:flex items-center justify-center text-center text-white'>
      <div className='flex-col justify-center gap-2 md:gap-12'>

        {/* Profile Start */}
          <div className='bg-none flex flex-col items-center justify-center mt-5 md:mt-6'>
            <img src={profileImg} alt="profile" className='w-16 border-white border-solid border-4 rounded-lg'/>
            <p className='text-white text-xl mt-2 font-semibold'>{profileName}</p>
          </div>
        {/* Profile End */}

        {/* Home Start */}
          <button type='button' className='text-center mt-5'>
            <HomeOutlined className='text-gray3 text-5xl'/>
            <p className='text-gray3 text-xl mt-2 font-semibold'>Home</p>
          </button>
        {/* Home End */}

        {/* News Start */}
          <button type='button' className='text-center mt-5'>
            <Link to={"../news"}>
              <PlaySquareOutlined className='text-gray3 text-5xl'/>
              <p className='text-gray3 text-lg mt-2 font-semibold'>Novidades</p>
            </Link>
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
  <div className='hidden md:flex bg-gray2 h-20 items-center justify-center lg:justify-between text-center gap-12 p-4 lg:bg-transparent lg:ml-28'>

    {/* Logo Start */}
      <img src="./../../../public/images/logo-principal.svg" alt="Logo" className='md:w-44 xxl:w-52 flex items-center'/>
    {/* Logo End */}

      {/* Tablets Links Menu Start */}
        <div className='flex gap-8 text-white lg:hidden'>
          <Link to={'#'} className='text-xl font-semibold'>Home</Link>
          <Link to={'../news'} className='text-xl font-semibold'>Novidades</Link>
          <Link to={'../games'} className='text-xl font-semibold'>Jogos</Link>
          <Link to={'#'} className='text-xl font-bold text-red-700'>Perfil</Link>
        </div>
      {/* Tablets Links Menu End */}

      {/* Buttons Start */}
        <div className='text-white'>

          {/* Search Tablet Icon Start */}
            <button type="button" className='bg-none lg:hidden'>
              <Link to={'../search'}>
                <SearchOutlined className='font-bold text-4xl mr-6'/>
              </Link>
            </button>
          {/* Search Tablet Icon End */}

          {/* Search Desktops Start */}
            <Space.Compact size="large" className='sm:hidden lg:flex'>
              <SearchOutlined className='text-3xl text-gray5 bg-gray6 h-12 w-14 flex justify-center border-solid border-gray5 border-r-0 border-2 rounded-l-md'/>
              <Input className='border-solid border-gray5 bg-gray6 border-2 rounded-md h-12 w-72 justify-center placeholder:text-gray5' type='search' placeholder='Pesquisar filmes ou séries...'/>
            </Space.Compact>
          {/* Search Desktops End */}

          {/* Menu Tablet Icon Start */}
            <button type="button" onClick={toggleEdit} className='lg:hidden'>
              <MenuOutlined className='font-bold text-4xl'/>
            </button>
          {/* Menu Tablet Icon End */}

        </div>
      {/* Buttons End */}
      
  </div>
  {/* Header End */}

  {/* Content Start */}
    <div className='p-4 md:pt-7 flex-col text-white justify-center items-center z-0 h-110 md:h-126 lg:ml-28 lg:h-105 xl:h-102'>
      
      {/* Header Mobile Start */}
        <div className='flex justify-center items-center mb-5 md:hidden'>
          <h1 className='text-3xl font-semibold mr-20'>Meu Netflixo</h1>

          {/* Search Mobile Icon Start */}
            <button type="button" className='bg-none'>
              <Link to={'../search'}>
                <SearchOutlined className='font-bold text-4xl mr-6'/>
              </Link>
            </button>
          {/* Search Mobile Icon End */}

          {/* Menu Mobile Icon Start */}
            <button type="button" onClick={toggleEdit}>
              <MenuOutlined className='font-bold text-4xl'/>
            </button>
          {/* Menu Mobile Icon End */}

        </div>
      {/* Header Mobile End */}

      {/* Change Profile Start */}
        <div className='flex justify-center items-center'>

          {/* Profile Mobile/Tablet Start Button */}
            <button type="button" className='bg-none flex flex-col items-center justify-center lg:hidden' onClick={() => {toggleBackdrop(); toggleChangeProfile();}}>
              <img src={profileImg} alt="profile" className='w-28'/>
              <div className='flex items-center mt-2 gap-3'>
                <p className='text-2xl font-semibold'>{profileName}</p>
                <DownOutlined className='text-2xl font-semibold'/>
              </div>
            </button>
          {/* Profile Mobile/Tablet End Button */}

          {/* Profiles Desktops Start */}
            <div className='sm:hidden lg:flex'>
              <div className='flex-col justify-center items-center text-center'>
                <p className='font-semibold text-4xl mb-9'>Troque de Perfil</p>
                <div className='sm:hidden lg:flex justify-center items-center text-center gap-5 xl:gap-12'>

                  {/* Profile Desktop Start */}
                    <div>
                      <img src={profileImg} alt="profile" className='w-20 md:w-36 xl:w-40 border-white border-solid border-4 rounded-lg'/>
                      <p className='text-white text-xl md:text-2xl md:mt-2 xl:text-3xl font-semibold'>{profileName}</p>
                    </div>
                  {/* Profile Desktop End */}

                  {/* Profile 1 Desktop Start */}
                    <Link to={link1 || "/"} className='cursor-pointer'>
                      <img src={otherImg1} alt="profile" className='w-20 md:w-36 xl:w-40 rounded-lg'/>
                      <p className='text-gray3 text-xl md:text-2xl md:mt-2 xl:text-3xl'>{otherName1}</p>
                    </Link>
                  {/* Profile 1 Desktop End */}

                  {/* Profile 2 Desktop Start */}
                    <Link to={link2 || "/"} className='cursor-pointer'>
                      <img src={otherImg2} alt="profile" className='w-20 md:w-36 xl:w-40 rounded-lg'/>
                      <p className='text-gray3 text-xl md:text-2xl md:mt-2 xl:text-3xl'>{otherName2}</p>
                    </Link>
                  {/* Profile 2 Desktop End */}

                  {/* Profile 3 Desktop Start */}
                    <Link to={link3 || "/"} className='cursor-pointer'>
                      <img src={otherImg3} alt="profile" className='w-20 md:w-36 xl:w-40 rounded-lg'/>
                      <p className='text-gray3 text-xl md:text-2xl md:mt-2 xl:text-3xl'>{otherName3}</p>
                    </Link>
                  {/* Profile 3 Desktop End */}

                </div>
              </div>
            </div>
          {/* Profiles Desktops End */}

        </div>
      {/* Change Profile End */}

      {/* Notifications Mobile/Tablet Start */}
        <div className='mt-5 flex items-center justify-between lg:hidden'>
          <div className='flex items-center'>
            <button type="button" className='bg-red-600 rounded-full w-16 h-16'>
              <BellOutlined className='text-4xl'/>
            </button>
            <p className='text-2xl font-semibold ml-4'>Notificações</p>
          </div>
          <button type="button" className='bg-none'>
            <RightOutlined className='text-3xl'/>
          </button>
        </div>
      {/* Notifications Mobile/Tablet End */}

      {/* Content2 Start */}
        <div className='mt-6 lg:mt-10 xl:flex justify-between items-center'>

          {/* See Now Start */}
            <div className='flex items-center'>
              <button type='button'>
                <img src="./../../../public/images/dragonball-1.svg" className='w-36 md:w-60 xl:w-72' alt="dragon-ball"/>
              </button>
                <div className='ml-5'>
                  <button type='button' className='text-xl font-bold mb-1 bg-none md:text-3xl'>Assistir agora</button>
                  <p className='text-lg md:text-xl'>Majin Boo</p>
                  <p className='text-lg text-gray-500 md:text-xl'>11 de mar.</p>
                </div>
            </div>
          {/* See Now End */}

          {/* News2 Start */}
            <div className='flex items-center mt-6 xl:m-0'>
              <button type='button'>
                <img src="./../../../public/images/netflixo-notifications.svg" className='w-36 md:w-60 xl:w-72' alt="news"/>
              </button>
                <div className='ml-5'>
                  <button type='button' className='font-bold mb-1 bg-none md:text-3xl'>Netflixo - O que vai rolar</button>
                  <p className='text-sm md:text-xl'>Veja oque vai rolar em breve.</p>
                  <p className='text-lg md:text-xl text-gray-500'>12 de mar.</p>
                </div>
            </div>
          {/* News2 End */}

        </div>
      {/* Content2 End */}

      {/* Downloads Mobile/Tablet Start */}
        <div className='mt-5 flex items-center justify-between lg:hidden'>
          <div className='flex items-center'>
            <button type="button" className='bg-cyan-700 rounded-full w-16 h-16'>
              <DownloadOutlined className='text-4xl'/>
            </button>
            <p className='text-2xl font-semibold ml-4'>Downloads</p>
          </div>
          <button type="button" className='bg-none'>
            <RightOutlined className='text-3xl ml-32'/>
          </button>
        </div>
      {/* Downloads Mobile/Tablet End */}

      {/* Movies Series List Start */}
        <div className='lg:hidden'>
          <p className='font-semibold text-2xl mt-4 md:text-3xl'>Séries e filmes que você curtiu</p>
          <div className=' flex items-center justify-between overflow-x-auto max-w-screen-lg'>
            <div className='flex gap-5 md:mt-2 w-150'>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/regularshow.svg" alt="regular-show" className='mt-3 w-28 md:w-36'/>
              </button>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/muito-lindo.svg" alt="muito-lindo" className='mt-3 w-28 md:w-36'/>
              </button>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/brooklyn99.svg" alt="brooklyn99" className='mt-3 w-28 md:w-36'/>
              </button>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/divertidamente.svg" alt="divertidamente" className='mt-3 w-28 md:w-36'/>
              </button>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/supernatural.svg" alt="supernatural" className='mt-3 w-20 md:w-28'/>
              </button>
              <button type="button" className='bg-none flex-shrink-0'>
                <img src="./../../../public/images/mulher-poderosa.svg" alt="mulher-poderosa" className='mt-3 w-20 md:w-36'/>
              </button>
            </div>
          </div>
        </div>
      {/* Movies Series List End */}

      {/* Edits Desktops Start */}
        <div className='sm:hidden mt-10 xl:mt-12 gap-7 lg:grid grid-cols-8 xl:grid-cols-10'>

          {/* Edit profiles Desktop Start */}
            <button type='button' className='flex text-center justify-center items-center gap-5 border-solid border-4 border-white rounded-2xl col-span-3'>
              <EditOutlined className='text-4xl'/>
              <p className='text-white text-2xl font-semibold'>Gerenciar perfis</p>
            </button>
          {/* Edit profiles Desktop End */}

          {/* Settings Desktop Start */}
            <button type='button' className='flex text-center justify-center items-center gap-5 border-solid border-4 border-white rounded-2xl col-span-3'>
              <SettingOutlined className='text-4xl'/>
              <p className='text-white text-2xl font-semibold'>Configurações</p>
            </button>
          {/* Settings Desktop End */}

          {/* Account Desktop Start */}
            <button type='button' className='flex text-center justify-center items-center gap-5 border-solid border-4 border-white rounded-2xl col-span-2'>
              <UserOutlined className='text-4xl'/>
              <p className='text-white text-2xl font-semibold'>Conta</p>
            </button>
          {/* Account Desktop End */}

          {/* Account Desktop Start */}
            <button type='button' className='flex text-center justify-center items-center gap-5 border-solid border-4 border-white rounded-2xl col-span-2'>
              <QuestionCircleOutlined className='text-4xl'/>
              <p className='text-white text-2xl font-semibold'>Conta</p>
            </button>
          {/* Account Desktop End */}

        </div>
      {/* Edits Desktops End */}

    </div>
  {/* Content End */}

    <div className='flex justify-center items-center text-center ml-24 sm:hidden lg:flex'>
      <p className='text-gray3 text-2xl font-semibold'>Versão: 8, 105.0 build 15</p>
    </div>

    {/* Mobile Menu Start */}
      <div className='md:hidden z-10 fixed bg-gray2 -mt-44 w-full h-24 flex justify-center items-center text-center gap-7'>

        {/* Home Icon Mobile Start */}
          <button type='button' className='text-center'>
            <HomeOutlined className='text-gray3 text-5xl'/>
            <p className='text-gray3 text-lg font-semibold'>Home</p>
          </button>
        {/* Home Icon Mobile End */}

        {/* News Mobile Icon Start */}
          <button type='button' className='text-center'>
            <Link to={"../news"}>
              <PlaySquareOutlined className='text-gray3 text-5xl'/>
              <p className='text-gray3 text-lg font-semibold'>Novidades</p>
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

        {/* Mobile Profile2 Icon Start */}
          <button type="button" className='bg-none flex flex-col items-center justify-center'>
            <img src={profileImg} alt="profile" className='w-12' onClick={() => {toggleBackdrop(); toggleChangeProfile();}}/>
            <p className='text-white text-lg font-semibold' onClick={() => {toggleBackdrop(); toggleChangeProfile();}}>{profileName}</p>
          </button>
        {/* Mobile Profile2 Icon End */}

      </div>
    {/* Mobile Menu End */}

    {/* Backdrop Scrip Content Start */}
      {showBackdrop && (
        <div onClick={toggleBackdrop} className='z-20 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-screen lg:hidden' />
      )}
    {/* Backdrop Scrip Content End */}

    {/* Edits Script Mobile/Tablet Start */}
      {showEdit && (
        <div className='fixed z-20 bg-gray4 text-white -mt-33 md:-mt-45 h-27 w-full rounded-t-3xl p-4 lg:hidden' >
          
          {/* Edit Profiles Mobile/Tablet Start */}
            <button type='button' className='flex text-center items-center gap-5'>
              <EditOutlined className='text-5xl'/>
              <p className='text-white text-3xl font-semibold'>Gerenciar perfis</p>
            </button>
          {/* Edit Profiles Mobile/Tablet End */}

          {/* Configurations Mobile/Tablet Start */}
            <button type='button' className='flex text-center items-center gap-5 mt-7'>
              <SettingOutlined className='text-5xl'/>
              <p className='text-white text-3xl font-semibold'>Configurações</p>
            </button>
          {/* Configurations Mobile/Tablet End */}

          {/* Account Mobile/Tablet Start */}
            <button type='button' className='flex text-center items-center gap-5 mt-7'>
              <UserOutlined className='text-5xl'/>
              <p className='text-white text-3xl font-semibold'>Conta</p>
            </button>
          {/* Account Mobile/Tablet End */}

          {/* Doubts Start */}
            <button type='button' className='flex text-center items-center gap-5 mt-7'>
              <QuestionCircleOutlined className='text-5xl'/>
              <p className='text-white text-3xl font-semibold'>Dúvidas</p>
            </button>
          {/* Doubts End */}

          <p className='text-gray3 mt-24'>Versão: 8, 105.0 build 15</p>
        </div>
      )}
    {/* Edits Script Mobile/Tablet End */}

    {/* Change Profile Script Mobile/Tablet Start */}
      {changeProfile && (
        <div className='fixed z-20 bg-gray4 text-white -mt-72 md:-mt-35 h-52 md:h-72 w-full rounded-t-3xl p-4 lg:hidden' >

          <div className='flex justify-between'>
            <p className='font-semibold text-2xl md:text-3xl'>Troque de perfil</p>
            <CloseCircleOutlined className='text font-semibold text-3xl md:text-4xl' onClick={toggleBackdrop}/>
          </div>

          <div className='flex justify-center gap-2 md:gap-12'>
            <div className='bg-none flex flex-col items-center justify-center mt-5 md:mt-6'>
              <img src={profileImg} alt="profile" className='w-20 md:w-36 border-white border-solid border-4 rounded-lg'/>
              <p className='text-white text-xl md:text-2xl md:mt-2 font-semibold'>{profileName}</p>
            </div>

            {/* Profile 1 Start */}
              <button className='bg-none flex flex-col items-center justify-center mt-5 md:mt-6' >
                <Link to={link1 || "/"} className='cursor-pointer'>
                  <img src={otherImg1} alt="profile" className='w-20 md:w-36 rounded-lg'/>
                  <p className='text-gray3 text-xl md:text-2xl md:mt-2'>{otherName1}</p>
                </Link>
              </button>
            {/* Profile 1 End */}

            {/* Profile 2 Start */}
              <button className='bg-none flex flex-col items-center justify-center mt-5 md:mt-6' >
                <Link to={link2 || "/"} className='cursor-pointer'>
                  <img src={otherImg2} alt="profile" className='w-20 md:w-36 rounded-lg'/>
                  <p className='text-gray3 text-xl md:text-2xl md:mt-2'>{otherName2}</p>
                </Link>
              </button>
            {/* Profile 2 End */}

            {/* Profile 3 Start */}
              <button className='bg-none flex flex-col items-center justify-center mt-5 md:mt-6' >
                <Link to={link3 || "/"} className='cursor-pointer'>
                  <img src={otherImg3} alt="profile" className='w-20 md:w-36 rounded-lg'/>
                  <p className='text-gray3 text-xl md:text-2xl md:mt-2'>{otherName3}</p>
                </Link>
              </button>
            {/* Profile 3 End */}

          </div>
        </div>
      )}
    {/* Change Profile Script Mobile/Tablet End */}
  </>
)
}

export default Profile;
