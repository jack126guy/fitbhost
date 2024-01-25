<script setup lang="ts">
import { onMounted } from 'vue';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

onMounted(() => {
	void Reveal.initialize({
		plugins: [RevealMarkdown],
		// Don't capture up and down arrow keys to allow scrolling filled story
		keyboardCondition: (e) => e.keyCode !== 38 && e.keyCode !== 40,
	});
});
</script>

<template>
	<div class="reveal">
		<div class="slides">
			<slot />
		</div>
	</div>
</template>
