import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <header className="center-it">
      <div className="content center-content">
        <Link
          to="/"
          style={{
            color: `#F7DD56`,
            textDecoration: `none`,
          }}
        >
          <img
            className="header-logo"
            src="https://conf.utahjs.com/img/header-logo.png"
            alt="UTAHJS"
            style={{
              float: "left",
              marginRight: "20px",
              verticalAlign: "middle",
              border: "0",
              height: "65px",
            }}
          />
        </Link>
        <div
          className="title"
          style={{
            float: "left",
            fontSize: "25px",
            verticalAlign: "middle",
            color: "#f7dd56",
            fontWeight: "bold",
            fontFamily: "Domine, serif",
            marginTop: "22px",
            marginBottom: "11px",
            marginLeft: "10px",
          }}
        >
          2020 UtahJS Conference - Online Series
        </div>
      </div>
    </header>
    <header>
      <nav className="center-it">
        <div className="center-content">
          <Link to="/">HOME</Link>
          <Link to="https://vi.to/hubs/utahjs-conference-series">TICKETS</Link>
          <Link to="/code-of-conduct">CODE OF CONDUCT</Link>
          <Link
            to="/https://teespring.com/utahjs-2020-online-series"
            target="_blank"
          >
            MERCH
          </Link>
          <Link to="/sponsor">SPONSOR US</Link>
          <Link to="/speakers-2019">PAST SPEAKERS</Link>
          <Link to="http://eepurl.com/hcwmDf">MAILING LIST</Link>
          <Link to="http://utahjs.com">UTAHJS.COM</Link>
          <Link to="http://slack.utah.js">SLACK</Link>
        </div>
      </nav>
    </header>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
