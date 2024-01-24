<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import RevealSlides from './RevealSlides.vue';
import StoryLoader from './StoryLoader.vue';
import PlaceholderInput from './PlaceholderInput.vue';
import FilledStory from './FilledStory.vue';
import { parse as parseStory, PlaceholderPart } from 'storyfillup';
import { FilledPlaceholder } from './types';
import Reveal from 'reveal.js';

const story = ref('');
const parsedStory = computed(() => parseStory(story.value));
const filledPlaceholders = ref<FilledPlaceholder[]>([]);

watch(parsedStory, (s) => {
	filledPlaceholders.value = s
		.filter((p): p is PlaceholderPart => p.type === 'placeholder')
		.map((p) => ({ ...p, filled: '' }));
	void nextTick(() => {
		Reveal.sync();
		Reveal.slide(1);
	});
});

const filledStory = computed(() => {
	let fi = 0;
	return parsedStory.value.map((p) =>
		p.type === 'placeholder' ? filledPlaceholders.value[fi++] : p
	);
});
</script>

<template>
	<RevealSlides>
		<StoryLoader v-model="story" />
		<template v-if="story">
			<PlaceholderInput
				v-for="(f, i) in filledPlaceholders"
				:key="i"
				v-model="f.filled"
				:placeholder="f"
				@submit="Reveal.next()"
			/>
			<FilledStory :story="filledStory" />
		</template>
	</RevealSlides>
</template>
