import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { tablesConfig } from './config/tablesConfig';
import TableManager from './components/TableManager';


function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Flex Services</Navbar.Brand>
          <Nav className="me-auto">
            {tablesConfig.map((table) => (
              <Nav.Link as={Link} to={table.path} key={table.path}>{table.name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {tablesConfig.map((table) => (
          <Route
            key={table.path}
            path={table.path}
            element={<TableManager config={table} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
