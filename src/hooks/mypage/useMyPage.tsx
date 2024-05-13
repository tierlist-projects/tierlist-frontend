import { uploadImage } from '@apis/common/imageApi'
import {
  changeNickname,
  changePassword,
  changeProfileImage,
} from '@apis/mypage/mypageApi'
import { userState } from '@atom/userAtom'
import { removeCookie } from '@utils/cookie'
import { ChangeEventHandler, useCallback, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { TierlistErrorType } from 'types/tierlist/category.type'

const useMyPage = () => {
  const [user, setUser] = useRecoilState(userState)
  const [isEdit, setIsEdit] = useState(false)
  const [pwErrorText, setPwErrorText] = useState('')
  const nicknameRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)
  const pwCheckRef = useRef<HTMLInputElement>(null)

  const onChangeNickname = useCallback(() => {
    if (!nicknameRef.current) return

    changeNickname(nicknameRef.current.value)
      .then(() => {
        setUser((prev) => {
          if (!prev || !nicknameRef.current) return null
          return { ...prev, nickname: nicknameRef.current.value }
        })
        setIsEdit(false)
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }, [user, nicknameRef.current])

  const onChangeProfile: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()

    if (event.target.files === null) return

    const file = event.target.files[0]

    const formData = new FormData()
    formData.append('image', file)

    uploadImage(formData)
      .then((res) => {
        const [newImage] = res.imageNames
        changeProfileImage(newImage)
          .then(() => {
            setUser((prev) => {
              if (!prev) return null
              return { ...prev, profilImage: newImage }
            })
          })
          .catch((err) => {
            const data = err.response.data as TierlistErrorType
            alert(data.message)
          })
      })
      .catch((err) => {
        const data = err.response.data as TierlistErrorType
        alert(data.message)
      })
  }

  const onClickPwChange = useCallback(() => {
    if (!pwRef.current || !pwCheckRef.current) return

    const lenRegex = /^.{8,20}$/
    const pwRegex = /^[!_@$%^&+=A-Za-z0-9]{8,20}$/
    if (pwRef.current!.value === '' || pwCheckRef.current.value === '') {
      setPwErrorText('* 비밀번호를 입력해주세요.')
    } else if (!lenRegex.test(pwRef.current!.value)) {
      setPwErrorText('* 비밀번호는 8 ~ 20자여야 합니다.')
    } else if (!pwRegex.test(pwRef.current!.value)) {
      setPwErrorText(
        '* 영문 대문자, 소문자, 숫자, 특수문자 ! _ @ $ % ^ & + = 만 허용합니다',
      )
    } else if (pwRef.current.value !== pwCheckRef.current.value) {
      setPwErrorText('* 비밀번호가 일치하지 않습니다.')
    } else {
      setPwErrorText('')
      changePassword(pwRef.current.value, pwCheckRef.current.value)
        .then(() => {
          alert('비밀번호를 변경하였습니다. 재로그인해주세요.')
          removeCookie('refresh-token')
          window.location.replace('/')
        })
        .catch((err) => {
          const data = err.response.data as TierlistErrorType
          alert(data.message)
        })
    }
  }, [pwRef.current, pwCheckRef.current])

  return {
    user,
    isEdit,
    nicknameRef,
    pwRef,
    pwCheckRef,
    pwErrorText,
    setIsEdit,
    onChangeProfile,
    onChangeNickname,
    onClickPwChange,
  }
}

export default useMyPage
