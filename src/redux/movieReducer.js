import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, PICK_A_MOVIE } from "./constants";

const initialState = {
  baseTodoData: [],
  showTodoItems: [],
  isDark: true,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        baseTodoData: [{ ...action.payload }, ...state.showTodoItems],
        showTodoItems: [{ ...action.payload }, ...state.showTodoItems],
        isDark: state.isDark,
      };
    case DELETE_MOVIE:
      let deletedItemArr = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        baseTodoData: [...deletedItemArr],
        showTodoItems: [...deletedItemArr],
        isDark: state.isDark,
      };
    case EDIT_MOVIE:
      const filteredItems = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      const selectedItem = state.baseTodoData.find(
        (item) => item.id === action.payload.id
      );
      // setInputText(selectedItem.inputText);

      return {
        baseTodoData: [...filteredItems],
        showTodoItems: [...filteredItems],
        isDark: state.isDark,
      };
    case PICK_A_MOVIE:
      const notPickedItems = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      const pickedItem = state.baseTodoData.find(
        (elem) => elem.id === action.payload.id
      );
      return {
        baseTodoData: [
          ...notPickedItems,
          { ...pickedItem, completed: !pickedItem.completed },
        ],
        showTodoItems: [
          ...notPickedItems,
          { ...pickedItem, completed: !pickedItem.completed },
        ],
        isDark: state.isDark,
      };
    default:
      return state;
  }
}
export default movieReducer;
