/*
Changes made in this code are:
Removed the wrapping of SingleListItem and WrappedListComponent components into separate variables.
Removed index and isSelected props default values from SingleListItem as it is required to be passed always.
Simplified the arrow function used in SingleListItem component.
Corrected the PropTypes format to define items prop array of objects with the text property.
Set default value for items to be an array of objects containing text property, instead of null.
*/

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => (
  <li
    style={{ backgroundColor: isSelected ? 'green' : 'red' }}
    onClick={() => onClickHandler(index)}
  >
    {text}
  </li>
));

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map(({ text }, index) => (
        <SingleListItem
          key={index}
          index={index}
          isSelected={selectedIndex === index}
          onClickHandler={handleClick}
          text={text}
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: [
    { text: 'some dummy text' },
    { text: 'some dummy text' },
    { text: 'some dummy text' },
    { text: 'some dummy text' },
    { text: 'some dummy text' },
  ],
};

export default List;
/*
Changes made in this code:
Removed the wrapping of SingleListItem and WrappedListComponent components into separate variables.
Removed index and isSelected props default values from SingleListItem as it is required to be passed always.
Simplified the arrow function used in SingleListItem component.
Corrected the PropTypes format to define items prop array of objects with the text property.
Set default value for items to be an array of objects containing text property, instead of null.
*/
