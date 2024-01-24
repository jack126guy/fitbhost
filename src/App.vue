<script setup lang="ts">
import { onMounted } from 'vue';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

onMounted(() => {
	void new Reveal().initialize();
});
</script>

<template>
	<div class="slides">
		<section>
			<p>Test 1</p>
		</section>
		<section>
			<p>Test 2</p>
		</section>
	</div>
</template>
