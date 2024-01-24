<script setup lang="ts">
import { computed } from 'vue';
import { TextPart } from 'storyfillup';
import { FilledPlaceholder } from './types';
import '@fontsource/caveat';

const props = defineProps<{ story: (TextPart | FilledPlaceholder)[] }>();
const text = computed(() =>
	props.story
		.map((part) =>
			part.type === 'placeholder'
				? `<span class="filled">${part.filled || '(' + part.description + ')'}</span>`
				: part.content
		)
		.join('')
);
</script>

<template>
	<section data-markdown>{{ text }}</section>
</template>

<style scoped>
:deep(.filled) {
	font-family: Caveat;
}
</style>
