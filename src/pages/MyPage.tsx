import React from 'react'
import * as S from '@styles/mypage/MyPage.style'
import useMyPage from '@hooks/mypage/useMyPage'
import { images } from '@constants/images'
import CButton from '@components/common/CButton'

const MyPage = () => {
  const {
    user,
    isEdit,
    nicknameRef,
    pwRef,
    pwCheckRef,
    curPwRef,
    pwErrorText,
    setIsEdit,
    onChangeProfile,
    onChangeNickname,
    onClickPwChange,
  } = useMyPage()

  if (!user) return null

  return (
    <S.Container>
      <S.UserInfo>
        <S.ProfileBlock>
          <S.ProfileImage
            src={
              user.profilImage
                ? `https://image.tierlist.site/tierlist/${user.profilImage}`
                : images.common.defaultProfile
            }
            alt="프로필사진"
          />
          <S.ProfileLabel>
            <S.FileInput
              type="file"
              accept="image/png, image/jpeg"
              onChange={onChangeProfile}
            />
            이미지 변경
          </S.ProfileLabel>
        </S.ProfileBlock>
        <S.NicknameBlock>
          {!isEdit ? (
            <>
              <S.Nickname>{user.nickname}</S.Nickname>
              <S.Button
                onClick={() => {
                  setIsEdit((prev) => !prev)
                }}
              >
                수정
              </S.Button>
            </>
          ) : (
            <>
              <S.NicknameInput
                type="text"
                defaultValue={user.nickname}
                ref={nicknameRef}
              />
              <S.Button onClick={onChangeNickname}>확인</S.Button>
            </>
          )}
        </S.NicknameBlock>
      </S.UserInfo>
      <S.Content>
        <S.PasswordBlock>
          <p>비밀번호 변경</p>
          <S.InputBlock>
            <input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              ref={curPwRef}
            />
            <input
              type="password"
              placeholder="변경할 비밀번호를 입력해주세요."
              ref={pwRef}
            />
            <input
              type="password"
              placeholder="변경할 비밀번호를 재입력해주세요."
              ref={pwCheckRef}
            />
            <S.ErrorText>{pwErrorText}</S.ErrorText>
          </S.InputBlock>
          <CButton text="변경" radius={10} onClick={onClickPwChange} />
        </S.PasswordBlock>
      </S.Content>
    </S.Container>
  )
}

export default MyPage
