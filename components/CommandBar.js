import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CommandBar({ opened, caption, items, placeholder, style, isFixed }) {
  const [open, setOpen] = useState();

  useEffect(() => {
    if (opened) {
      setOpen(opened);
    }

    const down = (e) => {
      if (e.key === 'k' && e.ctrlKey) {
        setOpen((open) => !open);
        e.returnValue = false;
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [opened]);

  const onSelectHandle = ({ bookmark, link, onSelect }) => {
    if (bookmark) {
      window.location.href = '#' + bookmark;
      setOpen(false);
    } else if (link) {
      window.location.href = link;
      setOpen(false);
    } else if (onSelect) {
      onSelect();
    }
  };

  return (
    <>
      {isFixed && (
        <Command style={style}>
          {caption && <div cmdk-linear-badge="">{caption}</div>}
          <Command.Input autoFocus placeholder={placeholder} />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            {items &&
              items.map(
                ({ icon, label, shortcut, bookmark, link, onSelect }) => {
                  return (
                    <Command.Item
                      key={label}
                      value={label}
                      onSelect={() =>
                        onSelectHandle({ bookmark, link, onSelect })
                      }
                    >
                      {icon}
                      {label}
                      {shortcut && (
                        <div cmdk-linear-shortcuts="">
                          {shortcut.map((key) => {
                            return <kbd key={key}>{key}</kbd>;
                          })}
                        </div>
                      )}
                    </Command.Item>
                  );
                },
              )}
          </Command.List>
        </Command>
      )}
      {!isFixed && (
        <Command.Dialog open={open} onOpenChange={setOpen} style={style}>
          {caption && <div cmdk-linear-badge="">{caption}</div>}
          <Command.Input autoFocus placeholder={placeholder} />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            {items &&
              items.map(
                ({ icon, label, shortcut, bookmark, link, onSelect }) => {
                  return (
                    <Command.Item
                      key={label}
                      value={label}
                      onSelect={() =>
                        onSelectHandle({ bookmark, link, onSelect })
                      }
                    >
                      {icon}
                      {label}
                      {shortcut && (
                        <div cmdk-linear-shortcuts="">
                          {shortcut.map((key) => {
                            return <kbd key={key}>{key}</kbd>;
                          })}
                        </div>
                      )}
                    </Command.Item>
                  );
                },
              )}
          </Command.List>
        </Command.Dialog>
      )}
    </>
  );
}

CommandBar.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.array,
  placeholder: PropTypes.string,
  opened: PropTypes.bool,
  style: PropTypes.any,
  isFixed: PropTypes.bool,
};

export default CommandBar;
