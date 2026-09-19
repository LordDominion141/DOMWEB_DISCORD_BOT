import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
		},
		rules: {
			// Catch real bugs — keep these as errors
			'no-var': 'error',
			'prefer-const': 'warn',
			'no-empty-function': 'warn',
			'no-shadow': ['warn', { allow: ['err', 'resolve', 'reject'] }],

			// Style — relaxed to warnings so they don't block you while learning
			'no-console': 'off',
			'no-undef': 'off',
		},
	},
];