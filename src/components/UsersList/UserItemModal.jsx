import "./UserItemModal.modul.css";

const UserItemModal = ({ modalActive, setModalActive, modalUser }) => {
    if (modalUser === undefined) {
        modalUser = {
            firstName: "firstName",
            maidenName: "maidenName",
            lastName: "lastName",
            age: "age",
            address: { city: "city", address: "address" },
            height: "height",
            weight: "weight",
            phone: "phone",
            email: "email",
        };
    }
    return (
        <div
            className={modalActive ? "modal_wrapper active" : "modal_wrapper"}
            onClick={() => {
                setModalActive(false);
            }}
        >
            <div
                className={
                    modalActive
                        ? "modal_content_wrapper active"
                        : "modal_content_wrapper"
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <h3>
                        {modalUser.firstName} {modalUser.maidenName}{" "}
                        {modalUser.lastName}
                    </h3>
                </div>
                <div>Age: {modalUser.age}</div>
                <div>
                    Address: {modalUser.address.city},{" "}
                    {modalUser.address.address}
                </div>
                <div>Height: {modalUser.height}</div>
                <div>Weight: {modalUser.weight}</div>
                <div>
                    Tel: <a href="tel:{modalUser.phone}">{modalUser.phone}</a>{" "}
                    Email: 
                    <a href="mailto:{modalUser.email}">{modalUser.email}</a>
                </div>
            </div>
        </div>
    );
};

export default UserItemModal;
