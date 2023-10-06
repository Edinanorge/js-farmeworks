export const scrollDown = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }
};
