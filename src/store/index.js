import { configureStore } from '@reduxjs/toolkit'
import { quanLyBannerReducer, quanLyMenuLogo, quanLyMenuLogoReducer, quanLyMovieDateReducer, quanLyPhimReducer } from './quanLyPhim/slice'
import { quanLyNguoiDungActions, quanLyNguoiDungReducer } from './quanLyNguoiDung/slice'

export const store = configureStore({
    reducer: {
        quanLyPhim: quanLyPhimReducer,
        quanLyNguoiDung: quanLyNguoiDungReducer,
        quanLyBanner: quanLyBannerReducer,
        quanLyMenuLogo: quanLyMenuLogoReducer,
        quanLyMovieDate: quanLyMovieDateReducer,
        
    },
})

store.dispatch(quanLyNguoiDungActions.getUser())