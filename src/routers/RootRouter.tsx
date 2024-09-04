import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@components/common/ScrollToTop'
import LoadingPage from 'pages/LoadingPage'

const RootRouter = () => {
  const LayoutPage = lazy(() => import('pages/LayoutPage'))
  const MainPage = lazy(() => import('pages/MainPage'))
  const SignUpPage = lazy(() => import('pages/SignUpPage'))
  const ListPage = lazy(() => import('pages/ListPage'))
  const MyTierlistPage = lazy(() => import('pages/MyTierlistPage'))
  const TierlistModifyPage = lazy(() => import('pages/TierlistModifyPage'))
  const TierlistDetail = lazy(() => import('pages/TierlistDetail'))
  const MyPage = lazy(() => import('pages/MyPage'))
  const LoginPage = lazy(() => import('pages/LoginPage'))
  const SearchPage = lazy(() => import('pages/SearchPage'))

  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<LayoutPage modify={false} />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/my-tierlist" element={<MyTierlistPage />} />
            <Route path="/tierlist/:categoryId" element={<ListPage />} />
            <Route
              path="/tierlist/:categoryId/:topicId"
              element={<ListPage />}
            />
            <Route path="/tierlist-detail/:id" element={<TierlistDetail />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route element={<LayoutPage modify />}>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/tierlist-modify/:id"
              element={<TierlistModifyPage />}
            />
          </Route>
          <Route path="/search-category" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default RootRouter
