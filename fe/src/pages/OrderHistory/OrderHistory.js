import { IconButton } from "@mui/material";

import { productData } from "../../data/mockData";
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinChiTietDonHang } from '../../redux/actions/QuanLyDonHangAction';
import { useEffect } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogDelete from './ToggleDelete'
import {
  DataGrid,

} from '@mui/x-data-grid';
const OrderHistory = () => {
  const username = localStorage.getItem("username");
  const { productDetail } = useSelector(state => state.QuanLyDonHangReducer);
  const dispatch = useDispatch();
  console.log("productdetail:", productDetail);
  useEffect(() => {
    const action = layThongTinChiTietDonHang(username);
    dispatch(action); //dispatch function từ thunk



  }, [dispatch])

  const columns = [
    { field: "id", headerName: "Mã Hóa đơn", headerAlign: "center", align: "center", flex: 1 },
    {
      field: "total",
      headerName: "Tổng thanh toán",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },
    {
      field: "date",
      headerName: "Ngày thanh toán",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "status",
      headerName: "Trạng thái",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },

    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            {HandleView(params)}
            {/* <DialogUpdate values = {params}/> */}
            <DialogDelete values={params} />
          </>
        );
      },
    },
  ];

  return (
    <div className="grid mx-4 gap-y-4">
      <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div

          className="text-xl md:text-3xl font-semibold w-full text-center"
          sx={{ m: "0 0 5px 0" }}
        >
          Danh sách đơn hàng
        </div>
      </div>

      <div
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "bg-dark",
            color: "text-light",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "bg-dark",
            color: "text-light",
          },
        }}
        style={{ overflow: 'scroll' }}
      >
        <DataGrid
          rows={productDetail}
          columns={columns}
          rowHeight={100}
          style={{ minWidth: '1000px' }}
        />
      </div>
    </div>
  );
};

export default OrderHistory;



const HandleView = (params) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton className="userListView" onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <table class="table px-4 py-3">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Hình ảnh</th>
              <th>Tổng giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </Dialog>
    </React.Fragment>
  );
};

