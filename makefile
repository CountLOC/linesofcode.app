develop:
	npm install
	@tsc -w -p scripts/ &
	@sass --watch scss/style.scss:css/style.css --style compressed &
	@php -S localhost:9500 index.php &