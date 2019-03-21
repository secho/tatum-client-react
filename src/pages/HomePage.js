import React from "react";
import { Link } from "react-router-dom";
import ClientsList from "../components/ClientsList";


export default () => (
  <>
    <header>
      <h1>Dashboard</h1>
      <Link to="/another">Detail</Link>
    </header>
    <section>
        <ClientsList/>
    </section>
  </>
);