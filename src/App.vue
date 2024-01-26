<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
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
	});
});

const filledStory = computed(() => {
	let fi = 0;
	return parsedStory.value.map((p) =>
		p.type === 'placeholder' ? filledPlaceholders.value[fi++] : p
	);
});

function loadStory(loadedStory: string) {
	story.value = loadedStory;
	void nextTick(() => {
		Reveal.slide(1);
	});
}

function resetStory() {
	Reveal.slide(0);
	story.value = '';
}

const currentSlide = ref(0);

interface RevealSlideChangedEvent extends Event {
	indexh: number;
}

function updateCurrentSlide(e: Event) {
	currentSlide.value = (e as RevealSlideChangedEvent).indexh;
}

onMounted(() => {
	Reveal.on('slidechanged', updateCurrentSlide);
});

onUnmounted(() => {
	Reveal.off('slidechanged', updateCurrentSlide);
});
</script>

<template>
	<RevealSlides>
		<StoryLoader @load="loadStory" />
		<template v-if="story">
			<PlaceholderInput
				v-for="(f, i) in filledPlaceholders"
				:key="i"
				v-model="f.filled"
				:placeholder="f"
				:is-current="currentSlide === i + 1"
				@submit="Reveal.next()"
			/>
			<FilledStory :story="filledStory" @new-story="resetStory" />
		</template>
	</RevealSlides>
</template>
