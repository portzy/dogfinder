import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  if (!dogs) return null; 

  const links = dogs.map(dog => {
    if (!dog) return null; 

    return (
      <NavLink 
        key={dog} 
        to={`/dogs/${dog.toLowerCase()}`} 
      >
        {dog}
      </NavLink>
    );
  });

  return (
    <nav>
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {links}
    </nav>
  );
}

export default Nav;
