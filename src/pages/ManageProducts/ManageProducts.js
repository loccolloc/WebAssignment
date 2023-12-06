import { IconButton, Button } from "@mui/material";
import { tokens } from "../../theme";
import { productData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ToggleCreate from './ToggleCreate'
import DialogUpdate from './ToggleUpdate'
import DialogDelete from './ToggleDelete'
import {
  DataGrid,

} from '@mui/x-data-grid';
const ManageProducts = () => {


  const columns = [
    { field: "id", headerName: "ID",headerAlign: "center",align: "center", flex: 0.25 },
    { field: "title", headerName: "Tên sản phẩm",headerAlign: "center", align: "center",flex: 1.5 },
    {
      field: "color",
      headerName: "Màu sắc",
      headerAlign: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
      align: "center",

    },
    {
      field: "rom",
      headerName: "ROM",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "price",
      headerName: "Giá thành",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },
    {
      field: "remain_amount",
      headerName: "Số lượng",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },
    {
      field: "thumbnail",
      headerName: "Ảnh chính",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userItem w-100 h-100">
            <img src={params.row.thumbnail } className="imgItem object-contain h-100 w-100 p-2" />

          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Mô tả",
      headerAlign: "center",
      flex: 2,
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
            <DialogUpdate values = {params}/>
            <DialogDelete values = {params}/>
          </>
        );
      },
    },
  ];

  return (
    <div className="grid mx-4 gap-y-4  md:mt-28">
      <div className="" style={{display:'flex',justifyContent:'space-between'}}>
        <div 
        
          className="text-3xl md:text-5xl font-semibold"
          sx={{ m: "0 0 5px 0" }}
        >
          Danh sách người dùng
        </div>
        <div className="hidden md:block">
          <ToggleCreate/>
        </div>
      </div>
      <div className="block md:hidden">
        <ToggleCreate />
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
        style={{overflow: 'scroll'}}
      >
        <DataGrid
          rows={productData}
          columns={columns}
          rowHeight={100}
          style={{minWidth:'1200px'}}
        />
      </div>
    </div>
  );
};

export default ManageProducts;



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
        <DialogTitle padding="0">
          <h3>{params.row.title}</h3>
        </DialogTitle>
        <DialogTitle>
          <h3>{params.row.price}</h3>
        </DialogTitle>
        <DialogContent display="flex" overflowy="auto">
          <DialogContentText>
            <h5>{params.row.description}</h5>
          </DialogContentText>
          <img
            src={params.row.thumbnail}
            width="80%"
            height="80%"
            alt="Image"
            align="center"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

