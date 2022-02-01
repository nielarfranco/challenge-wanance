import {
  SET_PEOPLE_DATA,
  DELETE_PEOPLE_DATA
} from "../Actions/action";



const initialState = {
    peopleData:[]
};
 
   
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_DATA : {
      return {
        ...state,
        peopleData: action.payload
      };
    }
    case DELETE_PEOPLE_DATA : {
      return {
        ...state,
        peopleData: state.peopleData.filter((p, i) => !(i===action.payload))
      };
    }

    
    default: {
      return state;
    }
  }
};

export default reducer;
