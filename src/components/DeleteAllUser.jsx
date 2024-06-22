import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(deleteUsers())
  }

  return <Wrapper>
    <button className="btn clear-btn" onClick={() => {clearAll()}}>Delete All User</button></Wrapper>;

};

const Wrapper = styled.section`
.clear-btn {
  text-transform: capitalize;
  background: #e74c3c;
  margin-top: 2rem;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  cusror: pointer;
}
`;