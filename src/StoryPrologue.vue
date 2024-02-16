<script setup lang="ts">
const emit = defineEmits<{ (e: 'showStory'): void }>();
</script>

<template>
	<section>
		<p>That's all! Ready for the story?</p>
		<button @click="emit('showStory')">Show Story</button>
	</section>
</template>
