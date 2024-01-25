<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ (e: 'load', value: string): void }>();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const fileInput = ref<HTMLInputElement>(null!);

async function loadFile() {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const text = await fileInput.value.files![0].text();
	emit('load', text);
}
</script>

<template>
	<section>
		<h1>Instructions</h1>
		<ol>
			<li>Upload a story (.md, .txt)</li>
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
