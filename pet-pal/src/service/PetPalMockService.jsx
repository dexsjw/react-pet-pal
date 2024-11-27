import petPalMockApi from "./api/PetPalMockApi";

const PET_DATA_PATH = "/pet-data";
const PET_PATH = "/pet"
const OWNER_AUTH_PATH = "/owner-auth";
const OWNER_PATH = "/owner";

// CRUD for PetData
export const getPetData = async (petDataId) => {
  let response = {};
  try {
    response = (await petPalMockApi.get(`${PET_DATA_PATH}/${petDataId}`)).data;
  } catch (error) {
    console.error(`Error encountered when GET ${PET_DATA_PATH}/${petDataId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const getAllPetData = async () => {
  let response = [];
  try {
    response = await getPetData("");
  } catch (error) {
    console.error(`Error encountered when GET ${PET_DATA_PATH}`);
    console.error("Error message: ", error.message);
    response = [];
  }
  return response;
}

export const createPetData = async (petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.post(PET_DATA_PATH, petData)).data
  } catch (error) {
    console.error(`Error encountered when POST ${PET_DATA_PATH}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const updatePetData = async (petDataId, petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.put(`${PET_DATA_PATH}/${petDataId}`, petData)).data;
  } catch (error) {
    console.error(`Error encountered when PUT ${PET_DATA_PATH}/${petDataId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const deletePetData = async (petDataId) => {
  let response = {};
  try {
    response = (await petPalMockApi.delete(`${PET_DATA_PATH}/${petDataId}`)).data;
  } catch (error) {
    console.error(`Error encountered when DELETE ${PET_DATA_PATH}/${petDataId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

// CRUD for Pet
export const getPet = async (petId) => {
  let response = {};
  try {
    response = (await petPalMockApi.get(`${PET_PATH}/${petId}`)).data;
  } catch (error) {
    console.error(`Error encountered when GET ${PET_PATH}/${petId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const getAllPet = async () => {
  let response = [];
  try {
    response = await getPet("");
  } catch (error) {
    console.error(`Error encountered when GET ${PET_PATH}`);
    console.error("Error message: ", error.message);
    response = [];
  }
  return response;
}

export const createPet = async (petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.post(PET_PATH, petData)).data;
  } catch (error) {
    console.error(`Error encountered when POST ${PET_PATH}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const updatePet = async (petId, petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.put(`${PET_PATH}/${petId}`, petData)).data;
  } catch (error) {
    console.error(`Error encountered when PUT ${PET_PATH}/${petId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const deletePet = async (petId) => {
  let response = {};
  try {
    response = (await petPalMockApi.delete(`${PET_PATH}/${petId}`)).data;
  } catch (error) {
    console.error(`Error encountered when DELETE ${PET_PATH}/${petId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

// CRUD for OwnerAuth
export const getOwnerAuth = async (ownerAuthId) => {
  let response = {};
  try {
    response = (await petPalMockApi.get(`${OWNER_AUTH_PATH}/${ownerAuthId}`)).data;
    console.log("respone", response);
  } catch (error) {
    console.error(`Error encountered when GET ${OWNER_AUTH_PATH}/${ownerAuthId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const getAllOwnerAuth = async () => {
  let response = [];
  try {
    response = await getOwnerAuth("");
  } catch (error) {
    console.error(`Error encountered when GET ${OWNER_AUTH_PATH}`);
    console.error("Error message: ", error.message);
    response = [];
  }
  return response;
}

export const createOwnerAuth = async (petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.post(OWNER_AUTH_PATH, petData)).data;
  } catch (error) {
    console.error(`Error encountered when POST ${OWNER_AUTH_PATH}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const updateOwnerAuth = async (ownerAuthId, petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.put(`${OWNER_AUTH_PATH}/${ownerAuthId}`, petData)).data;
  } catch (error) {
    console.error(`Error encountered when PUT ${OWNER_AUTH_PATH}/${ownerAuthId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const deleteOwnerAuth = async (ownerAuthId) => {
  let response = {};
  try {
    response = (await petPalMockApi.delete(`${OWNER_AUTH_PATH}/${ownerAuthId}`)).data;
  } catch (error) {
    console.error(`Error encountered when DELETE ${OWNER_AUTH_PATH}/${ownerAuthId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

// CRUD for Owner
export const getOwner = async (ownerId) => {
  let response = {};
  try {
    response = (await petPalMockApi.get(`${OWNER_PATH}/${ownerId}`)).data;
  } catch (error) {
    console.error(`Error encountered when GET ${OWNER_PATH}/${ownerId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const getAllOwner = async () => {
  let response = [];
  try {
    response = await getOwner("");
  } catch (error) {
    console.error(`Error encountered when GET ${OWNER_PATH}`);
    console.error("Error message: ", error.message);
    response = [];
  }
  return response;
}

export const createOwner = async (petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.post(OWNER_PATH, petData)).data;
  } catch (error) {
    console.error(`Error encountered when POST ${OWNER_PATH}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const updateOwner = async (ownerId, petData) => {
  let response = {};
  try {
    response = (await petPalMockApi.put(`${OWNER_PATH}/${ownerId}`, petData)).data;
  } catch (error) {
    console.error(`Error encountered when PUT ${OWNER_PATH}/${ownerId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}

export const deleteOwner = async (ownerId) => {
  let response = {};
  try {
    response = (await petPalMockApi.delete(`${OWNER_PATH}/${ownerId}`)).data;
  } catch (error) {
    console.error(`Error encountered when DELETE ${OWNER_PATH}/${ownerId}`);
    console.error("Error message: ", error.message);
    response = {};
  }
  return response;
}