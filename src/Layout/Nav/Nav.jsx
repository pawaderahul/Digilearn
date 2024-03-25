import { Modal } from "react-bootstrap";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Nav.scss";
import PropTypes from "prop-types";
import SearchBox from "../../shared-components/Search-box/SearchBox";
import { useState } from "react";

const Nav = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleShowSearchModal = () => setShowSearchModal(true);

  return (
    <section className="navbar">
      <a className="icon-box" href="">
        <img src="/assets/logo/Logo.svg" alt="Digilearn Logo" />
      </a>
      <button className="menu" onClick={() => setSidebarOpen(true)}>
        <IoMdMenu />
      </button>
      <section className="nav-list-box">
        <a href="#about-us">About us</a>
        <a href="#our-class">Our class</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
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
            <a href="#our-class">Our class</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </section>
    </section>
  );
};

Nav.propTypes = { toggleModal: PropTypes.func };
export default Nav;
