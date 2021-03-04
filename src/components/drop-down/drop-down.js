import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Button, Container, List, ListItem, Typography } from '@material-ui/core'


function DropDown ({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  DropDown.handleClickOutside = () => setOpen(false)

  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item])
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([ ...selectionAfterRemoval])
    }
    return false;
  }

  const isItemInSelection = (item) => {
    if (selection.find(current => current.id === item.id)) {
      return true
    }
    return false
  }

  

  return (
    <Container className="dd-wrapper">
      <Container
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <Container className="dd-header_title">
          <Typography className="dd-header_title_bold">{title}</Typography>
        </Container>
        <Container className="dd-header_action">
          <Typography>{open ? 'Close' : 'Open'}</Typography>
        </Container>
        <Container>
          {open && (
            <List className="dd-list">
              {items.map(item => (
                <ListItem className="dd-list-item" key={item.id}>
                  <Button onClick={() => handleOnClick(item)}>
                    <span>{item.value}</span>
                    <span>{isItemInSelection(item) && 'Selected'}</span>
                  </Button>
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </Container>
    </Container>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig)