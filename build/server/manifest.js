const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "pet-shop/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DWl08kcB.js",app:"_app/immutable/entry/app.BC8W1oQ9.js",imports:["_app/immutable/entry/start.DWl08kcB.js","_app/immutable/chunks/V749h5rS.js","_app/immutable/chunks/rNBbjRlv.js","_app/immutable/chunks/8awdpR_o.js","_app/immutable/entry/app.BC8W1oQ9.js","_app/immutable/chunks/rNBbjRlv.js","_app/immutable/chunks/BORTwroN.js","_app/immutable/chunks/k3_NulFU.js","_app/immutable/chunks/Z4CaN5pW.js","_app/immutable/chunks/C_W5NQmO.js","_app/immutable/chunks/8awdpR_o.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dds9D_hk.js')),
			__memo(() => import('./chunks/1-BN4bKd2r.js')),
			__memo(() => import('./chunks/2-BYcIWjVM.js')),
			__memo(() => import('./chunks/3-Bfbaf-eY.js')),
			__memo(() => import('./chunks/4-B7yIj63p.js')),
			__memo(() => import('./chunks/5-DUG64EUI.js')),
			__memo(() => import('./chunks/6-D17QnUCt.js')),
			__memo(() => import('./chunks/7-D6mnA5Ni.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/log-in",
				pattern: /^\/log-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/meow-shop",
				pattern: /^\/meow-shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/woof-shop",
				pattern: /^\/woof-shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/pet-shop";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
