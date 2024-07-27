import { Mobile, PC } from '@components/common/MediaQuery'
import MainPagePC from './pc/MainPagePC'
import MainPageMobile from './mobile/MainPageMobile'

const MainPage = () => {
  return (
    <>
      <Mobile>
        <MainPageMobile />
      </Mobile>
      <PC>
        <MainPagePC />
      </PC>
    </>
  )
}

export default MainPage
