import { configureStore } from '@reduxjs/toolkit'
import { quanLyBannerReducer, quanLyMenuLogo, quanLyMenuLogoReducer, quanLyMovieDateReducer, quanLyMovieDetailReducer, quanLyPhimReducer } from './quanLyPhim/slice'
import { quanLyNguoiDungActions, quanLyNguoiDungReducer } from './quanLyNguoiDung/slice'
import { quanLyDatVeReducer } from './quanLyDatVe/slice'

export const store = configureStore({
    reducer: {
        quanLyPhim: quanLyPhimReducer,
        quanLyNguoiDung: quanLyNguoiDungReducer,
        quanLyBanner: quanLyBannerReducer,
        quanLyMenuLogo: quanLyMenuLogoReducer,
        quanLyMovieDate: quanLyMovieDateReducer,
        quanLyMovieDetail: quanLyMovieDetailReducer,
        quanLyDatVe: quanLyDatVeReducer,
    },
})

store.dispatch(quanLyNguoiDungActions.getUser())