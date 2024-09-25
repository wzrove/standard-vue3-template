import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

import { resolve } from "node:path";

function pathResolve(dir: string) {
	return resolve(process.cwd(), ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue", "vue-router"],
		}),
		Components({
			resolvers: [
				IconsResolver({
					prefix: "icon", // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
					// {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
					// alias: { park: 'icon-park' } 集合的别名
					enabledCollections: ["ep"], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
				}),
			],
		}),
		Icons({
			autoInstall: true,
			compiler: "vue3",
		}),
	],
	base: "./",
	resolve: {
		alias: [
			{
				find: "@",
				replacement: `${pathResolve("src")}/`,
			},
		],
	},
});
