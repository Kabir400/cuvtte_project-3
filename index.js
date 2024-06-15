const btn_num = document.querySelectorAll(".btn_num");
const btn_output = document.querySelector(".cal-output");
const btn_operator = document.querySelectorAll(".btn_operator");
const btn_minus = document.querySelector(".btn_minus");
const btn_reset = document.querySelector(".btn_reset");
const delete_btn = document.querySelector(".btn_del");
const btn_caculate = document.querySelector(".btn_caculate");
const btn_point = document.querySelector(".btn_point");

const audio_err = document.querySelector(".audio_err");

const operator_arr = ["+", "*", "/", "-"];
let point = 0;

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
      point = 0;
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
  } else if (btn_output.textContent[btn_output.textContent.length - 1] == "-") {
    btn_output.textContent = btn_output.textContent.slice(0, -1) + "+";
    point = 0;
  } else {
    btn_output.textContent += btn_minus.textContent;
    point = 0;
  }
});

//clear all
btn_reset.addEventListener("click", (e) => {
  btn_output.textContent = "";
  point = 0;
});

//delete
delete_btn.addEventListener("click", (e) => {
  if (btn_output.textContent == "Infinity") {
    btn_output.textContent = "";
  } else {
    if (btn_output.textContent[btn_output.textContent.length - 1] == ".") {
      point = 0;
    }
    btn_output.textContent = btn_output.textContent.slice(0, -1);
  }
});

//entreing point--
btn_point.addEventListener("click", (e) => {
  if (point < 1) {
    btn_output.textContent += ".";
    point++;
  }
});

//calculate result
btn_caculate.addEventListener("click", (e) => {
  if (
    operator_arr.includes(
      btn_output.textContent[btn_output.textContent.length - 1]
    )
  ) {
    audio_err.play();
    alert("you can not place operator the end");
  } else if (isNaN(eval(btn_output.textContent))) {
    btn_output.textContent = "Infinity";
    // } else if (btn_output.textContent == "") {
    //   //do nothing
  } else {
    btn_output.textContent = eval(btn_output.textContent);
  }
});
