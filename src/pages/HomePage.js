import React from "react";
import { Link } from "react-router-dom";
import TatumCustomers from "../components/TatumCustomers";
import DataAdder from "../components/DataAdder";
import User from "../components/User";


export default () => (
  <>
    <header>
      <h1>Overview</h1>
      <Link to="/another">Detail</Link>
    </header>
    <section>
        <User pre={'My'}>
          <p>toto je user</p>
          <DataAdder/>
        </User>
        <TatumCustomers/>
        <DataAdder/>
    </section>
  </>
);