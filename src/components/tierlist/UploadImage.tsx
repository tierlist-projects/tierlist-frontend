import React, { ChangeEventHandler, DragEventHandler, useState } from 'react'
import * as S from '@styles/tierlist/UploadImage.style'
import { ReactComponent as ImageIcon } from '@assets/icon/image.svg'
import { colors } from '@constants/colors'

type Props = {
  thumbnail?: string
  setFile: React.Dispatch<React.SetStateAction<File | null>>
}

const UploadImage = ({ thumbnail, setFile }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [imageUrl, setImageUrl] = useState(
    thumbnail !== undefined && thumbnail !== null
      ? `https://image.tierlist.site/tierlist/${thumbnail}`
      : '',
  )
  const onDragEnter: DragEventHandler<HTMLLabelElement> = () => {
    setIsActive(true)
  }
  const onDragOver: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault()
  }
  const onDragLeave: DragEventHandler<HTMLLabelElement> = () => {
    setIsActive(false)
  }

  const onDrop: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault()
    setIsActive(false)

    if (event.dataTransfer === null) return

    const file = event.dataTransfer.files[0]
    setImageUrl(URL.createObjectURL(file))
    setFile(file)
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    setIsActive(false)

    if (event.target.files === null) return

    const file = event.target.files[0]
    setImageUrl(URL.createObjectURL(file))
    setFile(file)
  }

  return (
    <S.Container
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      active={isActive}
    >
      <S.FileInput
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
      />
      {imageUrl && <img className="preview" src={imageUrl} alt="미리보기" />}
      {!imageUrl && (
        <S.InnerDiv aria-label="이미지 업로드">
          <ImageIcon width={70} height={70} stroke={colors.primary[200]} />
          <p>이미지를 드래그하거나 클릭 후 등록해주세요.</p>
        </S.InnerDiv>
      )}
    </S.Container>
  )
}

export default UploadImage
