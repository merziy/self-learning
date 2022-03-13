import { SHOW_ALL } from "../actions/actions";

function visibilityFilter(visibility = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALLW;

    default:
      return visibility;
  }
}

export default visibilityFilter;

// Notice how we deal with only the
// visibility part of the state and we’re not
// interested neither in the notes part of the
// application state nor the whole app state?
// That’s why Redux is so powerful and awesome!
