
import React from 'react';
import {Menu, Container, MenuItem } from 'semantic-ui-react';
import {Link} from '@reach/router';

const Search = ()=> {
  return (
    
    <Menu inverted>
      <Container>
          <Link to={"/"}> 
          <MenuItem name="Luke APIWalker"/>
          </Link>
          <Link to={"/people"}> 
          <MenuItem name="people" />
          </Link>
          <Link to={"/planets"}> 
          <MenuItem name="planets"/>
          </Link>
      </Container>
    </Menu>
    
  )
}

export default Search;