import "./UserItem.modul.css";

const UserItem = (props) => {
    return (
        <div className="userWrapper">
            <div className="userDataItem">
                <div>{props.item.firstName}</div>
                <div>{props.item.maidenName}</div>
                <div>{props.item.lastName}</div>
            </div>
            <div className="userDataItem">{props.item.age}</div>
            <div className="userDataItem">{props.item.gender}</div>
            <div className="userDataItem">{props.item.phone}</div>
            <div className="userDataItem">{props.item.address.city}</div>
            <div className="userDataItem">{props.item.address.address}</div>
        </div>
    );
};

export default UserItem;
