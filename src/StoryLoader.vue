<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ (e: 'load', value: string): void }>();

const fileInput = ref(null as unknown as HTMLInputElement);

async function loadFile() {
	const file = fileInput.value.files?.[0];
	if (file) {
		emit('load', await file.text());
	}
}
</script>

<template>
	<section>
		<h1>Instructions</h1>
		<ol>
			<li>Upload a story (.md/.txt file)</li>
			<li>Fill in each blank (press Enter to go to the next one)</li>
			<li>At the end, read the story</li>
		</ol>
		<button @click="fileInput.click()">Upload Story</button>
		<input
			ref="fileInput"
			type="file"
			accept=".md,.txt"
			@input="loadFile"
		/>
	</section>
</template>

<style scoped>
input[type='file'] {
	display: none;
}
</style>
