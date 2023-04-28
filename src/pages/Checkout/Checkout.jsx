import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingTicket,
  getTicketDetail,
} from "../../store/quanLyDatVe/thunkAction";
import "./Checkout.css";
import { quanLyDatVeAction } from "../../store/quanLyDatVe/slice";

const Checkout = () => {
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const { ticketDetail, bookingChairList } = useSelector(
    (state) => state.quanLyDatVe
  );
  console.log(ticketDetail);
  const dispatch = useDispatch();
  const params = useParams();
  const { thongTinPhim, danhSachGhe } = ticketDetail;
  useEffect(() => {
    dispatch(getTicketDetail(params.id));
  }, [dispatch, params]);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container mx-auto mt-[80px]">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="shadow-lg w-4/5 p-8 mx-auto">
            <h1 className="text-4xl font-bold text-center">Màn hình</h1>
          </div>
          <div className="grid grid-cols-[repeat(16,1fr)] gap-1 my-8">
            {danhSachGhe?.map((ds, index) => {
              let classGheVip = ds.loaiGhe === "Vip" ? "gheVip" : "";
              let classGheDaDat = ds.daDat === true ? "gheDaDat" : "";
              let classGheDangDat = "";
              let classGheDaDuocDat = "";
              if (user.taiKhoan === ds.taiKhoanNguoiDat) {
                classGheDaDuocDat = "gheDaDuocDat";
              }
              let i = bookingChairList.findIndex((b) => b.maGhe === ds.maGhe);
              if (i !== -1) {
                classGheDangDat = "gheDangDat";
              }
              return (
                <button
                  onClick={() => {
                    dispatch(quanLyDatVeAction.datVe(ds));
                  }}
                  disabled={classGheDaDat}
                  key={index}
                  className={`ghe ${
                    classGheDaDuocDat
                      ? classGheDaDuocDat
                      : classGheDaDat
                      ? classGheDaDat
                      : classGheDangDat
                      ? classGheDangDat
                      : classGheVip
                  }`}
                >
                  {classGheDaDat ? "X" : ds.stt}
                </button>
              );
            })}
          </div>
          {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Ghế thường</th>
                <th className="px-6 py-3">Ghế VIP</th>
                <th className="px-6 py-3">Ghế đang đặt</th>
                <th className="px-6 py-3">Ghế người khác đặt</th>
                <th className="px-6 py-3">Ghế mình đặt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">Apple MacBook Pro 17"</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table> */}
        </div>
        <div className="min-h-screen">
          <h1 className="text-center text-2xl font-bold">0 đ</h1>
          <hr className="my-5" />
          <h2 className="text-xl">{thongTinPhim?.tenPhim}</h2>
          <div className="my-5">
            <p>Địa điểm: {thongTinPhim?.diaChi}</p>
            <p>Ngày chiếu: {thongTinPhim?.ngayChieu}</p>
          </div>
          <hr />
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 ghe"></div>
              <span>Ghế thường</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 gheVip"></div>
              <span>Ghế VIP</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 gheDangDat"></div>
              <span>Ghế đang đặt</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 gheDaDat"></div>
              <span>Ghế người khác đặt</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 gheDaDuocDat"></div>
              <span>Ghế mình đặt</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center my-5">
            <p>
              Ghế:{" "}
              {bookingChairList
                // .sort((a, b) => { return a.stt - b.stt})
                .map((ghe, index) => (
                  <span key={index}>{ghe.stt}, </span>
                ))}
            </p>
            <p>
              {bookingChairList.reduce(
                (total, item) => (total += item.giaVe),
                0
              )}{" "}
              đ
            </p>
          </div>
          <hr />
          <div className="my-5">
            <p>Email</p>
            <p>{user.email}</p>
          </div>
          <hr />
          <div className="my-5">
            <p>Phone</p>
            <p>{user.soDT}</p>
          </div>
          <hr />
          <button
            onClick={() => {
              const thongTinDatVe = {
                maLichChieu: params.id,
                danhSachVe: bookingChairList,
              };
              console.log(thongTinDatVe);
              dispatch(bookingTicket(thongTinDatVe));
            }}
            className="w-full p-1 my-5 bg-blue-500 text-white rounded-lg"
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
