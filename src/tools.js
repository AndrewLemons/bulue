export function currentColor() {
	let parentColor = this.$parent.currentColor;
	let setColor = this.color;
	if (setColor) return setColor;
	if (parentColor) return parentColor;
	return;
}

export function colorClass() {
	return this.currentColor ? `is-${this.currentColor}` : "";
}

export const colorTools = {
	currentColor,
	colorClass,
};
