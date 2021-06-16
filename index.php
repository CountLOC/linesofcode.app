<?php
if (!isset($_SERVER['REQUEST_URI']) || empty($_SERVER['REQUEST_URI'])) {
	$page_path = $argv[1];
} else {
	if ($_SERVER['REQUEST_URI'] === '/') {
		$page_path = 'view/pages/home.php';
	} else {
		$parsed_url = parse_url($_SERVER['REQUEST_URI']);
		$exploded_path = \explode('/', $parsed_url['path']);
		$page_path = 'view/pages/' . ($exploded_path[\count($exploded_path) - 1] === '' ? $exploded_path[\count($exploded_path) - 2] : $exploded_path[\count($exploded_path) - 1]) . '.php';
	}
}

\define('IS_APP', $page_path === 'view/pages/app.php');
\define('IS_DEV', (\getenv('CURRENT_ENVIRONMENT') !== 'prod' ? true : false));
$apiBaseUrl = (IS_DEV ? 'http://localhost:9000' : 'https://api.linesofcode.app');
if (\file_exists($page_path)) {
	require_once 'view/includes/head.php';
	require_once 'view/includes/header-content.php';
	require_once $page_path;
	require_once 'view/includes/foot.php';
} else {
	return false;
}