// components/SquareNavigation.tsx
import React from "react";

interface NavItem {
  id: string;
  label: string;
}

interface SquareNavigationProps {
  items: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

const SquareNavigation: React.FC<SquareNavigationProps> = ({
  items,
  activeSection,
  onNavigate,
}) => {
  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
      {items.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className="relative group"
          aria-label={`Navigate to ${label}`}
        >
          <div
            className={`
              h-2
              transition-all 
              ${
                activeSection === id
                  ? "w-8 bg-[#f93] right-0"
                  : "w-2 bg-gray-300 group-hover:w-8 group-hover:right-0"
              }
          `}
          />
        </button>
      ))}
    </div>
  );
};

export default SquareNavigation;
