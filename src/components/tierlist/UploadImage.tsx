import React, {
  ChangeEventHandler,
  DragEventHandler,
  useCallback,
  useState,
} from 'react'
import * as S from '@styles/tierlist/UploadImage.style'
import { ReactComponent as ImageIcon } from '@assets/icon/image.svg'
import { colors } from '@constants/colors'
import CButton from '@components/common/CButton'

type Props = {
  thumbnail?: string
  setFile: React.Dispatch<React.SetStateAction<File | null>>
}

const UploadImage = ({ thumbnail, setFile }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [imageUrl, setImageUrl] = useState(
    thumbnail !== undefined && thumbnail !== null && thumbnail !== ''
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

  const onClickRemoveImageButton = useCallback(() => {
    setFile(null)
    setImageUrl('')
  }, [])

  return (
    <S.Container>
      <S.ImageContainer
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
            <ImageIcon width={50} height={50} stroke={colors.primary[200]} />
            <p>이미지를 드래그하거나 클릭 후 등록해주세요.</p>
          </S.InnerDiv>
        )}
      </S.ImageContainer>
      <CButton
        vPadding={12}
        radius={5}
        fontSize={14}
        text="이미지 삭제"
        backgroundColor={colors.error}
        medium
        onClick={onClickRemoveImageButton}
      />
    </S.Container>
  )
}

export default UploadImage
