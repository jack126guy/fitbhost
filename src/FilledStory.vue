<script setup lang="ts">
import { computed } from 'vue';
import { TextPart } from 'storyfillup';
import { marked } from 'marked';
import { FilledPlaceholder } from './types';
import '@fontsource/caveat';

const props = defineProps<{ story: (TextPart | FilledPlaceholder)[] }>();
const emit = defineEmits<{ (e: 'newStory'): void }>();

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
	<section>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div class="story" v-html="text"></div>
		<button @click="emit('newStory')">New Story</button>
	</section>
</template>

<style scoped>
section {
	height: 100%;
}

.story {
	height: 100%;
	text-align: start;
	overflow-y: auto;
}

:deep(.filled) {
	font-family: Caveat, cursive;
	border-bottom: 0.1em solid;
	padding: 0em 0.5em;
}

button {
	font-size: 100%;
	position: absolute;
	bottom: 20px;
	left: -250px;
}
</style>
