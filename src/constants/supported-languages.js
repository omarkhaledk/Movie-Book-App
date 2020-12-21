const supportedLanguages = {
    "en": { name: "English", lcid: 1033, direction: "ltr", id: "en" },
    "ar": { name: "العربية", lcid: 1025, direction: "rtl", id: "ar" },
};

const languagesArr = Object.keys(supportedLanguages).map(key => ({
    id: supportedLanguages[key].id,
    name: supportedLanguages[key].name
}));

export { languagesArr };
export default supportedLanguages;