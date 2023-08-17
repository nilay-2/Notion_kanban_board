export const storeViewState = (viewState) => {
  localStorage.setItem("view", JSON.stringify(viewState));
};
