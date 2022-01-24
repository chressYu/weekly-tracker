(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{606:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是css自定义属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是css自定义属性"}},[s._v("#")]),s._v(" 什么是CSS自定义属性？")]),s._v(" "),a("p",[s._v("CSS的自定义属性等同于JS中的"),a("code",[s._v("let")]),s._v(",它可以用来定义在样式中重复使用的属性。\n同时他仍然遵守CSS的级联规则。\n这就意味着我们可以给自定义属性定义默认属性值，然后根据需要来进行覆盖。")]),s._v(" "),a("p",[s._v("可以在属性前面加两个破折号来实现自定义属性"),a("code",[s._v("--my-property")]),s._v("\n在使用CSS函数 "),a("code",[s._v("var()")]),s._v(" 进行调用\n"),s._v(" "),s._v("\n下面的例子定义了一个"),a("code",[s._v("--color")]),s._v("的自定义属性\n并将其用于"),a("code",[s._v("color")]),s._v("的属性值")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"它们与预处理器变量有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#它们与预处理器变量有何不同"}},[s._v("#")]),s._v(" 它们与预处理器变量有何不同？")]),s._v(" "),a("p",[s._v("虽然像Sass和Less这样的预处理器早已将变量投入生产，但是在编译后的样式表中，生成的值仍然是不变的。")]),s._v(" "),a("p",[s._v("预处理器中的变量更适用于在样式中重复，但不需要在编译后更改的属性值。")]),s._v(" "),a("p",[s._v("而对于通过内联样式覆盖和样式表上下文动态更改的属性值来说，自定义属性更具优势")]),s._v(" "),a("p",[s._v("此外，如果我们使用预处理器给按钮设置字体颜色，当我们使用类似"),a("code",[s._v(":hover")]),s._v("之类的变更按钮的字体颜色时，就只能将属性值重新指向另一个预处理器变量。")]),s._v(" "),a("p",[s._v("换句话说，我们不能在预处理器变量定义后再去更改它的值，但是CSS自定义属性可以通过级联规则做到这点。")]),s._v(" "),a("p",[s._v("预处理器变量的另外一个优势在于，可以定义为字符串在任意地方使用，例如媒体查询的断点，或者是如下的选择器字符串")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$classes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".class-a, class-b"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[s._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$classes}")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义 CSS 属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"为什么要使用自定义属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用自定义属性"}},[s._v("#")]),s._v(" 为什么要使用自定义属性？")]),s._v(" "),a("p",[s._v("让我们通过之前的按钮例子来回答这个问题。")]),s._v(" "),a("p",[s._v("如果我想在悬停时更改按钮文本和边框的颜色，就可以直接更改"),a("code",[s._v("--color")]),s._v("值。")]),s._v(" "),a("p",[s._v("请注意我们如何将"),a("code",[s._v("var()")]),s._v("函数仅用作值的一部分，在本例中，用于定义"),a("code",[s._v("border-color")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.25em 0.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.25em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-decoration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn:hover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"使用自定义属性设置默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义属性设置默认值"}},[s._v("#")]),s._v(" 使用自定义属性设置默认值")]),s._v(" "),a("p",[s._v("CSS函数"),a("code",[s._v("var()")]),s._v("既可以调用自定义属性，也可以设置默认值。如下：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们甚至可以将一个自定义属性设置为默认值，让我们来写一个不同版本的"),a("code",[s._v(".btn")]),s._v("类\n把 "),a("code",[s._v("--color")]),s._v(" 当作 "),a("code",[s._v("--border-color")]),s._v(" 的默认值")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn-v2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--border-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.25em 0.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.25em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-decoration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn-v2:hover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"自定义属性的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性的继承"}},[s._v("#")]),s._v(" 自定义属性的继承")]),s._v(" "),a("p",[s._v("根据之前对自定义属性的介绍，\n可能会让大家认为自定义属性应当全部保存到"),a("code",[s._v(":root")]),s._v("选择器上")]),s._v(" "),a("p",[s._v("我要提议的是，在 "),a("code",[s._v(":root")]),s._v("选择器上，应当只保存真正的全局属性\n而自定义属性要尽可能的接近其被调用的地方")]),s._v(" "),a("p",[s._v("另一个关键点在于，通过CSS计算函数如"),a("code",[s._v("calc()")]),s._v("等中使用自定义属性值时，\n会让最终计算值继承")]),s._v(" "),a("p",[s._v("计算出的最终值如果保存在"),a("code",[s._v(":root")]),s._v("选择器上，那么将无法对其进行更改\n如下，虽然"),a("code",[s._v(":root")]),s._v("选择器中的"),a("code",[s._v("--unit")]),s._v("被覆盖了，\n但是"),a("code",[s._v("--size-lg")]),s._v("得到的是最终值，所以"),a("code",[s._v("margin-top--3xl")]),s._v("的上外边距仍为30px")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--size-lg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("3 * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这将不会使 --size-lg 的值重新计算 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".margin-top--3xl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--size-lg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("解决这种继承问题通常采用"),a("code",[s._v(":root")]),s._v("选择器和其余选择器相结合的方式")]),s._v(" "),a("p",[s._v("在下面的例子中，由于"),a("code",[s._v(".margin-top--3xl")]),s._v("的"),a("code",[s._v("--margin-unit")]),s._v("和"),a("code",[s._v("--multiplier")]),s._v("属性覆盖了"),a("code",[s._v(".margin-top")]),s._v("相应的属性，所以"),a("code",[s._v("margin-top")]),s._v("达到了一种动态的效果")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".margin-top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--margin-unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--multiplier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--multiplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--margin-unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".margin-top--3xl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--margin-unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--multiplier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('div[class*="margin"]')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dodgerblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("我们也可以在项目中使用未定义的自定义属性来使项目更加灵活\n未定义的好处在于可以从任何祖先元素继承值")]),s._v(" "),a("p",[s._v("使用未定义属性时我们通常有以下两个选项：")]),s._v(" "),a("ol",[a("li",[s._v("属性未定义并没有默认值，这有些像被赋予了"),a("code",[s._v("unset")]),s._v("\n例如："),a("code",[s._v("color: var(--color)")])]),s._v(" "),a("li",[s._v("属性未定义但是有默认值，当没有继承值时就会使用默认值\n例如："),a("code",[s._v("color: var(--color, blue)")])])]),s._v(" "),a("h2",{attrs:{id:"使用javascript引用和定义自定义属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用javascript引用和定义自定义属性"}},[s._v("#")]),s._v(" 使用JavaScript引用和定义自定义属性")]),s._v(" "),a("p",[s._v("JavaScript操控CSS自定义属性的应用场景：")]),s._v(" "),a("ol",[a("li",[s._v("CSS动画的变换值")]),s._v(" "),a("li",[s._v("响应式布局的视口尺寸")]),s._v(" "),a("li",[s._v("任何不能在CSS中单独获取的值")]),s._v(" "),a("li",[s._v("替代不受支持的CSS属性")])]),s._v(" "),a("p",[s._v("要在JavaScript中访问自定义属性的值，需要使用"),a("code",[s._v("getComputedStyle()")]),s._v("和"),a("code",[s._v("getPropertyValue()")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getComputedStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--my-var"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来我们将使用JavaScript获取段落的宽度。然后将其作为色调值分配给"),a("code",[s._v("hsl()")]),s._v("颜色函数")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".js-color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--hue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 80%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".js-color::after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Current: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.js-color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("setColor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--hue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onresize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" setColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"将预处理器变量和css自定义属性结合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将预处理器变量和css自定义属性结合使用"}},[s._v("#")]),s._v(" 将预处理器变量和CSS自定义属性结合使用")]),s._v(" "),a("p",[s._v("将预处理器变量和自定义变量结合使用，可以充分发挥出两者的优势")]),s._v(" "),a("p",[s._v("我们这里拿Sass举例，将Sass变量作为自定义属性值，可以使用如下插值的办法")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--custom-property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$sass-var}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在平常的工作中，像是品牌主题色之类的功能。\n我们可以使用Sass的"),a("code",[s._v("!default")]),s._v("设置一个默认值，这意味着该值是可以覆盖的。\n然后，我们可以将其用作于自定义属性值，我们还可以利用Sass的其他功能（例如循环）来生成类似的属性组。")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$color-link")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[s._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$font-sizes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"small"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .875rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"normal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"medium"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.25rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"large"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2rem\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[s._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--color-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$color-link}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$size")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$font-sizes")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--font-size-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$size}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$value}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("hr"),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("译文出自："),a("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[s._v("weekly-tracker"),a("OutboundLink")],1),s._v(" 项目，期待你的加入！")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://12daysofweb.dev/2021/css-custom-properties/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看原文"),a("OutboundLink")],1),s._v("对比阅读")]),s._v(" "),a("li",[s._v("发现错误？"),a("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/486/cutsom_properties.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("提交 PR"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("译者："),a("a",{attrs:{href:"http://github.com/myx981008",target:"_blank",rel:"noopener noreferrer"}},[s._v("一绪"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("校对者："),a("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[s._v("daodaolee"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);