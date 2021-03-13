import React from "react";
const Navbar = () => (
  <nav>
    <ul className="navUl">
      <li className="navLi">
        <a href="/users/sign_out" data-method="delete">
          Logout
        </a>
        <li className="navLi">
        <a href="/departments/">Departments</a>
        </li>
      </li>
    </ul>
  </nav>
)
export default Navbar;