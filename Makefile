banana:
	BUILD_PATH='.docs' PUBLIC_URL="https://lbk2k.github.io/qr-code/"  npm run build
	cp ./docs/index.html ./docs/404.html