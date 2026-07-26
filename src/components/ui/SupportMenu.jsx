import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from "motion/react";

import { brand } from '../../config/brand';

import Card from './Card';
import MenuButton from './MenuButton';
import SupportMenuItem from './SupportMenuItem';

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

  const closeMenu = useCallback(() => {
  setIsOpen(false);
  buttonRef.current?.focus();
}, []);

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
      if (event.key === 'Escape') {
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

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div ref={containerRef} className="relative">
      <MenuButton
        ref={buttonRef}
        isOpen={isOpen}
        onClick={toggleMenu}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
             initial={{
             opacity: 0,
             y: -8,
             scale: 0.98,
           }}
           animate={{
             opacity: 1,
             y: 0,
             scale: 1,
           }}
           exit={{
             opacity: 0,
             y: -8,
             scale: 0.98,
           }}
           transition={{
             duration: 0.2,
             ease: "easeOut",
           }}
           className="absolute right-0 mt-4"
        >
           <Card
             role="menu"
             aria-label="Support menu"
             className="w-72 overflow-hidden rounded-3xl p-1"
           >
             {renderSupportItems()}
           </Card>
         </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SupportMenu;