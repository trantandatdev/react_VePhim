import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/action/phimAction";

class ThongTinHangGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE DA DAT
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE DANG DAT
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE CHUA DAT
          </span>
        </div>
        <div classname="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 30 }}>
                <th>So Ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>TONG</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  ).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.StoreVePhim.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinHangGhe);
