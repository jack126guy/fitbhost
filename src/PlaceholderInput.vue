<script setup lang="ts">
import { PlaceholderPart } from 'storyfillup';

const props = defineProps<{
	placeholder: PlaceholderPart;
	modelValue: string;
}>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'submit'): void;
}>();
</script>

<template>
	<section>
		<p>{{ props.placeholder.description }}</p>
		<form @submit.prevent="emit('submit')">
			<input
				type="text"
				:value="props.modelValue"
				@input="
					emit(
						'update:modelValue',
						($event.target as HTMLInputElement).value
					)
				"
			/>
		</form>
	</section>
</template>

<style scoped>
p {
	font-size: 300%;
}

input {
	font-size: 200%;
	width: 100%;
	border-width: 5px;
}
</style>
