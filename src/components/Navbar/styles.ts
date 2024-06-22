import styled from "styled-components";


export const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  margin-right: 10px;
`;

export const A = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  &:hover {
    background-color: #555;
  }
`;
