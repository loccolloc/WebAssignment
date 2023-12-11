import { userData } from "../../data/mockData";
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import {
  DataGrid,

} from '@mui/x-data-grid';
const ManageUsers = () => {

  const columns = [
    { field: "id", headerName: "ID",align: "center", headerAlign: "center", flex: 0.25 },
      
    { field: "username", headerName: "Tên người dùng", align: "center",headerAlign: "center", flex: 1.5 },
    {
      field: "password",
      headerName: "Mật khẩu",
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "full_name",
      headerName: "Họ và tên",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "phone_number",
      headerName: "Số điện thoại",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "avatar",
      headerName: "Ảnh đại diện",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.image === "" &&  
            <img src={`https://genk.mediacdn.vn/thumb_w/640/2016/4-success-kid-3596018b-1458201719100-1458267903230.jpg`} width="100%" height="100%"/>}
          </div>
        );
      },
    },
    {
      field: "role",
      headerName: "Vai trò",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },

    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",

      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <ToggleUpdate values={params}/>
            <ToggleDelete  values={params}/>
          </>
        );
      },
    },
  ];

  return (
    <div className="grid mx-4 gap-y-4  md:mt-28" style={{marginTop:'70px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
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
          rows={userData}
          columns={columns}
          rowHeight={100}
          style={{minWidth:'1000px'}}
        />
      </div>
    </div>
  );
};

export default ManageUsers;