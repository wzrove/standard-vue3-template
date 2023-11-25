import { IframeHTMLAttributes } from 'vue';

export const url = ref('');
export const curIframe = ref<IframeHTMLAttributes>();

// curIframe.value?.onLoad((e) => {
//   console.log(e, '---');
// });
