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
	adjective: 'Description of a thing (noun)',
	adverb: 'Description of an action (verb)',
};
