module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'jsdoc',
    '@typescript-eslint',
  ],
  'rules': {
    'new-cap': [2, {
      'capIsNewExceptions': [
        'Component',
        'Directive',
        'HostListener',
        'Inject',
        'Input',
        'NgModule',
        'Output',
        'Pipe',
      ],
    }],
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'jsdoc/require-jsdoc': [2, {
      'require': {
        'ArrowFunctionExpression': true,
        'ClassDeclaration': true,
        'ClassExpression': true,
        'FunctionExpression': true,
        'MethodDefinition': true,
      },
    }],
  },
};
