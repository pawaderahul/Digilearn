import { Dropdown, Modal } from "react-bootstrap";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Nav.scss";
import PropTypes from "prop-types";
import SearchBox from "../../shared-components/Search-box/SearchBox";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubMenuListOpen, setSubMenuListOpen] = useState(false);

  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleShowSearchModal = () => setShowSearchModal(true);

  const toggleSubMenuList = () => setSubMenuListOpen(!isSubMenuListOpen);

  return (
    <section className="navbar">
      <a className="icon-box" href="#home">
        <img src="/assets/logo/Logo.svg" alt="Digilearn Logo" />
      </a>
      <button className="menu" onClick={() => setSidebarOpen(true)}>
        <IoMdMenu />
      </button>
      <section className="nav-list-box">
        <a href="#about-us">About us</a>
        <Dropdown>
          <Dropdown.Toggle>
            Our Class
            <img src="/assets/icons/ArrowDown.svg" alt="Arrow Down" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>UI/UX Design</Dropdown.Item>
            <Dropdown.Item>Web Development</Dropdown.Item>
            <Dropdown.Item>Data Science</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a>Blog</a>
        <a>Contact</a>
      </section>
      <section className="search-box">
        <img
          className="cart"
          src="/assets/icons/ShoppingBag.svg"
          alt="Shopping bag icon"
        />
        <button className="search-mobile" onClick={handleShowSearchModal}>
          <img src="/assets/icons/Search.svg" alt="search icon" />
        </button>
        <Modal show={showSearchModal} onHide={handleCloseSearchModal}>
          <Modal.Header>
            <SearchBox />
          </Modal.Header>
        </Modal>
        <SearchBox />
      </section>
      <section className={"sidebar-menu" + (isSidebarOpen ? " show" : "")}>
        <button className="btn-wrapper" onClick={() => setSidebarOpen(false)}>
          <IoMdClose />
        </button>
        <ul className="menu-list" onClick={() => setSidebarOpen(false)}>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <button onClick={toggleSubMenuList}>
              Our Class{" "}
              {isSubMenuListOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <ul
              className={"sub-menu-list" + (isSubMenuListOpen ? " show" : "")}
            >
              <li>
                <a href="">UI/UX Design</a>
              </li>
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">Data Science</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </section>
    </section>
  );
};

Nav.propTypes = { toggleModal: PropTypes.func };
export default Nav;
