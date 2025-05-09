export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
};

export const getIntials = (name) => {
    if(!name) return"";
    const words=name.split(" ");
    let initials = "";
    for(let i=0; i<words.length; i++){
        initials += words[i][0];
    }
    return initials.toUpperCase();

};