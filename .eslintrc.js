// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    "globals": {
        "require": true,
    },
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "destructuring": true,
        "classes": true,
        "defaultParams": true,
        "blockBindings": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "restParams": true,
        "spread": true,
        "forOf": true,
        "generators": true,
        "templateStrings": true,
        "superInFunctions": true,
        "experimentalObjectRestSpread": true
    },

    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "space-after-keywords": [0, "always"],
        "space-return-throw-case": 0,
        "quotes": [0, "double"],
        "semi": [0],
        "indent": [1, 4, {
            "SwitchCase": 1
        }],
        "global-require": 0,
        "object-shorthand": 1,
        "func-names": 0,
        "comma-dangle": [1, "never"],
        "prefer-arrow-callback": 1,
        "no-var": 1,
        "vars-on-top": 1,
        "space-before-function-paren": 1,
        "array-bracket-spacing": 1,
        "import/no-dynamic-require": 1
    }
}
