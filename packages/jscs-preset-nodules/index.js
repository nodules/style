module.exports = {
    'preset': 'yandex',
    'disallowSpaceAfterPrefixUnaryOperators': ['++', '--', '+', '-', '~'],

    'disallowMultipleVarDecl': null,

    'requireLineBreakAfterVariableAssignment': true,

    'requireSpacesInAnonymousFunctionExpression': {
        'beforeOpeningCurlyBrace': true
    },

    'disallowSpacesInsideParentheses': null,

    'disallowSpacesInsideObjectBrackets': null,
    'requireSpacesInsideObjectBrackets': 'all',

    'disallowSpacesInsideArrayBrackets': null,
    'requireSpacesInsideArrayBrackets': 'all',

    'disallowQuotedKeysInObjects': null,

    'disallowImplicitTypeConversion': ['string'],

    'validateIndentation': null,

    'validateParameterSeparator': ', ',

    'jsDoc': {
        'checkParamNames': true,
        'requireParamTypes': true,
        'checkRedundantReturns': true,
        'requireReturnTypes': true
    }
};
