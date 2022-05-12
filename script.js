"use strict";

//Task

const form = document.querySelector("form");
const errorMessage = document.querySelector(".error_message");
const list = document.getElementById("list");
const { text_input: textInput, button_add: buttonSubmit } = form;

form.onsubmit = (event) => {
  event.preventDefault();
  if (textInput.value.trim().length === 0) {
    textInput.classList.add("error");
    errorMessage.innerHTML = "Please enter text!";
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list_item");
  li.innerHTML = textInput.value;
  list.append(li);
  form.reset();

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("remove_button");
  buttonDelete.textContent = "delete";
  li.append(buttonDelete);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("form-check-input");
  li.prepend(checkBox);
};

list.onchange = (event) => {
  const isCheckBox = event.target.classList.contains("form-check-input");

  const rowValue = event.target.closest(".list_item");
  const rowButton = rowValue.querySelector(".remove_button");

  if (isCheckBox) {
    event.target.disabled = true;
    rowValue.className = "item_done";
    rowButton.className = "button_disabled";
    rowButton.disabled = true;
  }
};

textInput.oninput = () => {
  const isErrorField = textInput.classList.contains("error");

  if (isErrorField) {
    textInput.classList.remove("error");
    errorMessage.innerHTML = "";
  }
};

list.addEventListener("click", (event) => {
  const isRemoveButton = event.target.className === "remove_button";

  if (isRemoveButton) {
    const rowList = event.target.closest(".list_item");
    rowList.remove();
  }
});
