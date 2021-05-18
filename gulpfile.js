const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const postCssCombineMediaQuery = require("postcss-combine-media-query");
const postcssInsert = require("postcss-insert");

gulp.task("sass", function() {
	var processors = [postcssInsert({ stripImportant: true }), postCssCombineMediaQuery];

	return gulp
		.src("./sass/**/*.sass")
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(postcss(processors))
		.pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
	gulp.watch("./sass/**/*.sass", gulp.series("sass"));
});
