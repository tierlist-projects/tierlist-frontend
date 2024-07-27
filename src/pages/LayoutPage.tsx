import { Mobile, PC } from '@components/common/MediaQuery'
import LayoutPageMobile from './mobile/LayoutPageMobile'
import LayoutPagePC from './pc/LayoutPagePC'

type Props = {
  modify: boolean
}

const LayoutPage = ({ modify }: Props) => {
  return (
    <>
      <Mobile>
        <LayoutPageMobile />
      </Mobile>
      <PC>
        <LayoutPagePC modify={modify} />
      </PC>
    </>
  )
}

export default LayoutPage
