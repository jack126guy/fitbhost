<script setup lang="ts">
import { computed } from 'vue';
import { TextPart } from 'storyfillup';
import { marked } from 'marked';
import { FilledPlaceholder } from './types';
import '@fontsource/caveat';

const props = defineProps<{ story: (TextPart | FilledPlaceholder)[] }>();
const text = computed(() => {
	var md = props.story
		.map((part) =>
			part.type === 'placeholder'
				? `<span class="filled">${part.filled || '(' + part.description + ')'}</span>`
				: part.content
		)
		.join('');
	return marked.parse(md);
});
</script>

<template>
	<!-- eslint-disable-next-line vue/no-v-html -->
	<section v-html="text"></section>
</template>

<style scoped>
section {
	text-align: start;
	height: 100%;
	overflow-y: auto;
}

:deep(.filled) {
	font-family: Caveat;
}
</style>
