import { colors } from '@constants/colors'
import { ClipLoader } from 'react-spinners'

const LoadingPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ClipLoader color={colors.primary[300]} />
    </div>
  )
}

export default LoadingPage
