const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/",
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: "4",
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = () => {
  return (
    <nav className="shadow-sm ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Car Rental</h1>
          </div>
          <div>
            <ul className="flex items-center gap-6 ">
              {NavLinks.map((data) => (
                <li key={data.id}>
                  <a className="inline-block py-4" href={data.link}>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
