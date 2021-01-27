import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { AddRecipeView } from './views/AddRecipeView'
import { FavoritesView } from './views/FavoritesView'
import { ProfileView} from './views/ProfileView'
import { RecipesView } from  './views/RecipesView'
import { HomeView } from './views/HomeView'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation () {

    return ( <div>
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">Recipe.io</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/recipes">
            View Recipes
          </NavDropdown.Item>
          <NavDropdown.Item href="/addrecipe">
            Create Recipes
          </NavDropdown.Item>
          <NavDropdown.Item href="/favorites">
            Favorites
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Followers
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  <div>

  </div>
  <div>
			<Switch>
                <Route exact path= "/profile" component={ProfileView}/>
				<Route exact path="/recipes" component={RecipesView} />
				<Route exact path="/favorites" component={FavoritesView}/>
                <Route exact path="/addrecipe" component={AddRecipeView}/>
                <Route exact path="/home" component={HomeView}/>
			</Switch>
		</div>
  </div>)
}

export default Navigation