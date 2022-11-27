import { FC, useState } from "react";
import "./styles.css";
import Logo from "./logo.png";

const menuItems = [
  {
    name: "DASHBOARD",
    icon: "apps",
  },
  // {
  //   name: "Subscriptions",
  //   icon: "subscriptions",
  // },
  // {
  //   name: "Library",
  //   icon: "video_library",
  // },
  {
    name: "GYM MEMBER",
    // icon: "explore",
    items: ["ADD", "REMOVE"],
  },
  {
    name: "PERSONAL TRAINER",
    // icon: "settings",
    items: ["ADD", "REMOVE"],
  },
  // {
  //   name: "Trending",
  //   icon: "mode_heat",
  // },
  // {
  //   name: "Music",
  //   icon: "music_note",
  // },
  // {
  //   name: "Watch Later",
  //   icon: "schedule",
  // },
];

const Icon = ({ icon }: { icon: string }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-list" viewBox="2 2 8 8">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </button>
    <img src={Logo} className="sidebar-logo" style={{ width: 200, height: 40 }} />
  </header>
);

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  // icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
    </svg>}
  </button>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("string");

  const handleClick = (item: string) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <>
            {!item.items && (
              <NavButton
                onClick={handleClick}
                name={item.name}
                // icon={item.icon} icon göstermek için
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
            )}
            {item.items && (
              <>
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
                <div
                  className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""
                    }`}
                >
                  {item.items.map((subItem) => (
                    <NavButton
                      onClick={handleClick}
                      name={subItem}
                      isActive={activeItem === subItem}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
      </nav>
    </aside>
  );
};
