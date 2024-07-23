import "./UserItem.modul.css";
import { useState } from "react";
import UserItemModal from "./UserItemModal";

const UserItem = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalUser, setModalUser] = useState(props.usersList[0]);

    const tableRows = props.usersList.map((item) => (
        <tr
            onClick={() => {
                setModalActive(true);
                setModalUser(item);
            }}
            key={item.id}
        >
            <td>{item.firstName}</td>
            <td>{item.maidenName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.phone}</td>
            <td>{item.address.city}</td>
            <td>{item.address.address}</td>
        </tr>
    ));

    return (
        <div className="userWrapper">
            <UserItemModal
                modalActive={modalActive}
                setModalActive={setModalActive}
                modalUser={modalUser}
            />
            <table>
                <thead>
                    <tr className="tableHead">
                        <td>
                            <h3>First name</h3>
                        </td>
                        <td>
                            <h3>Maiden name</h3>
                        </td>
                        <td>
                            <h3>Last name</h3>
                        </td>
                        <td>
                            <h3>Age</h3>
                        </td>
                        <td>
                            <h3>Gender</h3>
                        </td>
                        <td>
                            <h3>Phone</h3>
                        </td>
                        <td>
                            <h3>City</h3>
                        </td>
                        <td>
                            <h3>Address</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
};

export default UserItem;
