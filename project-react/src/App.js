import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CreateUserContainer from "./container/CreateUserContainer";
import EditUserContainer from "./container/EditUserContainer";
import DetailUserContainer from "./container/DetailUserContainer";

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
        nama: "Rianuq",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 4,
        nama: "Rianiq",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 5,
        nama: "Rianaq",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 6,
        nama: "Rianow",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 7,
        nama: "Rianew",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 8,
        nama: "Rianuw",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 9,
        nama: "Rianiw",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 10,
        nama: "Rianaw",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 11,
        nama: "Rianot",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 12,
        nama: "Rianet",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 13,
        nama: "Rianut",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 14,
        nama: "Rianit",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 15,
        nama: "Rianat",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 16,
        nama: "Rianos",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 17,
        nama: "Rianes",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 18,
        nama: "Rianus",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 19,
        nama: "Rianis",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 20,
        nama: "Rianas",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 21,
        nama: "Riano",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 22,
        nama: "Riane",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 23,
        nama: "Rianu",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 24,
        nama: "Riani",
        alamat: "Bandar Tengah",
        umur: 26,
        noHp: "08888889",
      },
      {
        id: 25,
        nama: "Riana",
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
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/edit/:id">
            <EditUserContainer />
          </Route>
          <Route path="/detail/:id">
            <DetailUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
