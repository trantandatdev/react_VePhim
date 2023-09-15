import React, { Component } from "react";
import "./BookingVePhim.css";
import ThongTinHangGhe from "./ThongTinHangGhe";
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingVePhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="display-4 text-warning">DAT VE XEM PHIM</h1>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  MAN HINH
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
                
              </div>
              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="mt-2 text-light">
                  DANH SACH GHE BAN CHON
                </div>
                <ThongTinHangGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
