import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import typescript from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import vueEslintParser from 'vue-eslint-parser';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
	js.configs.recommended,
	...vue.configs['flat/recommended'],
	...typescript.configs.strictTypeChecked.map((config) => ({
		...config,
		ignores: ['**/*.js'],
	})),
	prettier,
	{
		files: ['**/*.ts', '**/*.vue'],
		languageOptions: {
			ecmaVersion: 2015,
			parser: vueEslintParser,
			parserOptions: {
				parser: typescriptEslintParser,
				project: true,
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
	},
	{
		ignores: ['dist'],
	},
];
