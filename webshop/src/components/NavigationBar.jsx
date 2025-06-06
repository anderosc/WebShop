import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import { CartSumContext } from '../store/CartSumContext';

function NavigationBar() {
  const {loggedIn, setLoggedIn} = useContext(AuthContext);
  const {cartSum} = useContext(CartSumContext);

  const navigate = useNavigate();

    const { t , i18n} = useTranslation();

    const changeLang = (event) => {
      i18n.changeLanguage(event.target.value);
    };

  const logout = () =>{
    setLoggedIn(false)
    sessionStorage.removeItem("token")
    navigate("/")
  }
   
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container>
        <Navbar.Brand as={Link} to=" ">WebShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/" >  {t('navbar_home')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('navbar_shops')}</Nav.Link>
            {/* <Nav.Link as={Link} to="/products">Products</Nav.Link> */}
            <Nav.Link as={Link} to="/cart"> {t('navbar_cart')}</Nav.Link>
            <Nav.Link as={Link} to="/contact"> {t('navbar_contact')}</Nav.Link>



           { loggedIn === true && 
           <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/add-product">{t('navbar_add_product')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-products">{t('navbar_maintain_products')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-categories">{t(`navbar_maintain_categories`)}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-shops">{t(`navbar_maintain_shops`)}</NavDropdown.Item>
            </NavDropdown>}

          </Nav>


          
          <Nav>
          <select onChange={changeLang} value={i18n.language}>
              <option value="eng"> ENG</option>
              <option value="et"> ET</option>
              <option value="fin">🇫🇮 FIN</option>
              <option value="de">🇩🇪 DE</option>
            </select>
            <br />
           { loggedIn === false ?
            <>
          <Nav.Link as={Link} to="/login">{t(`navbar_login`)}  </Nav.Link> 
          <Nav.Link as={Link} to="/signup">{t(`navbar_signup`)} </Nav.Link>
          </> : 
          <>
          <Nav.Link onClick={logout}> LogOut </Nav.Link>
          </>}
          </Nav>
          <Nav.Link > {cartSum.toFixed(2)} € </Nav.Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar