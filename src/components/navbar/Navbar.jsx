import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import axios from 'axios';
 

const Navbar = () => {
  const [navData, setNavData] = useState()
  const [showMenu, setShowMenu] = useState({});
  const [showSubMenu, setShowSubMenu] = useState({});
  const [collapse, setCollapse] = useState({
    visible: "collapse show  ",
    hidden: "collapse",
  });
  const [idToCollapse, setIdToCollapse] = useState({});
  const [collapseChild, setCollapseChild] = useState({
    visible: "collapse show  ",
    hidden: "collapse",
  });
  const [idToCollapseChild, setIdToCollapseChild] = useState({});
  const [openSubmenus, setOpenSubmenus] = useState({});


  const getAllMenuList = () => {
    axios.get("https://backend.mayiservicespvtltd.com/api/menu.php?slug=getAllMenuList")
      .then((res) => {
        if (res.data.status =="success" || "true") {
          setNavData(res.data.data)
        }
      
      })
      .catch((err) => {
        console.error(err);
      });
  };
    useEffect(() => {
      getAllMenuList()
    }, [])

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };


  const navigate = useNavigate();

  const moveMenuPage = (url, id) => {

    if (url !== "#" && url !== 'null') {
      navigate(`${url}/${id}`)
    }
  };

  const moveInternalPage = (url,id) => {
    if (url && url !== 'null' && url !== '#') {
      navigate(`/${url}/${id}`)
    }
  };


  const handleCollapseToggle = (nameKey) => {
    setIdToCollapse((prev) => ({
      ...prev,
      [nameKey]: !prev[nameKey],
    }));
  };

  

  const PcNavbar = () => {
    return navData?.map((navItem, i) => (
      <React.Fragment key={navItem.id}>
        <div
          className="d-flex align-items-end gap-1 p-2 fw-semibold py-3 text-nowrap h-100"
          style={i === 0 ? { marginLeft: '50px', cursor: 'pointer' } : { cursor: 'pointer' }}
          onMouseEnter={() => setShowMenu({ [navItem.id]: true })}
          onMouseLeave={() => setShowMenu({ [navItem.id]: false })}
          onClick={() => moveMenuPage(navItem.url, navItem.id)}
        >
          <p
            className=""
            style={showMenu[navItem.id] ? { borderBottom: '3px solid rgb(1, 121, 142)' } : { borderBottom: '3px solid #082b31' }}
          >
            {navItem.name}
          </p>
          {navItem?.submenu?.length > 0 && (
            <p><i className="bi bi-chevron-down"></i></p>
          )}
        </div>

        {showMenu[navItem.id] && navItem?.submenu?.length > 0 && (
          <div
            className="NavbarSubMenuSection p-2 py-4"
            onMouseEnter={() => setShowMenu({ [navItem.id]: true })}
            onMouseLeave={() => setShowMenu({ [navItem.id]: false })}
          >
            <div
              className=" "
              style={{ width: '90%', left: '5%', overflowX: 'hidden', borderRadius: '0 25px 25px 25px' }}
            >
              {navItem?.submenu?.map((menu) => (
                <div
                  className=" d-flex  justify-content-between align-items-center p-2 h-100"
                  key={menu.id}
                  style={showSubMenu[menu.id] ? { borderRight: '1px solid #FD5900', color: '#FD5900', cursor: 'pointer', width: '200px' } : { borderRight: '1px solid #FD5900', color: '#1A2B71', width: '200px' }}
                  onMouseEnter={() => setShowSubMenu({ [menu.id]: true })}
                  onMouseLeave={() => setShowSubMenu({ [menu.id]: false })}
                  onClick={() => moveInternalPage(menu.url, menu.id)}
                >
                  <p>
                    {menu.name}
                    {menu?.chaildmenu?.length > 0 && <FaArrowRightLong style={{ marginLeft: '5px' }} />}
                  </p>

                  {showSubMenu[menu.id] && menu?.chaildmenu?.length > 0 && (
                    <div className="navchaildmenu p-1 " style={{ width: '230px' }}>
                      {menu?.chaildmenu?.map((child, idx) => {
                        return (
                          <div
                            className="navchaildmenu_item mt-2 px-2"
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation(); // Important: stop parent click bubbling
                              moveInternalPage(child.url);
                            }}
                          >
                            {child.name}
                          </div>
                        )
                      })}

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    ));
  };


const mobileNavbar = () =>
  navData?.map(item => (
    <React.Fragment key={item.id}>
      <div
        className="d-flex justify-content-between p-1 align-items-center col-11 m-auto"
        onClick={() =>
          item.url ? moveMenuPage(item.url, item.id)
                   : moveInternalPage(item.url, item.id)
        }
      >
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <p>{item.name}</p>
        </div>

        {/* toggle icon */}
        {item.submenu?.length > 0 && (
          <span
            data-bs-toggle="collapse"
            href={`#navCollaps${item.id}`}
            role="button"
            aria-expanded="false"
            aria-controls={`navCollaps${item.id}`}
            data-bs-dismiss=""
            onClick={() => handleCollapseToggle(item.name.replace(/\s/g, ""))}
            className="fs-4"
          >
            {idToCollapse[item.name.replace(/\s/g, "")] ? (
              <i className="bi bi-dash p-2 fs-2 fw-bold"></i>
            ) : (
              <i className="bi bi-plus p-2 fs-2 fw-bold"></i>
            )}
          </span>
        )}
      </div>

      {/* Sub-menu */}
      {item.submenu?.length > 0 && (
        <div
          className="collapse col-11 m-auto"
          id={`navCollaps${item.id}`}
        >
          <div className="card card-body">
            {item.submenu.map(menu => (
              <div key={menu.id}>
                {/* parent menu item */}
                <div
                  className="col-11 d-flex p-1 justify-content-between align-items-center"
                  style={{
                    color: showSubMenu[menu.id] ? "#FD5900" : "#1A2B71",
                    cursor: "pointer"
                  }}
                  onMouseEnter={() => setShowSubMenu({ [menu.id]: true })}
                  onMouseLeave={() => setShowSubMenu({ [menu.id]: false })}
                >
                  <p
                    onClick={() => moveInternalPage(menu.url, menu.id)}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ margin: 0 }}
                  >
                    {menu.name}
                  </p>

                  {/* plus / minus for child-menu */}
                  {menu.chaildmenu?.length > 0 && (
                    <i
                      className={`bi ${openSubmenus[menu.id] ? "bi-dash" : "bi-plus"} fs-3 fw-bold`}
                      onClick={e => {
                        e.stopPropagation();
                        toggleSubmenu(menu.id);
                      }}
                    />
                  )}
                </div>

                {/* child-menu */}
                {menu.chaildmenu?.length > 0 && (
                  <div
                    className={`navchaildmenumobile text-start ${
                      openSubmenus[menu.id] ? "show" : ""
                    }`}
                    style={{
                      height: openSubmenus[menu.id] ? "auto" : 0,
                      display: openSubmenus[menu.id] ? "block" : "none",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                      color: "#1A2B71"
                    }}
                  >
                    {menu.chaildmenu.map(child => (
                      <div
                        className="navchaildmenumobile_item px-2"
                        key={child.id}
                        onClick={e => {
                          e.stopPropagation();
                          moveInternalPage(child.url, child.id);
                        }}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        {child.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  ));


  return (
    <>
      <div className='navbar'>
        <div className='col-11 m-auto navbar_container'>
          <div className='navbar_logo'>
            <img src={require('../../image/logo2.png')} alt="" />
          </div>
          <div className='navbar_pcmenu'>
            <div className=''>
              {PcNavbar()}
            </div>
          </div>
          <div className='navbar_mobilemenu'>
            <p className='text-white fs-2' style={{ cursor: "pointer" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobile1" aria-controls="offcanvasMobile1"><GiHamburgerMenu /></p>
          </div>
          <div className='navbar_pcmenu'>
            <button className='btn btn-outline-light rounded-5 mt-2' onClick={() => navigate('/log-in')}>Log-in</button>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasMobile1" aria-labelledby="offcanvasMobile1Label" style={{ overflow: "hidden", transition: "1000ms", background: '#082b31', color: 'white', height: '100vh' }} >
        <div className="offcanvas-header p-0">
          <div className='d-flex  justify-content-between col-11 m-auto'>
            <div></div>
            <button type="button" className="btn  m-0 text-white" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="bi bi-x-circle fs-3"></i>
            </button>
          </div>
        </div>
        <div className="offcanvas-body p-0 mt-3">{mobileNavbar()}</div>
      </div>
    </>

  )
}

export default Navbar