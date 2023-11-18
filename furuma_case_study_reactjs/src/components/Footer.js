export const Footer = () => {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
              <a href="https://furamavietnam.com/vi/" className="header-logo">
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                  alt="logo "
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col col-md-auto col-lg-3 d-flex">
              <div className="catalog-widget d-none d-sm-block">
                <div className="catalog-widget-inside">
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                    target="_blank"
                  >
                    <div className="widget-tripadvisor">
                      <div className="inside">
                        <div className="widget-tripadvisor-logo">
                          <img
                            src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                            alt
                          />
                        </div>
                        <div className="widget-tripadvisor-rating">
                          <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                            alt
                          />
                        </div>
                        <div className="widget-tripadvisor-text">
                          2,746 Reviews
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="catalog-widget-toggle js-catalog-widget-toggle" />
                </div>
              </div>
              <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto" />
            </div>
            <div className="col-sm-3 d-none d-lg-block">
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-placeholder" />
                </div>
                <div className="header-contact-txt">
                  <p>
                    103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ
                    hành Sơn, Tp. Đà Nẵng, Việt Nam
                  </p>
                  <p className="txt-sm">
                    <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 d-none d-lg-block">
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-telephone" />
                </div>
                <div className="header-contact-txt">
                  <p className="txt-lg">84-236-3847 333/888</p>
                </div>
              </div>
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-closed-envelope" />
                </div>
                <div className="header-contact-txt">
                  <a href="mailto:reservation@furamavietnam.com">
                    reservation@furamavietnam.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto d-flex d-lg-none">
              <button
                className="navbar-btn"
                data-target="#modalNavigation"
                data-toggle="modal"
              >
                <i className="icon-menu" />
              </button>
              <div
                className="modal fade modal-fullscreen-menu"
                id="modalNavigation"
              >
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                >
                  <i className="icon-close" />
                  CLOSE
                </button>
                <div className="modal-dialog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
