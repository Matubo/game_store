//old lint-staged version used because newest one have excessive output problem

module.exports = {
  '*.{css,scss,less}': ['stylelint --fix  --cache', 'prettier -w .'],
  '*.{js,jsx,ts,tsx,json}': ['eslint --fix --cache', 'prettier -w .']
  //"*.{html}": ["prettier --write"],
  //"*.{md}": ["markdownlint --fix **/*.md"],
};
