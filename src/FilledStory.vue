<script setup lang="ts">
import { TextPart } from 'storyfillup';
import { FilledPlaceholder } from './types';
import '@fontsource/caveat';

const props = defineProps<{ story: (TextPart | FilledPlaceholder)[] }>();
</script>

<template>
	<section>
		<p>
			<span
				v-for="(part, i) in props.story"
				:key="i"
				:class="{ filled: part.type === 'placeholder' }"
				>{{
					part.type === 'placeholder' ? part.filled : part.content
				}}</span
			>
		</p>
	</section>
</template>

<style scoped>
.filled {
	font-family: Caveat;
}
</style>
