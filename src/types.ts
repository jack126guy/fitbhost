import { PlaceholderPart } from 'storyfillup';

export interface FilledPlaceholder extends PlaceholderPart {
	filled: string;
}

export interface RevealSlideChangedEvent extends Event {
	indexh: number;
}
