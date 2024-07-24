import petPalMockApi from "./api/PetPalApi";

const OWNER_AUTH_PATH = "/ownerAuth";
const OWNER_PROFILE_PATH = "/ownerProfile";

// CRUD for Owner Auth
export const getOwnerAuths = async () => {
    let response = {};
    try {
        response = await petPalMockApi.get(OWNER_AUTH_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_AUTH_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const getOwnerAuth = async (ownerId) => {
    let response = {};
    try {
        response = await petPalMockApi.get(`${OWNER_AUTH_PATH}/${ownerId}`);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_AUTH_PATH}/${ownerId}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const createOwnerAuth = async (ownerAuth) => {
    let response = {};
    try {
        response = await petPalMockApi.post(OWNER_AUTH_PATH, ownerAuth);
    } catch (error) {
        console.error(`Error encountered when POST ${OWNER_AUTH_PATH}`);
        console.error("ownerAuth: ", ownerAuth);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const updateOwnerAuth = async (ownerId, ownerAuth) => {
    let response = {};
    try {
        response = await petPalMockApi.put(`${OWNER_AUTH_PATH}/${ownerId}`, ownerAuth);
    } catch (error) {
        console.error(`Error encountered when PUT ${OWNER_AUTH_PATH}/${ownerId}`);
        console.error("ownerAuth: ", ownerAuth);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const deleteOwnerAuth = async (ownerId) => {
    let response = {};
    try {
        response = await petPalMockApi.delete(`${OWNER_AUTH_PATH}/${ownerId}`);
    } catch (error) {
        console.error(`Error encountered when DELETE ${OWNER_AUTH_PATH}/${ownerId}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

// CRUD for Owner Profile
export const getOwnerProfiles = async () => {
    let response = {};
    try {
        response = await petPalMockApi.get(OWNER_PROFILE_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_PROFILE_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const getOwnerProfile = async (ownerId) => {
    let response = {};
    try {
        response = await petPalMockApi.get(`${OWNER_PROFILE_PATH}/${ownerId}`);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_PROFILE_PATH}/${ownerId}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const createOwnerProfile = async (ownerProfile) => {
    let response = {};
    try {
        response = await petPalMockApi.post(OWNER_PROFILE_PATH, ownerProfile);
    } catch (error) {
        console.error(`Error encountered when POST ${OWNER_PROFILE_PATH}`);
        console.error("ownerProfile: ", ownerProfile);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const updateOwnerProfile = async (ownerId, ownerPofile) => {
    let response = {};
    try {
        response = await petPalMockApi.put(`${OWNER_PROFILE_PATH}/${ownerId}`, ownerPofile);
    } catch (error) {
        console.error(`Error encountered when PUT ${OWNER_PROFILE_PATH}/${ownerId}`);
        console.error("ownerAuth: ", ownerPofile);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const deleteOwnerProfile = async (ownerId) => {
    let response = {};
    try {
        response = await petPalMockApi.delete(`${OWNER_PROFILE_PATH}/${ownerId}`);
    } catch (error) {
        console.error(`Error encountered when DELETE ${OWNER_PROFILE_PATH}/${ownerId}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}