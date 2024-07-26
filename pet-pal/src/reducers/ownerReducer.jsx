import { deleteOwnerProfile, editOwnerProfile, getOwnerProfile, login, register } from "../service/PetPalService";

export const initialOwnerState = {
  email: "",
  password: "",
  isLoggedIn: false,
  ownerId: "",
  ownerName: "",
  ownerMatches: [],
  areaLocation: "",
  petPicture: [], 
  petName: "",
  petBreed: "",
  petGender: "",
  petAge: 0,
  petSize: "",
  petDescription: "",
  petIsNeutered: false
};

export const ownerReducer = async (state, action) => {
  switch (action.type) {
    case "OWNER_LOGIN": {
      try {
        return await login(action.credentials);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }

    case "GET_OWNER_JWT": {
      try {
        return await getOwnerProfile(action.jwtToken);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }

    case "CREATE_OWNER": {
      try {
        return await register(action.owner);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    case "EDIT_OWNER": {
      try {
        return await editOwnerProfile(action.jwtToken, action.owner);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    case "DELETE_OWNER": {
      try {
        return await deleteOwnerProfile(action.jwtTokenPw);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    default:
      return state;
  }
};
