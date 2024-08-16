// IE không hỗ trợ tham số thứ hai của phương thức toggleClass
export default (
  className: string,
  flag: boolean,
  el: HTMLElement = document.body
) => {
  el.classList[flag ? "add" : "remove"](className);
};
