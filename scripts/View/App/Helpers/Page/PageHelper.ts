class PageHelper {

	public static moveForwardOne(): void {
		const currentShownPage:HTMLElement = PageHelper.getCurrentShownPage();
		const desiredPageNumber = parseInt(currentShownPage.getAttribute("data-page")) + 1;
		PageHelper.moveToPage(desiredPageNumber);
	}

	public static moveBackwardOne(): void {
		const currentShownPage:HTMLElement = PageHelper.getCurrentShownPage();
		const desiredPageNumber = parseInt(currentShownPage.getAttribute("data-page")) - 1;
		PageHelper.moveToPage(desiredPageNumber);
	}

	public static moveToPage(pageNumber:number): void {
		const pages:NodeListOf<HTMLElement> = document.querySelectorAll("[data-page]");
		const desiredPage:HTMLElement = document.querySelector(`[data-page="${pageNumber}"]`);
		if (desiredPage == null) {
			throw "The page with number of " + pageNumber + " does not exist";
		}
		PageHelper.closeAllPages(pages);
		desiredPage.removeAttribute("hidden");
	}

	private static closeAllPages(pages:NodeListOf<HTMLElement>): void {
		pages.forEach(page => page.setAttribute("hidden", "true"));
	}

	private static getCurrentShownPage(): HTMLElement {
		return document.querySelector("[data-page]:not([hidden])");
	}

}