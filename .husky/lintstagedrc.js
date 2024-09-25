module.exports = {
	"*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
		"biome check --write --unsafe  --no-errors-on-unmatched --files-ignore-unknown=true", // Check formatting and lint
	],
};
