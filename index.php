<?php
if (!isset($_SERVER['REQUEST_URI']) || empty($_SERVER['REQUEST_URI'])) {
	$page_path = $argv[1];
} else {
	if ($_SERVER['REQUEST_URI'] === '/') {
		$page_path = 'view/pages/home.php';
	} else {
		$exploded_path = \explode('/', $_SERVER['REQUEST_URI']);
		$page_path = 'view/pages/' . ($exploded_path[\count($exploded_path) - 1] === '' ? $exploded_path[\count($exploded_path) - 2] : $exploded_path[\count($exploded_path) - 1]) . '.php';
	}
}

if ($page_path === 'view/pages/app.php') {
	require_once $page_path;
} else if (\file_exists($page_path)) {
	require_once 'view/includes/head.php';
	require_once $page_path;
	require_once 'view/includes/foot.php';
} else {
	return false;
}