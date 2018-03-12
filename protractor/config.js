import {browser, Config} from 'protractor';

export const config: Config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test/google.spec.js'],
	noGlobals: true,
	onPrepare: () => {
		browser.ignoreSynchronization = true;
	}
}
