import petPalApi from "./api/PetPalApi";

// const REGISTER_PATH = "/api/register";
// const LOGIN_PATH = "/api/login";
// const OWNER_PROFILE_PATH = "/api/owner-profile";
// const EDIT_PROFILE_PATH = "/api/edit-profile";
// const VIEW_PET_PATH = "/api/view-pet";

const REGISTER_PATH = "/owner";
const LOGIN_PATH = "/owner";
const OWNER_PROFILE_PATH = "/owner";
const EDIT_PROFILE_PATH = "/owner";
const VIEW_PET_PATH = "/owner";

async function findOwnerProfileByCredentials(credentials) {
    let response = {};
    let ownerProfiles = [];
    try {
        ownerProfiles = await petPalApi.get(LOGIN_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${LOGIN_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    } finally {
        const filteredOwnerProfiles = ownerProfiles.filter(profile => 
            profile.email === credentials.email && profile.password === credentials.password);
        if (filteredOwnerProfiles.length === 1) {
            response = filteredOwnerProfiles[0];
        } else {
            console.error("Unable to find profile with credentials: ", credentials);
            console.error(`There are ${filteredOwnerProfiles.length} profiles found`);
            console.error("Profiles found: ", filteredOwnerProfiles);
        }
    }
    return response;
}

async function findOwnerProfileByJwtToken(jwtToken) {
    let response = {};
    let ownerProfiles = [];
    try {
        ownerProfiles = await petPalApi.get(OWNER_PROFILE_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_PROFILE_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    } finally {
        const filteredOwnerProfiles = ownerProfiles.filter(profile => profile.jwtToken === jwtToken);
        if (filteredOwnerProfiles.length === 1) {
            response = filteredOwnerProfiles[0];
        } else {
            console.error("Unable to find profile with jwtToken: ", jwtToken);
            console.error(`There are ${filteredOwnerProfiles.length} profiles found`);
            console.error("Profiles found: ", filteredOwnerProfiles);
        }
    }
    return response;
}

async function ownerProfileViewPet() {
    let response = [];
    let ownerProfiles = [];
    try {
        ownerProfiles = await petPalApi.get(VIEW_PET_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${VIEW_PET_PATH}`);
        console.error("Error message: ", error.message);
        response = [];
    } finally {
        response = ownerProfiles.map(profile => {
            return {
                ownerId: profile.ownerId,
                petName: profile.petName,
                petGender: profile.petGender,
                petAge: profile.petAge,
                areaLocation: profile.areaLocation,
                petPicture: profile.petPicture[0]
            }
        });
    }
    return response;
}

async function ownerProfileViewPetByOwnerId(ownerId) {
    let response = {};
    let ownerProfiles = [];
    try {
        ownerProfiles = await petPalApi.get(OWNER_PROFILE_PATH);
    } catch (error) {
        console.error(`Error encountered when GET ${OWNER_PROFILE_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    } finally {
        const filteredOwnerProfiles = ownerProfiles.filter(profile => profile.ownerId === ownerId);
        if (filteredOwnerProfiles.length === 1) {
            response = filteredOwnerProfiles.map(profile => {
                return {
                    ownerId: profile.ownerId,
                    petName: profile.petName,
                    petGender: profile.petGender,
                    petAge: profile.petAge,
                    areaLocation: profile.areaLocation,
                    petPicture: profile.petPicture,
                    petDescription: profile.petDescription
                }
            })[0];
        } else {
            console.error("Unable to find profile with ownerId: ", ownerId);
            console.error(`There are ${filteredOwnerProfiles.length} profiles found`);
            console.error("Profiles found: ", filteredOwnerProfiles);
        }
    }
    return response;
}

export const register = async (owner) => {
    let response = {};
    try {
        response = await petPalApi.post(REGISTER_PATH, owner);
    } catch (error) {
        console.error(`Error encountered when POST ${REGISTER_PATH}`);
        console.error("owner: ", owner);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const login = async (credentials) => {
    let response = {};
    try {
        // response = await petPalApi.post(LOGIN_PATH, credentials);
        response = await findOwnerProfileByCredentials(credentials);
    } catch (error) {
        console.error(`Error encountered when POST ${LOGIN_PATH}`);
        console.error("credentials: ", credentials);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const getOwnerProfile = async (jwtToken) => {
    let response = {};
    try {
        // response = await petPalApi.post(OWNER_PROFILE_PATH, jwtToken);
        response = await findOwnerProfileByJwtToken(jwtToken);
    } catch (error) {
        console.error(`Error encountered when POST ${OWNER_PROFILE_PATH}`);
        console.error("jwtToken: ", jwtToken);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const editOwnerProfile = async (owner) => {
    let response = {};
    try {
        response = await petPalApi.post(EDIT_PROFILE_PATH, owner);
    } catch (error) {
        console.error(`Error encountered when POST ${EDIT_PROFILE_PATH}`);
        console.error("owner: ", owner);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}

export const viewPet = async () => {
    let response = [];
    try {
        // response = await petPalApi.get(VIEW_PET_PATH);
        response = ownerProfileViewPet();
    } catch (error) {
        console.error(`Error encountered when GET ${VIEW_PET_PATH}`);
        console.error("Error message: ", error.message);
        response = [];
    }
    return response;
}

export const viewPetByOwnerId = async (ownerId) => {
    let response = {};
    try {
        // response = await petPalApi.get(VIEW_PET_PATH + `/${ownerId}`);
        response = ownerProfileViewPetByOwnerId(ownerId);
    } catch (error) {
        console.error(`Error encountered when GET ${VIEW_PET_PATH}`);
        console.error("Error message: ", error.message);
        response = {};
    }
    return response;
}