import styled from "styled-components";

const Nav = styled.nav`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <Nav>header</Nav>;
}

export default Header;
