import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    selectUsersList,
} from "../../app/store/reducers/usersListSlice";
import { useEffect } from "react";
// import UserItem from "./UserItem";
import "./UsersList.modul.css";
import { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";

const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        // eslint-disable-next-line
    }, []);

    const usersList = useSelector(selectUsersList);
    const data = usersList;

    // const usersItems = usersList.map((item) => (
    //     <UserItem key={item.id} item={item} />
    // ));
    // console.log(usersList);

    const columns = useMemo(
        () => [
            {
                accessorKey: "firstName", //access nested data with dot notation
                header: "Имя",
                size: 50,
            },
            {
                accessorKey: "maidenName", //access nested data with dot notation
                header: "Фамилия",
                size: 50,
            },
            {
                accessorKey: "lastName", //access nested data with dot notation
                header: "Отчество",
                size: 50,
            },
            {
                accessorKey: "age", //access nested data with dot notation
                header: "Возраст",
                size: 50,
            },
            {
                accessorKey: "gender", //access nested data with dot notation
                header: "Пол",
                size: 50,
            },
            {
                accessorKey: "phone", //access nested data with dot notation
                header: "Номер телефона",
                size: 50,
            },
            {
                accessorKey: "address.city", //access nested data with dot notation
                header: "Город",
                size: 50,
            },
            {
                accessorKey: "address.address", //access nested data with dot notation
                header: "Адрес",
                size: 50,
            },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return (
        <div className="usersList">
            <h1>Users List</h1>
            {/* <div className="usersListWrapper">{usersItems}</div> */}
            <MaterialReactTable table={table} />
        </div>
    );
};

export default UsersList;
