#!/bin/bash

# drop css/js directories
rm -rf css
rm -rf js

# compile css
npm install
mkdir css
node_modules/.bin/node-sass --output-style compressed scss/style.scss > css/style.css

# compile js
mkdir js
node_modules/.bin/tsc -p scripts/
node_modules/.bin/tsc -p scripts/other-scripts/oauth-consume/

# build php pages
for f in `find view/pages -name '*.php'`
do
	SHORT_FILENAME=${f#*"/pages/"}
	if [[ "$SHORT_FILENAME" == "home.php" ]]; then
		php index.php $f > index.html
	else
		PAGE_NAME=${SHORT_FILENAME%%"."*}
		if [[ ! -d "$PAGE_NAME/" ]]; then
			mkdir $PAGE_NAME
		fi
		php index.php $f > $PAGE_NAME/index.html
	fi
done