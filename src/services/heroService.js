import { get } from "./publicApiService";

export const getByName  = (nombre) => {
    return get(`search/${nombre}`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};



//This call lists out the connections of the character.
//Group Affiliation
//Relatives
export const getHeroConnections = (id) => {
    return get(`${id}/connections`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};


/*
This API lists the work/occupation of the character. They are:

Occupation
Base of operation
*/ 
export const getHeroWork = (id) => {
    return get(`${id}/work`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};

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
    return get(`${id}/appearance`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};

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
    return get(`${id}/biography`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};

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
    return get(`${id}/powerstats`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};

export const getAllHeroInformation = (id) => {
    return get(`${id}`)
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
};