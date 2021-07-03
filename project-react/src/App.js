import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

export default class App extends Component {
  state = {
    title: "Leja Aprianza",
    users: [
      {
        id: 1,
        nama: "leja",
        alamat: "Bandar Lampung",
        umur: 24,
        noHp: "08888887",
      },
      {
        id: 2,
        nama: "Aprianza",
        alamat: "Bandar Jaya",
        umur: 25,
        noHp: "08888888",
      },
      {
        id: 3,
        nama: "Rian",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}
