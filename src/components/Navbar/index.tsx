import Search from '../Search';
import { Nav, Ul, Li, A } from './styles';

export default function Navbar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li><A href="/cart">Cart</A></Li>
      </Ul>
      <Search />
    </Nav>
  );
}
