<script setup lang="ts">
import { ref, watch } from 'vue';
import { PlaceholderPart } from 'storyfillup';

const props = defineProps<{
	placeholder: PlaceholderPart;
	modelValue: string;
	isCurrent: boolean;
}>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'submit'): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const textInput = ref<HTMLElement>(null!);

watch(
	() => props.isCurrent,
	(c) => {
		if (c) {
			textInput.value.focus();
		}
	}
);
</script>

<template>
	<section>
		<form @submit.prevent="emit('submit')">
			<label>
				{{ props.placeholder.description }}
				<input
					ref="textInput"
					type="text"
					:value="props.modelValue"
					@input="
						emit(
							'update:modelValue',
							($event.target as HTMLInputElement).value
						)
					"
				/>
			</label>
		</form>
	</section>
</template>

<style scoped>
label {
	font-size: 300%;
}

input[type='text'] {
	font-size: 50%;
	width: 100%;
	padding: 0.1em;
	border: 0.1em solid var(--r-main-color);
	background: transparent;
	color: inherit;
}

input[type='text']:focus {
	border-color: var(--r-link-color);
	box-shadow: 0em 0em 0.2em var(--r-link-color);
	outline: none;
}
</style>
