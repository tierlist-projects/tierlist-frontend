import React, { ChangeEventHandler, DragEventHandler, useState } from 'react'
import * as S from '@styles/tierlist/UploadImage.style'
import { images } from '@constants/images'

const UploadImage = () => {
  const [isActive, setIsActive] = useState(false)
  const [uploadedInfo, setUploadedInfo] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')
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
    setUploadedInfo(file)
    setImageUrl(URL.createObjectURL(file))
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    setIsActive(false)

    if (event.target.files === null) return

    const file = event.target.files[0]
    setUploadedInfo(file)
    setImageUrl(URL.createObjectURL(file))
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
      {uploadedInfo && (
        <img className="preview" src={imageUrl} alt="미리보기" />
      )}
      {!uploadedInfo && (
        <S.InnerDiv>
          <img src={images.tierlist.image} alt="이미지 업로드" />
          <p>이미지를 드래그하거나 클릭 후 등록해주세요.</p>
        </S.InnerDiv>
      )}
    </S.Container>
  )
}

export default UploadImage
