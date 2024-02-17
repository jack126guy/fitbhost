<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { PlaceholderPart } from 'storyfillup';
import { autodefine } from './autodefine';

const props = defineProps<{
	placeholder: PlaceholderPart;
	modelValue: string;
	isCurrent: boolean;
}>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'submit'): void;
}>();

const textInput = ref(null as unknown as HTMLElement);
const autodefineDefinitions = computed(() => {
	return autodefine(props.placeholder.description);
});

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
			<dl>
				<!--
				_i has an underscore because vue-tsc reports it as unused
				Reference: https://github.com/vuejs/language-tools/issues/329
				-->
				<template
					v-for="(
						{ keyword, definition }, _i
					) in autodefineDefinitions"
					:key="_i"
				>
					<dt>{{ keyword }}</dt>
					<dd>{{ definition }}</dd>
				</template>
			</dl>
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

dl {
	margin: 0em;
}

dt,
dd {
	display: inline;
}

dd:after {
	display: block;
	content: '';
}
</style>
