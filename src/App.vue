<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import RevealSlides from './RevealSlides.vue';
import PlaceholderInput from './PlaceholderInput.vue';
import FilledStory from './FilledStory.vue';
import { parse as parseStory, PlaceholderPart } from 'storyfillup';
import { FilledPlaceholder } from './types';

const testStory = ref('There was a {{ noun }} who was very {{ adjective }}.');
const parsedStory = computed(() => parseStory(testStory.value));
const filledPlaceholders = ref<FilledPlaceholder[]>([]);

watch(
	parsedStory,
	(s) => {
		filledPlaceholders.value = s
			.filter((p): p is PlaceholderPart => p.type === 'placeholder')
			.map((p) => ({ ...p, filled: '' }));
	},
	{ immediate: true }
);

const filledStory = computed(() => {
	let fi = 0;
	return parsedStory.value.map((p) =>
		p.type === 'placeholder' ? filledPlaceholders.value[fi++] : p
	);
});
</script>

<template>
	<RevealSlides>
		<PlaceholderInput
			v-for="(f, i) in filledPlaceholders"
			:key="i"
			v-model="f.filled"
			:placeholder="f"
		/>
		<FilledStory :story="filledStory" />
	</RevealSlides>
</template>
