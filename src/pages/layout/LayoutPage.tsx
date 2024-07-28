import { Mobile, PC } from '@components/common/MediaQuery'
import LayoutPageMobile from './LayoutPageMobile'
import LayoutPagePC from './LayoutPagePC'

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
