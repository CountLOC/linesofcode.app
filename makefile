all:
	npm install
	@tsc -w -p scripts/ &
	@tsc -w -p scripts/other-scripts/oauth-consume &
	@sass --watch scss/style.scss:css/style.css --style compressed &
	@php -S localhost:9500 index.php &