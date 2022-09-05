import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://superheroapi.com/api/${996194767599076}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export const getByName = (nombre) => {
    return axiosInstance.get(`search/${nombre}`);
}

export const getHeroImage = (id) => {
    return axiosInstance.get(`${id}/image`);
}


//This call lists out the connections of the character.
//Group Affiliation
//Relatives
export const getHeroConnections = (id) => {
    return axiosInstance.get(`${id}/connections`);
}


/*
This API lists the work/occupation of the character. They are:

Occupation
Base of operation
*/ 
export const getHeroWork = (id) => {
    return axiosInstance.get(`${id}/work`);
}

/**
 * This API call provides the appearance of the character. The various statistics are :

Gender
Race
Height
Weight
Eye Color
Hair Color
 */
export const getHeroAppearance = (id) => {
    return axiosInstance.get(`${id}/appearance`);
}

/**
 * This API call gives the biographical stats of the character. They are :

Full Name
Alter Egos
Aliases
Place of Birth
First Appearance
Publisher
Alignment
 */
export const getHeroBiography = (id) => {
    return axiosInstance.get(`${id}/biography`);
}

/**
 * This API call provides all powerstats for the given character. The powerstats are as follows :-

Intelligence
Strength
Speed
Durability
Power
Combat
 */
export const getHeroPowerstat = (id) => {
    return axiosInstance.get(`${id}/powerstats`);
}

export const getAllHeroInformation = (id) => {
    return axiosInstance.get(`${id}`);
}