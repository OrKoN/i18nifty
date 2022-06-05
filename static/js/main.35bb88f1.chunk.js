(this.webpackJsonpi18nifty_landingpage=this.webpackJsonpi18nifty_landingpage||[]).push([[0],{528:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(93),i=n(237),r={home:Object(o.c)("/")};Object(i.makeThisModuleAnExecutableRouteLister)(r);var s=Object(o.b)({scrollToTop:!1},r),c=s.RouteProvider,l=s.useRoute,u=s.routes,d="https://github.com/garronej/i18nifty",p="https://stackblitz.com/edit/react-ts-m4d8w7?file=components/MyComponent.tsx",b=n(54),h=Object(b.createI18nApi)()({languages:["en","fr"],fallbackLanguage:"en"},{en:{App:{documentation:"Documentation","try it":"Try it"},Home:{"hero text subtext":"Type-safe internationalization and translation in React",subTitle:"A i18n library designed to leverage TypeScript's type inference capability.","article title":"Localization is much less of a chore when assisted by intellisense.","article body":"With i18nifty you get red squiggly lines wherever translations are missing.  \n\t\t\t\tWhen using the translation function you are provided with a list of available keys in the context of a given component.\n\t\t\t\t","try now":"Try in a playground"},FourOhFour:{"not found":"Page not found"}},fr:{App:{documentation:"Documentation","try it":"Essayez"},Home:{"hero text subtext":"Type-safe internationalisation et traduction en React",subTitle:"Une libraire i18n con\xe7u pour tirer profit des capacit\xe9s d'inf\xe9rence de TypeScript.","article title":"Guid\xe9e par intllisense, la localisation n'est plus autant une corv\xe9e.","article body":"Avec i18n, partout o\xf9 des traductions sont manquante vous aurez du rouge.  \n\t\t\t\tQuand vous utilisez la fonction de traduction, les clefs disponibles dans le context d'un composant donn\xe9 vous seront propos\xe9.","try now":"Essayez dans une sandbox"},FourOhFour:{"not found":"Page non trouv\xe9e"}}}),m=h.useTranslation,g=(h.resolveLocalizedString,h.useLang),y=(h.useResolveLocalizedString,n(43)),j=n(18),f=n(71),O=n(86),x=n(108),v=n(154),S=n(52),T=n(241),w=n(244),k=n.n(w),L=n(155),I=n.n(L),F=n(242),W=n(243),B=n(107),R=Object(j.createThemeProvider)({getTypographyDesc:function(e){return Object(y.a)(Object(y.a)({},Object(j.defaultGetTypographyDesc)(e)),{},{fontFamily:'"Work Sans", sans-serif'})},palette:j.ultravioletPalette}),G=R.ThemeProvider,P=R.useTheme,A=Object(S.createMakeStyles)({useTheme:P}),C=A.makeStyles,H=(A.useStyles,Object(f.createIcon)({accessTime:k.a,sentimentSatisfied:I.a}).Icon),z=(Object(O.createIconButton)({Icon:H}).IconButton,Object(x.createButton)({Icon:H}).Button,Object(v.createText)({useTheme:P}).Text),D={Logo:Object(B.createOnyxiaSplashScreenLogo)({useTheme:P}).OnyxiaSplashScreenLogo,minimumDisplayDuration:0},E=(Object(T.createPageHeader)({Icon:H}).PageHeader,Object(F.createButtonBarButton)({Icon:H}).ButtonBarButton,Object(W.createLanguageSelect)({languagesPrettyPrint:{en:"English",fr:"Fran\xe7ais"}}).LanguageSelect),_=n(3),M=Object(a.memo)((function(){var e=m({FourOhFour:M}).t,t=V().classes;return Object(_.jsx)("div",{className:t.root,children:Object(_.jsxs)(z,{typo:"page heading",children:[e("not found")," \ud83d\ude25"]})})})),V=C({name:{FourOhFour:M}})((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.useCases.surfaces.background}}})),K=(Object(b.declareComponentKeys)()({FourOhFour:M}).i18n,n(245)),N=n(246),U=n(156),q=n.p+"static/media/demo_1.beef42c2.mp4",J=n.p+"static/media/demo_1.70105f5e.webm",Q=n.p+"static/media/demo_2.67a024ab.mp4",X=n.p+"static/media/demo_2.95e716b2.webm",Y=n(250);function Z(){var e=m({Home:Z}).t,t=$().classes;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(N.GlHero,{title:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(U.GlHeroText,{children:"i18nifty"}),Object(_.jsx)(z,{typo:"display heading",className:t.title2,children:e("hero text subtext")})]}),subTitle:e("subTitle"),illustration:{type:"video",sources:[{src:q,type:"video/mp4"},{src:J,type:"video/webm"}],hasShadow:!0},hasLinkToSectionBellow:!0,classes:{subtitle:t.heroSubtitle,imageWrapper:t.heroImageWrapper,textWrapper:t.heroTextWrapper,illustration:t.heroImage}}),Object(_.jsx)(Y.GlArticle,{id:"firstSection",title:e("article title"),body:e("article body"),buttonLabel:e("try now"),buttonLink:{href:p},classes:{video:t.articleVideo},illustration:{type:"video",sources:[{src:Q,type:"video/mp4"},{src:X,type:"video/webm"}]},hasAnimation:!0,illustrationPosition:"left"})]})}Z.routeGroup=Object(o.a)([u.home]);Object(b.declareComponentKeys)()({Home:Z}).i18n;var $=C({name:{Home:Z}})((function(e){return{heroImage:{borderRadius:10,maxWidth:700},articleVideo:{maxWidth:500,borderRadius:10},title2:{color:e.colors.useCases.typography.textFocus,fontStyle:"italic"},heroSubtitle:{color:e.colors.useCases.typography.textPrimary},heroImageWrapper:Object(y.a)({},e.windowInnerWidth>=j.breakpointsValues.lg?{paddingRight:30,paddingLeft:30}:{}),heroTextWrapper:Object(y.a)({},e.windowInnerWidth>=j.breakpointsValues.lg?{marginLeft:70}:{})}})),ee=n(251),te=n(252),ne=n.p+"static/media/banner_dark.e854ac3e.png",ae=n.p+"static/media/banner_light.616d8255.png",oe=Object(a.memo)((function(){var e=l(),t=g(),n=t.lang,o=t.setLang,i=Object(j.useSplashScreen)().hideRootSplashScreen;Object(a.useEffect)((function(){i()}),[]);var r=m({App:oe}).t,s=ie(),c=s.classes,u=s.theme;return Object(_.jsx)(K.GlTemplate,{header:Object(_.jsx)(ee.GlHeader,{title:Object(_.jsx)(te.GlLogo,{logoUrl:u.isDarkModeEnabled?ne:ae,width:150}),links:[{label:"GitHub",href:d},{label:r("documentation"),href:"https://docs.i18nifty.dev"},{label:r("try it"),href:p}],enableDarkModeSwitch:!0,githubRepoUrl:d,githubButtonSize:"large",showGithubStarCount:!0,customItemEnd:Object(_.jsx)(E,{className:c.languageSelect,language:n,onLanguageChange:o,variant:"big"})}),headerOptions:{position:"sticky",isRetracted:"smart"},children:function(){var t=Z;return t.routeGroup.has(e)?Object(_.jsx)(t,{}):Object(_.jsx)(M,{})}()})})),ie=(Object(b.declareComponentKeys)()({App:oe}).i18n,C({name:{App:oe}})((function(e){return{languageSelect:{marginLeft:e.spacing(3),display:function(){if(!(e.windowInnerWidth>=j.breakpointsValues.lg))return"none"}()}}}))),re=n(253);Object(re.createRoot)(document.getElementById("root")).render(Object(_.jsx)(a.StrictMode,{children:Object(_.jsx)(c,{children:Object(_.jsx)(G,{splashScreen:D,children:Object(_.jsx)(oe,{})})})}))}},[[528,1,2]]]);
//# sourceMappingURL=main.35bb88f1.chunk.js.map