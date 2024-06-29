import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts"
import codeHighlight from "lume/plugins/code_highlight.ts"
import date from "lume/plugins/date.ts"
import favicon from "lume/plugins/favicon.ts"
import katex from "lume/plugins/katex.ts"
// import pagefind from "lume/plugins/pagefind.ts"

import blog from "blog/mod.ts";

const site = lume();

site.use(attributes());
site.use(codeHighlight());
site.use(date());
site.use(favicon());
site.use(katex());
// site.use(pagefind());

site.use(blog());

export default site;
