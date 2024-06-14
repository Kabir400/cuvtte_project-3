const btn_num = document.querySelectorAll(".btn_num");
const btn_output = document.querySelector(".cal-output");
const btn_operator = document.querySelectorAll(".btn_operator");
const btn_minus = document.querySelector(".btn_minus");
const btn_reset = document.querySelector(".btn_reset");
const delete_btn = document.querySelector(".btn_del");
const btn_caculate = document.querySelector(".btn_caculate");

const audio_err = document.querySelector(".audio_err");

const operator_arr = ["+", "*", "/", "-"];

//inpuing numbers
btn_num.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    btn_output.textContent += ele.textContent;
  });
});

//inputing operators
//+ * /
btn_operator.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (btn_output.textContent == "") {
      audio_err.play();
      alert("1st enter a number");
    } else if (
      operator_arr.includes(
        btn_output.textContent[btn_output.textContent.length - 1]
      )
    ) {
      audio_err.play();
      alert("you can't add two operator one by one");
    } else {
      btn_output.textContent += ele.textContent;
    }
  });
});

//-
btn_minus.addEventListener("click", (e) => {
  if (
    operator_arr.includes(
      btn_output.textContent[btn_output.textContent.length - 1]
    ) &&
    operator_arr.includes(
      btn_output.textContent[btn_output.textContent.length - 2]
    )
  ) {
    audio_err.play();
    alert("you can't add two operator one by one");
  } else {
    btn_output.textContent += btn_minus.textContent;
  }
});

//clear all
btn_reset.addEventListener("click", (e) => {
  btn_output.textContent = "";
});

//delete
delete_btn.addEventListener("click", (e) => {
  btn_output.textContent = btn_output.textContent.slice(0, -1);
});

//calculate result
btn_caculate.addEventListener("click", (e) => {
  btn_output.textContent = eval(btn_output.textContent);
});
