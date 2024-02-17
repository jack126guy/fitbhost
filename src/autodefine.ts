export function autodefine(description: string): KeywordDefinition[] {
	const words = description.split(/\s+/);
	const keywordDefinitions: KeywordDefinition[] = [];
	words.forEach((w) => {
		if (w.toLowerCase() in englishGrammarKeywords) {
			keywordDefinitions.push({
				keyword: w,
				definition: englishGrammarKeywords[w],
			});
		}
	});
	return keywordDefinitions;
}

export interface KeywordDefinition {
	keyword: string;
	definition: string;
}

const englishGrammarKeywords: Record<string, string> = {
	noun: 'Person, place, or thing',
	verb: 'Action or state of being',
	adjective: 'Describes a thing (noun)',
	adverb: 'Describes an action (verb), often ends in -ly',
	onomatopoeia: 'Represents a sound ("pow", "woof")',
	superlative: 'Represents an extreme, often ends in -est',
};
