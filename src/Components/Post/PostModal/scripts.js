function openModal(){
	const modal = document.querySelector(".modal");

    modal.classList.add("modal_visible");


    const closeButton = document.querySelector(".closeButton");

    closeButton.classList.add("button_close_visible");


    const openButton = document.querySelector(".openButton");

    openButton.classList.add("button_close_hidde");
}

function closeModal(){
	const modal = document.querySelector(".modal");

    modal.classList.remove("modal_visible");

	const closeButton = document.querySelector(".closeButton");

    closeButton.classList.remove("button_close_visible");

    const openButton = document.querySelector(".openButton");

    openButton.classList.remove("button_close_hidde");
}
