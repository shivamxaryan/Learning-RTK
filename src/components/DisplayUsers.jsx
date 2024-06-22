import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => {
        return state.users;
    });
    console.log(users)
    const deleteSingleUser = (id) => {
        console.log(id)
        dispatch(removeUser(id))
    }

    return <Wrapper>{
        users.map((user, id) => {
            return <li key={id}>{user}
            <button className="delete-btn" onClick={() => {deleteSingleUser(id)}}><MdDeleteForever className="delete-icon"/></button>
            </li>;
        })
    }</Wrapper>;
};

const Wrapper = styled.section`
li{
width: 100%;
display: flex;
justify-content: space-between;
padding: 1rem;
align-items: center;
border-bottom: 1px solid #ccc;

&:first-child{
    border-top: 1px solid #ccc;
}
}
`;

export default DisplayUsers;