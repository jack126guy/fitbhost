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
button {
	font-size: 200%;
}

input[type='file'] {
	display: none;
}
</style>
