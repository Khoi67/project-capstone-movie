import http from "../constant/api";

export const quanLyPhimServices = {
    getMovieList: (query = '') => {
        return http.get(`QuanLyPhim/LayDanhSachPhim${query}`)
    },
    getBannerList: () => {
        return http.get(`QuanLyPhim/LayDanhSachBanner`)
    },
    getMenuLogo: () => {
        return http.get(`QuanLyRap/LayThongTinHeThongRap`)
    },
    getMovieDate: (query = '') => {
        return http.get(`QuanLyRap/LayThongTinLichChieuHeThongRap${query}`)
    }
}