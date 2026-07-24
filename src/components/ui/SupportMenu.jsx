import { useEffect, useRef, useState } from "react";

import { brand } from "../../config/brand";

import MenuButton from "./MenuButton";
import SupportMenuItem from "./SupportMenuItem";

/**
 * Floating support menu.
 *
 * Responsibilities:
 * - manages open/close state
 * - renders the trigger
 * - renders support actions
 * - restores focus
 * - closes on Escape
 * - closes on outside click
 */
function SupportMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  function openMenu() {
  setIsOpen(true);
}

function closeMenu() {
  setIsOpen(false);
  buttonRef.current?.focus();
}

function toggleMenu() {
  if (isOpen) {
    closeMenu();
    return;
  }

  openMenu();
}

  function renderSupportItems() {
    return brand.support.map((item) => (
      <SupportMenuItem
        key={item.id}
        icon={item.icon}
        label={item.label}
        href={item.href}
      />
    ));
  }

  useEffect(() => {
    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    }

function handleClickOutside(event) {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target)
        ) {
            closeMenu();
        }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <MenuButton
        ref={buttonRef}
        isOpen={isOpen}
        onClick={toggleMenu}
      />

      {isOpen && (
        <div
          role="menu"
          aria-label="Support menu"
          className="
            absolute
            right-0
            mt-3
            w-72

            overflow-hidden

            rounded-2xl

            border
            border-gray-200

            bg-white

            p-2

            shadow-xl
          "
        >
          {renderSupportItems()}
        </div>
      )}
    </div>
  );
}

export default SupportMenu;