const url = "https://randomuser.me/api/";

const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person  = data.results[0];
    const {cell, email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {first, last} = person.name;
    const {age} = person.dob;
    const {number, name} = person.location.street;
    return {
        name : `${first} ${last}`,
        image,
        street : `${number} ${name}`,
        cell, 
        email,
        password,
        age,
    };
};

export default getUser;