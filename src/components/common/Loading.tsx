import { colors } from '@constants/colors'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ClipLoader color={colors.primary[300]} />
    </div>
  )
}

export default Loading
