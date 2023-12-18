export const MenuItem = ({ menuData }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {menuData.map((item) => (
        <li className="nav-item" key={item.id}>
          <a
            className="nav-link active text-white"
            aria-current="page"
            href={item.link}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

MenuItem.defaultProps = {
  menuData: [
    {
      id: 3,
      name: "Product",
      link: "/product",
      active: false,
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
      active: false,
    },
  ],
};
