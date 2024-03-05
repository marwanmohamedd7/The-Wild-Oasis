import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const Nav = styled.nav`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <Nav>
    <Logout />
  </Nav>;
}

export default Header;
