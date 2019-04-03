import React from "react";
import { Link } from "react-router-dom";
import NewTatumCustomer from "../components/NewTatumCustomer";


export default () => (
  <>
    <header>
      <h1>Another Page</h1>
      <Link to="/">Home</Link>
    </header>
    <section>
      <NewTatumCustomer/>
    </section>
  </>
);