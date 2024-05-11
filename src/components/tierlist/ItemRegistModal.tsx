import * as S from '@styles/tierlist/createModal.style'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import { Pagination } from '@mui/material'
import { images } from '@constants/images'
import useItemRegist from '@hooks/tierlist/useItemRegist'
import { RankType } from 'types/tierlist/tierlist.type'
import UploadImage from './UploadImage'

type Props = {
  closeModal: () => void
  ranks: RankType
  setRanks: React.Dispatch<React.SetStateAction<RankType>>
}

const ItemRegistModal = ({ closeModal, ranks, setRanks }: Props) => {
  const {
    itemName,
    isDropItems,
    searchedItemList,
    itemTotalPages,
    onChangeItemName,
    onClickItemPage,
    onClickItem,
    onClickCreateItem,
    setIsDropItems,
    setItemImage,
    registItem,
  } = useItemRegist()

  return (
    <S.Container>
      <S.Title>아이템 등록</S.Title>
      <S.Content>
        <S.InputBlock>
          <p>이름</p>
          <S.InputWithDrop>
            <S.Input
              type="text"
              placeholder="토픽을 입력하세요."
              value={itemName}
              onChange={onChangeItemName}
              onFocus={() => setIsDropItems(true)}
            />
            {isDropItems && (
              <S.Drop>
                <S.DropContent onClick={onClickCreateItem}>
                  <img src={images.common.plusBlack} alt="토픽 생성" />
                  <p>생성</p>
                </S.DropContent>
                {searchedItemList.map((item) => (
                  <S.DropContent
                    key={item.id}
                    onMouseDown={() => {
                      onClickItem(item.name, item.id)
                    }}
                  >
                    {item.name}
                  </S.DropContent>
                ))}
                {itemTotalPages > 0 && (
                  <Pagination
                    count={itemTotalPages}
                    size="small"
                    onChange={onClickItemPage}
                  />
                )}
              </S.Drop>
            )}
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>이미지</p>
          <UploadImage setFile={setItemImage} />
        </S.InputBlock>
      </S.Content>
      <S.ButtonBlock>
        <CButton
          text="등록"
          fontSize={20}
          onClick={async () => {
            const newItem = await registItem()
            if (newItem && ranks) {
              newItem.orderIdx = ranks.noneRanks.length
              const newNoneRanks = [...ranks.noneRanks]
              newNoneRanks[newNoneRanks.length] = newItem
              setRanks((prev) => ({
                ...prev,
                noneRanks: newNoneRanks,
              }))
              closeModal()
            }
          }}
        />
        <CButton
          text="취소"
          fontSize={20}
          backgroundColor={colors.grey.primary}
          onClick={closeModal}
        />
      </S.ButtonBlock>
    </S.Container>
  )
}

export default ItemRegistModal
