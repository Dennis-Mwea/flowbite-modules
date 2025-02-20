const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(function (options = {}) {
    return function ({ addBase, addComponents, theme }) {
        addBase({});
        addComponents({});
    };
});
