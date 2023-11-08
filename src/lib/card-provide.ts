import { useCardStore } from "../store/dataCard";

export default defineNuxtPlugin((nuxtApp) => {
  const list = useCardStore();
  return {
    provide: {
      cardList: list,
    },
  };
});
