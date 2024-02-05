const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const Navbar = styled.div`
  width: 64px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  width: 100%;

  background-color: #0b0c14;
  border-bottom: 1px solid var(--stroke-color, rgba(255, 255, 255, 0.2));
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    a {
      display: flex;
    }
  }
`;

const DesktopNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const { href } = VM.require("buildhub.near/widget/lib.url") || {
  href: () => {},
};

const NavLink = ({ to, children }) => (
  <Link
    key={to}
    to={href({
      widgetSrc: "urbit.near/widget/app",
      params: {
        page: to,
      },
    })}
  >
    {children}
  </Link>
);

const [showMenu, setShowMenu] = useState(false);
const toggleDropdown = () => setShowMenu(!showMenu);

const AppHeader = ({ page, routes, ...props }) => (
  <Navbar>
    <div className="d-flex align-items-center justify-content-between w-100">
      <DesktopNavigation className="container-xl">
        <Link
          style={{ flex: 1 }}
          to={href({
            widgetSrc: "urbit.near/widget/app",
            params: {
              page: "home",
            },
          })}
        >
          <img
            style={{ width: 85, objectFit: "cover" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Urbit_Logo.svg/1200px-Urbit_Logo.svg.png"
          />
        </Link>
        <ButtonGroup style={{ flex: 1 }}>
          {routes &&
            (Object.keys(routes) || []).map((k) => {
              const route = routes[k];
              if (route.hide) {
                return null;
              }
              return (
                <NavLink to={k}>
                  <Button key={k} variant={page === k && "primary"}>
                    {route.init.icon && <i className={route.init.icon}></i>}
                    {route.init.name}
                  </Button>
                </NavLink>
              );
            })}
        </ButtonGroup>
      </DesktopNavigation>
      <MobileNavigation>
        <Link
          style={{ flex: 1 }}
          to={href({
            widgetSrc: "urbit.near/widget/app",
            params: {
              page: "home",
            },
          })}
        >
          <img
            style={{ width: 85, objectFit: "cover" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Urbit_Logo.svg/1200px-Urbit_Logo.svg.png"
          />
        </Link>
        <Button
          type="icon"
          variant="outline"
          className="rounded-2"
          onClick={toggleDropdown}
        >
          <i style={{ fontSize: 24 }} className="bi bi-list"></i>
        </Button>
      </MobileNavigation>
    </div>
    <MobileNavigation>
      {showMenu && (
        <div className="text-white w-100 d-flex flex-column gap-3 mt-3">
          <ButtonGroup className="align-items-stretch">
            {routes &&
              (Object.keys(routes) || []).map((k) => {
                const route = routes[k];
                if (route.hide) {
                  return null;
                }
                return (
                  <NavLink to={k} style={{ textDecoration: "none" }}>
                    <Button
                      key={k}
                      variant={page === k && "primary"}
                      className="w-100"
                    >
                      {route.init.icon && <i className={route.init.icon}></i>}
                      {route.init.name}
                    </Button>
                  </NavLink>
                );
              })}
          </ButtonGroup>
        </div>
      )}
    </MobileNavigation>
  </Navbar>
);

return <AppHeader page={props.page} routes={props.routes} {...props} />;
