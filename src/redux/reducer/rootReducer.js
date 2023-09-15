import { combineReducers } from "redux";
import StoreVePhim from "./StoreVePhim";

const rootReducer= combineReducers({
    // store tong cua ung dung
    StoreVePhim: StoreVePhim
})
export default rootReducer