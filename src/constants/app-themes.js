const themes = {
    0: 'light',
    1: 'dark',
    2: 'systemDefault'
};

const themesArr = Object.keys(themes).map(t => themes[t]);

export { themesArr };
export default themes;