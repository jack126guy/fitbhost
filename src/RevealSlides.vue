<script setup lang="ts">
import { onMounted } from 'vue';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

onMounted(() => {
	void Reveal.initialize({ plugins: [RevealMarkdown] });
	Reveal.addKeyBinding(
		{ keyCode: 13, key: 'Enter', description: 'Next slide' },
		() => {
			Reveal.next();
		}
	);
});
</script>

<template>
	<div class="reveal">
		<div class="slides">
			<slot />
		</div>
	</div>
</template>
