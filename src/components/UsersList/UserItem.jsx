import "./UserItem.modul.css";

const UserItem = (props) => {
    return (
        <div className="userWrapper">
            <div className="userDataItem">{props.item.firstName}</div>
            <div className="userDataItem">{props.item.maidenName}</div>
            <div className="userDataItem">{props.item.lastName}</div>
            <div className="userDataItem">{props.item.age}</div>
            <div className="userDataItem">{props.item.gender}</div>
            <div className="userDataItem">{props.item.phone}</div>
            <div className="userDataItem">{props.item.address.city}</div>
            <div className="userDataItem">{props.item.address.address}</div>
        </div>
    );
};

export default UserItem;
