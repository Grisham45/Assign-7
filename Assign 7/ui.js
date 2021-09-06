class UI {
	constructor() {
		this.uiContainer = document.getElementById("content");
		this.city;
	}

	resultData(data) {
		const image = data.weather[0].description;
		let imageUrl;
		if (image.includes("clear")) {
			imageUrl =
				"data:image/jpeg;base64,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";
		} else if (image.includes("haze")) {
			imageUrl =
				"data:image/jpeg;base64,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";
		} else if (image.includes("cloud")) {
			imageUrl =
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTii3543LDpF3e60lroKEidSFd2T9hpXWyvYQ&usqp=CAU";
		} else if (image.includes("rain")) {
			imageUrl =
				"data:image/jpeg;base64,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";
		} else {
			imageUrl =
				"data:image/jpeg;base64,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";
		}
		console.log(image);
		this.uiContainer.innerHTML = `
          
          <div class="card shadow-lg rounded mx-auto mt-5" style="width: 25rem; height:25rem;">
          <img src="${imageUrl}" class="card-img-top" alt="...">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 ">Highs of ${data.main.temp_max} <span>&#176;</span>C  and  Lows of ${data.main.temp_min}<span>&#176;</span>C</h6>
                  <p class="card-text ">Weather conditions : ${data.weather[0].description}</p>
              </div>
          </div>          
          `;
	}
	handleError() {
		this.uiContainer.innerHTML = `
        <div class="mx-auto container mt-5 ">
            <h3>The city you are looking was not found on our database. Please try any other city.</h3>     
        </div>
          `;
	}
}