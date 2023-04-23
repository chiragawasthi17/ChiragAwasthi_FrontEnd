# STEELEYE - Front End

#Question 1

The simple List component is a user interface element used to display a collection of related items in a list format. It is a versatile and commonly used UI element that provides an intuitive way for users to navigate and interact with a large amount of information. The list component typically consists of a series of list items or rows, where each item contains some information, such as text, images, or icons. Users can interact with the list by scrolling up and down or left and right to view all the items. The simple List component can be used for a variety of purposes, such as displaying menu options, presenting search results, or showing a list of items in a shopping cart.To enhance the re-rendering efficiency of the List component, two JSX-returning functions are included within the component, and each is enclosed in React.memo(). This allows the List component to use these functions efficiently.The primary responsibility of the component is to exhibit a list of elements in the form of a JSX-returning function. For each list item, the component accepts props.By taking an array of objects called 'items' as an argument, the component can display each object's 'text' property on the screen via the items.map() function. Whenever a user clicks on an item, the component re-renders with new properties as the 'selectedIndex' property changes and highlights the selected item in green.

#Question 2

onClickHandler is invoked and executed while rendering instead of passing it as function. selectedIndex destructuring is wrong, First item should be state other would be setter function. key prop is not passed while rendering SingleListItem. Instead of passing different onClickHandler to each SingleListItem, Pass handleClick once and from SingleListItem call onClickHandler with its index prop. WrappedListComponent receives items, Which could be null instead of array, This case should be handled correctly.
To define the props of array type, use 'PropTypes.arrayOf' instead of 'PropTypes.array,' which is not a valid propType.
The onClickHandler prop is expecting the event handler function as its value, but in the code, it is invoking the function directly, which may cause errors or unexpected behavior.
To avoid warnings, a unique 'key' prop should be passed to each list element so that it can be uniquely identified.
There was a syntax error on line 27 because the useState() hook was not declared correctly.
The props are used to indicate whether the item is selected or not, so it is necessary to use a boolean expression (selectedIndex === index).
On line 59, the 'items: null' assigns a null value, which raises an error when using the 'items.map()' function to loop through the null object. Instead, pass an array of objects or an empty array as a dummy value, depending on the propTypes.
To ensure that the onClickHandler works correctly and uses the updated state, it should be called as a new callback function passed in the onClick event as (onClick={() => onClickHandler(index)}). Using (onClick={onClickHandler(index)}) will cause the function to use stale values. This is because in JavaScript, variables and states are aware of the environment in which they are created and may not be updated. Therefore, it is recommended to wrap the event handler function in a callback.


#Question 3

Kindly refer drive.js for final code (file is present in this repo only)
