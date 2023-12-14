import { newsData } from '../../data/news'
import * as React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,

} from "@material-tailwind/react";
import ToggleUpdate from './ToggleUpdate';
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachDonHangAction } from '../../redux/actions/QuanLyDonHangAction';
import { useEffect } from 'react'
import {
    DataGrid,

} from '@mui/x-data-grid';
const ManageOrder = () => {
    const { arrProduct } = useSelector(state => state.QuanLyDonHangReducer);
    const dispatch = useDispatch();
    console.log("hello", arrProduct);
    useEffect(() => {
        const action = layDanhSachDonHangAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    const columns = [
        { field: "id", headerName: "Mã đơn hàng", headerAlign: "center", align: "center", flex: 1 },
        { field: "username", headerName: "Người dùng", headerAlign: "center", align: "center", flex: 1 },
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
            field: "billing_address",
            headerName: "Địa chỉ nhận hàng",
            headerAlign: "center",
            flex: 1,
            align: "center",

        },
        {
            field: "note",
            headerName: "Ghi chú",
            headerAlign: "center",
            flex: 1,
            align: "center",

        },
        {
            field: "status",
            headerName: "Tình trạng",
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
                        <ToggleUpdate values={params} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="grid mx-4 gap-y-4" >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div

                    className="text-xl md:text-3xl font-semibold"
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
                    rows={arrProduct}
                    columns={columns}
                    rowHeight={100}
                    style={{ minWidth: '1000px' }}
                />
            </div>
        </div>
    );
};

export default ManageOrder;

const HandleView = (params) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <React.Fragment>
            <IconButton className="userListView" onClick={handleOpen}>
                <VisibilityIcon />
            </IconButton>

            <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
                <div className='p-3 w-full'>
                    <DialogHeader>Đơn hàng {params.row.id}</DialogHeader>
                    <DialogBody style={{ height: '400px', overflow: 'auto', scrollbarWidth: '0px' }}>
                        <p>Mã đơn hàng: {params.row.id}</p>
                        <p>Người đặt hàng: {params.row.username}</p>
                        <p>Tổng thanh toán: {params.row.total}</p>
                        <p>Ngày đặt hàng: {params.row.date}</p>
                        <p>Địa chỉ nhận hàng: {params.row.billing_address}</p>
                        <p>Ghi chú: {params.row.note}</p>
                        <div className='w-full overflow-x-auto'>
                            <table class="table" style={{ minWidth: '600px' }}>
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Tổng giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                        <td>1961</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                        <td>1961</td>
                                        <td>1961</td>

                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                        <td>1961</td>
                                        <td>1961</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DialogBody>
                </div>
            </Dialog>
        </React.Fragment>
    );
};