import React from "react";
import { Link } from "react-router-dom";
import DataAdder from "../components/DataAdder";
import ClientsList from "../components/ClientsList";


export default () => (
  <>
    <header>
      <h1>Another Page</h1>
      <Link to="/">Home</Link>
    </header>
    <section>
        <DataAdder/>
        <DataAdder/>
        <ClientsList/>
    </section>
  </>
);