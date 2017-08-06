webpack
TMP=/tmp/`date '+%Y%m%d-%H%M%S'`
mkdir $TMP && \
cp -r index.html assets dist $TMP && \
git checkout master && \
rm -rf ./* && \
cp -r $TMP/* .
