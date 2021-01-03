const data = [
	{
		name: 'vue.js',
		displayName: 'Vue.js',
		logo: 'vue.png',
		stack: [ 'js', 'framework' ],
		icons: ['js', 'framework'],
		shortDesc: 'Blazing fast JavaScript framework',
		desc: `Vue.js is an open-source lightweight front end JavaScript framework used to build creative user interfaces and high-performance single page web applications with minimum effort.
		Created by Evan You and launched in 2014. Its inspired by Angular but its more simple and lightweight. </br>
		<p>Vue.js take the best from React and Angular and implement it to the small package called Vue.js. As example we can mention 2-way data binding as we know from Angular and so called “Virtual DOM” from React. 
		Its most flexible framework that can be used from small apps to big applications.</p><p> Its fast, progressive, easy to learn plus it can be adapts o developer’s needs. Also need to mention that its small sized framework, well documented and very easy to integrated to any other applications or framework.</p>
		`,
		pros: {
			Simplicity: 'With Vue.js its easy to type because of using less syntax also easy to read the code. It has single file component system thats states for any component can have HTML,CSS and JavaScript in the same file',
			BuildInMvc: 'Vue has an inbuilt MVC that enables quick and easy configuration.',
			EasyToLearn: 'Vue.js makes it easy for you to learn and over time the code complexity is not growing. No need knowledge of JSX or Typescript',
			SmallSized: 'All framework is gzipped to 18-20kb in size so its beating all major rivals like React or Angular',
			Integration: 'You can integrate Vue.js into another apps or even frameworks. So you can focus more on development instead of integration',
		},
		cons: {
			SmallCommunity: 'Vue.js does not have big company behind like Facebook or Google(React and Angular).Still with all the props it managed to create community of bakes. Thanks to those bakers and contributors Evan and his team managed to craft one of the most powerful and loved framework the dev community has ever seen.'
		},
		githubStars: '+178k',
		publishDate: '2014',
		developerName: 'Evan You and Community',
		githubLink: 'https://github.com/vuejs/vue',
		website: 'https://vuejs.org/'
	},
	{
		name: 'react.js',
		displayName: 'React.js',
		logo: 'react.png',
		stack: [ 'js', 'framework' ],
		icons: ['js', 'framework'],
		shortDesc: 'Fast evolving framework',
		desc: `React.js created in 2011 by company Facebook. Its open-source JavaScript library(not a full-fledged framework). First started as experiment for “newsfeed” then expanded. React can be considered as one of the biggest influential disruptors in the web development.
		Its introduced as component-based, function  and declarative programming style for creating interactive user interfaces.  In most cases used as single page applications. Its fast framewroks thanks to “Virtual DOM” - means rendering only components that changed. So its not re-rendering whole page but only changed parts. Another thing is that React use JSX syntax instead of JavaScript.
		Although React presents a slightly steeper learning curve than other best front end JavaScript frameworks.React.js is consider as one of the most popular Javascript framework`,
		pros: {
			ReusableComponent : 'React is component based - so importing UI components without breaking a sweat insteading of coding them from scratch.',
			EasyIntegration: 'React allows easy integration with other front-end and back-end framework like the popular PHP framework Laravel to work in tandem without a hitch.',
			OneDirectionDataFlow: 'Means that data can flow only one direction which causes that child components cannot be affected by parent. Make code and application more stable.Simpler syntax - Using JSX JavaScript extension instead JavaScript makes code easy to read',
			VirualDom: 'React compares the virtual DOM to the real DOM to only render components that have changed instead of rendering the whole page. This is the key behind React’s blazing fast performance.',
			Seo: 'After many improvements, React is one of the most SEO friendly front end frameworks that facilitates page crawling. Traditional JavaScript frameworks that rendered content dynamically were notorious for their poor SEO performance and incompatibility with search engine crawlers.',
		},
		cons: {
			AlthoughJsx: 'a simpler syntax that is easier to read and comprehend, it might present an additional learning barrier to new developers.',
			DeeperCurve: 'many developers feels that React learning curve is steeper and bloated with complexity compare to other JS frameworks.',
			PoorDocumentation: 'compare to others React has less documentation. Especial when new releases are launched.',
			ViewLayerOnly: 'react handle only view layer from MVC to handle Model and Controller you need to use other technologies.',
			FastEvolving: 'React.js is super evolving which is on one side good, but can be exhausting and difficult to stay up to day with new features.'

		},
		githubStars: '+162k',
		publishDate: '2011',
		developerName: 'Facebook',
		githubLink: 'https://github.com/facebook/react/',
		website: 'https://reactjs.org/'
	},
	{
		name: 'angular.js',
		displayName: 'Angular.js',
		logo: 'angular.png',
		stack: [ 'js', 'framework' ],
		icons: ['js', 'framework'],
		shortDesc: 'Most secured frontend framework',
		desc: `Angular is an open-source typescript based framework by Google used to build client-side single-page web applications. Angular takes inspiration from React with MVW architecture and transfer it to component-based architecture.  For today its one of the most secured front end JavaScript framework. With Angular you can build small application to enterprise-scale applications.`,
		pros: {
			Components: 'After MVW architecture Angular goes with a strictly component-based architecture that facilitates reusability.',
			ServerPerformance: 'Angular supports out of the box caching and tons of features to ensure fast server performance.',
			Mvc: 'Model View Controller in angular establishes key features like scopes and data binding.',
			TwoWayDataBinding: 'One key feature of Angular is 2-way data binding which forms a link between the Model layer and View layer in such a way that each one of them reflects a change in another.',
			ThirdPartyIntegrations: 'Angular offers a rich collection of third party integrations to further enhance their web application.',
		},
		cons: {
			Typescript : 'Typescript offers a lot of advantages but still poses with big learing cure to new developers.',
			HeavyAndBloated: 'Angular size is aroun 550 to 600kb which makes it heavy loading framework. It maybe not suited to small application.',
			PoorSEO: 'Angular struggles with SEO due to acute accessibility issues cornered with search engine crawlers/spiders.',
			SteepLearningCurve: 'Compare to other framework Angular has very steep learing curve and can be daunting for new developers.',

		},
		githubStars: '+59k',
		publishDate: '2010',
		developerName: 'Google',
		githubLink: 'https://github.com/angular/angular.js',
		website: 'https://angularjs.org/'
	},
	{
		name: 'ember.js',
		displayName: 'Ember.js',
		logo: 'ember.png',
		stack: [ 'js', 'framework' ],
		icons: ['js', 'framework'],
		shortDesc: 'Build scalable enterprise-scale application',
		desc: `Ember is open-source Javascript framework used to build scalable enterprise-scale application. Unlike others frameworks Ember.js is based on the Model-View-ViewModel (MVVW) architecture pattern. Most iconic feature is Command-line interface tool which boost productivity. Another important think is that as passionate community.`,
		pros: {
			Api: 'Ember provides a simple mechanism to work with APIs.',
			ConventionOverConfiguration: 'So you can jump straight away to coding and building your web application.',
			RichDocumentation: 'Ember has rich and detail documentation that you can read and learn.',
			EmberCli: 'One key feature of Angular is 2-way data binding which forms a link between the Model layer and View layer in such a way that each one of them reflects a change in another.',
			TwoWayDataBinding: 'Similar to Angular or Vue.',
			BackwardCompatibilityWithPreviousVersions: 'You can use older functionalities on newsest versions.',
		},
		cons: {
			SteepLearningCurve : 'Newbie Developers might find Ember quite challenging.',
			Heavy: 'Ember is more suited to complex large-scale applications and might prove to be too bulky and heavy for small scale simple applications.',
			PoorSEO: 'Angular struggles with SEO due to acute accessibility issues cornered with search engine crawlers/spiders.',
			StagnationInPopularity: 'Ember has suffered a stagnation over the last few years failing to attract new developers into its fold.',

		},
		githubStars: '+22k',
		publishDate: '2011',
		developerName: 'Yehuda Katz',
		githubLink: 'https://github.com/emberjs/ember.js',
		website: 'https://emberjs.com/'
	},
	{
		name: 'svelte.js',
		displayName: 'Svelte.js',
		logo: 'svelte.png',
		stack: [ 'js', 'framework' ],
		icons: ['js', 'framework'],
		shortDesc: 'Typescript based components',
		desc: `Svelte.js is an open-source component-based front- end JavaScript framework written in Typescript. Svelte was launched in 2016 and since then is gaining popularity. For many developers svelte is consider as game-changing and revolutionary.
		<p>Unlike from other Svelte has no virtual DOM, instead you build components boilerplate-free in simple HTML, CSS, and JavaScript code. Svelte Compiler then compiles this code into small framework-free vanilla JavaScript modules during build time and surgically updates the DOM when the state changes. So unlike other traditional frameworks like React or Vue, Svelte does not require high browser processing. As a result, apps built with Svelte are lightning-fast with excellent performance. Other major advantages include zero client-side dependencies, absence of complex state management libraries.
		</p>`,
		pros: {
			Components: 'Build small chunks of application and reused them all the time.',
			EasyToLearn: 'Svelte has gentle learing curve. Thanks  to simple HTML, CSS and JavaScript no additional knowledge of typescript or JSX is required.',
			SmallSize: 'Its smallest bundle sized among other frameworks.',
			Performance : 'Lacking virtual DOM Svelte relies on reactive programming to surgically update the DOM. As a result, Svelte is able to achieve the fastest rendering compared to almost any other framework and tops most of the performance benchmarks.',
		},
		cons: {
			SmallUserBase : 'Even svelte is easy to learn and small, it has not been adapted in industry.',
			LackOfTooling: 'One of the biggest complaints against Svelte has been its poor immature tooling for debugging applications.',
			LackOfThirdPartyComponents: 'Unlike from others framework there are not any libraries like bootstrap, material ui etc that implements those framework and Svelte.js..',
			ScalabilityIssues: 'Some developers might feel that Svelte is difficult to scale as it doesn’t officially support Typescript.',

		},
		githubStars: '+40k',
		publishDate: '2016',
		developerName: 'Rich Harris',
		githubLink: 'https://github.com/sveltejs/svelte',
		website: 'https://svelte.dev/'
	},
	{
		name: 'bootstrap',
		displayName: 'Bootstrap',
		logo: 'bootstrap.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Most popular Css framework',
		desc: `Bootstrap is the most popular css framework, its not exclusively a CSS framework, its most popular features are the CSS-based ones. It has large number of components that you can use to build prototypes or full web site application.
		</ br>First release was in 2011 and since then its gaining popularity.
		`,
		pros: {
			Components: 'Bootstrap has plenty of components that you can use. ',
			GridSystem: 'One of the most useable grid system based on flex.',
			Documentation : 'Bootstrap is well documented and has plenty of examples.',
			Community  : 'It has one of the most largest community.',
		},
		cons: {
			Large: 'Bootstrap has lots of components but it comes with lot of code that slow down loading website.',
			Overrides: 'To achieve unique look of your app you have to override the code.',
			Learning : 'Even with big documentation learing all the principles and classes takes time',

		},
		githubStars: '+146k',
		publishDate: '2011',
		developerName: 'Original by Twitter, nowdayes by Community',
		githubLink: 'https://github.com/twbs/bootstrap',
		website: 'https://getbootstrap.com/'
	},
	{
		name: 'foundation',
		displayName: 'Foundation',
		logo: 'foundation.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Sass based components with ease',
		desc: `One of the popular css frameworks. Has easy to implement CSS components. Its build on Sass so its easy to customize and comes with nice responsive features.`,
		pros: {
			MobileFirst: 'Written with mobile first in mind.',
			EasyToCustomize: 'With Sass you can redesign Foundation to your need without overriding.',
			Semantic: 'Everything is semantic. You can have the cleanest markup without sacrificing the utility and speed of Foundation.',
		},
		cons: {
			LearingCurve: 'With those power that Foundation has learing his hard.',
			Support: 'Since its not so popular as bootstrap, support from community is bit smaller than for bootstrap.',

		},
		githubStars: '+28k',
		publishDate: '2011',
		developerName: 'Zubr',
		githubLink: 'https://github.com/foundation/foundation-sites',
		website: 'https://get.foundation/'
	},
	{
		name: 'semanticui',
		displayName: 'Semantic UI',
		logo: 'semanticUI.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Semantic css for development',
		desc: `Semantic UI has a lot of feature overlaps with other popular frameworks but the way it works (implied by the name) is based on the semantic nature of the class names that are used to build components. In other words, the class names are human friendly.`,
		pros: {
			VeryEasyToUse: 'This reason is one of the main ones for developers. Semantic UI is very intuitive.',
			LesstTimeToDesignAPage: 'Naming Semantic UI classes with meaningful names not only make the learning curve shorter but also makes developing projects more intuitive and faster.',
			WideVarietyOfThemesAvailable: 'Layout variety is a weak point of Bootstrap and a strong point for Semantic UI.',
		},
		cons: {
			LessResponsiveDesign: 'Unlike the previous point, this can be a bigger problem, considering that web designers are increasingly forced to think about a wide variety of devices.',
			SmallerCommunity: 'Few recent updates. Perhaps this is the most worrying point about Semantic UI, and that caused concern among its followers just over a year ago.',

		},
		githubStars: '+48k',
		publishDate: '2013',
		developerName: 'Semantic Organization',
		githubLink: 'https://github.com/semantic-org/semantic-ui',
		website: 'https://semantic-ui.com/'
	},
	{
		name: 'ui kit',
		displayName: 'UI kit',
		logo: 'uikit.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Specialsed components based on flexbox',
		desc: `Another popular css framework among developer. Comes with same features as other frameworks but with useful specialised components.UI Kit has flexbox-based layouts with UIkit using plain HTML. As boostrap and other it has also utility classes to boost your developer powers.`,
		pros: {
			EasyToLearn: 'With easy to understand classes ad unique flexbox system easy to start.',
			Themes: 'Comes with plenty ready to use themes.',
			Animations: 'UI kit has build in animateion that you can use.',
			Modular: 'UI kit is develop with modularity in mind.',
		},
		cons: {
			SlowDevelopment: 'With 6 months cycles, bug fixes are more frequent but very slow and selective as well.',
			NotVeryPopular: 'UiKit is not a very popular framework, especially compared to other options. As such it may be hard to find learning resources other than the official documentation.',

		},
		githubStars: '+16k',
		publishDate: '2017',
		developerName: 'YOOtheme',
		githubLink: 'https://github.com/uikit/uikit',
		website: 'https://getuikit.com/'
	},
	{
		name: 'bulma css',
		displayName: 'Bulma css',
		logo: 'bulma.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Simple semantics css framework',
		desc: `Its primary feature is the fact that its components are largely dependent on flexbox, making it a truly modern framework. You can think of Bulma is being somewhat like a hybrid of Bootstrap and Semantic UI but without any of the complexity. It uses some of the same principles as Semantic UI with its class names, includes many of the popular components, yet manages to keep things simple`,
		pros: {
			Responsivity: 'The framework is mobile first and works similarly to the popular Bootstrap CSS.',
			WellDocumented: 'Bulma is very well documented, and comes with an active community of people ready to help with projects.',
			Components : 'Bulma comes packed with all of the goods you would expect from a CSS framework, including diverse typography, buttons, forms, tables, and more.',
			Modular: 'The Bulma setup is built with Sass, which means that you can design your framework step by step with only the features you need.',
		},
		cons: {
			Size: 'Bulma is same as Bootstrap comes with huge library of components and varianty but in same time comes the size.',
			NotFinal: 'Bulma is still under development, but almost ready to use airly new - not so large community ready to help you.',
		},
		githubStars: '+42k',
		publishDate: '2016',
		developerName: 'Jeremy Thomas',
		githubLink: 'https://github.com/jgthms/bulma',
		website: 'https://bulma.io/'
	},
	{
		name: 'tailwind css',
		displayName: 'Tailwind css',
		logo: 'tailwind.png',
		stack: [ 'css', 'framework' ],
		icons: ['css', 'framework'],
		shortDesc: 'Atomic css for components',
		desc: `Tailwind is implementing Atomic CSS. The idea behind Tailwind is that instead of starting out with pre-styled cookie-cutter components, you build everything from the ground up using utility classes. The learning curve is definitely higher on this one, especially if Atomic CSS is new to you.`,
		pros: {
			PredefinesClasses: 'No needed to create new classes. Everything was already created.',
			Names: 'Tailwind comes with meaningful variables.',
			BuildingComponents : 'With atomic classes you can create components to your needs without overrides.',
		},
		cons: {
			LackOfComponents: 'Every component you have to created by yourself.',
			Learing: 'With Atomic classes you need to learn classes names.',
		},
		githubStars: '+33k',
		publishDate: '2017',
		developerName: 'Tailwind Labs',
		githubLink: 'https://github.com/tailwindlabs/tailwindcss',
		website: 'https://tailwindcss.com/'
	},
	{
		name: 'font Awesome',
		displayName: 'Font Awesome',
		logo: 'fontAwesome.png',
		stack: [ 'icons' ],
		icons: ['icons'],
		shortDesc: 'Most popular icon pack',
		desc: `Started in 2012 is the most popular icon collection. The library includes a collection of more than 1,500 icons you can use for free. It supports popular web development frameworks such as React, Angular, and Vue as well popular design tools such as Sketch and Adobe apps.`,
		pros: {},
		cons: {},
		githubStars: '+65k',
		publishDate: '2012',
		developerName: 'Dave Gandy',
		githubLink: 'https://github.com/FortAwesome/Font-Awesome',
		website: 'https://fontawesome.com/'
	},
	{
		name: 'flaticon',
		displayName: 'Flaticon',
		logo: 'flaticon.png',
		stack: [ 'icons' ],
		icons: ['icons'],
		shortDesc: 'Biggiest library of graphics',
		desc: `2,000,000+ Free vector icons in SVG, PSD, PNG, EPS format or as ICON FONT. Thousands of free icons in the largest database of free vector icons.`,
		pros: {},
		cons: {},
		githubStars: '',
		publishDate: '',
		developerName: 'Flaticon',
		githubLink: '',
		website: 'https://www.flaticon.com/'
	},
	{
		name: 'icoMoon',
		displayName: 'IcoMoon',
		logo: 'icomoon.png',
		stack: [ 'icons' ],
		icons: ['icons'],
		shortDesc: 'Build your own icon pack',
		desc: `Available as both a website and an app, IcoMoon offers more than 4,000 free icons and offline storage of icons. Each icon pack features detailed licensing so that designers and developers know exactly how icons can be used. Users can also make their own custom icon fonts.`,
		pros: {},
		cons: {},
		githubStars: '',
		publishDate: '',
		developerName: 'IcoMoon',
		githubLink: '',
		website: 'https://www.flaticon.com/'
	},
];

export default data;
