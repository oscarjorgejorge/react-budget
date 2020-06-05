import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <button onClick={startLogout}>Log Out</button>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Go home
      </NavLink>
    </div>
    <div>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
