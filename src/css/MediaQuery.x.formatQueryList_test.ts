import MediaQuery, { MediaType, Hoverable } from './MediaQuery';
import { assert } from 'chai';

describe('MediaQuery.formatQueryList()', function() {
	it('format query list', function() {
		let ok = function(testcase: string, mq: MediaQuery, exp: string) {
			let act = mq.formatQueryList();
			assert.equal(act, exp, testcase);
		};
		ok( "empty defaults",
			new MediaQuery({}),
			"",
		)
		ok( "print",
			new MediaQuery({
				mediaType: MediaType.PRINT,
			}),
			"print",
		)
		ok( "screen",
			new MediaQuery({
				mediaType: MediaType.SCREEN,
			}),
			"screen",
		)
		ok( "speech",
			new MediaQuery({
				mediaType: MediaType.SPEECH,
			}),
			"speech",
		)
		ok( "hoverable",
			new MediaQuery({
				hoverable: Hoverable.YES,
			}),
			"(hover: hover)",
		)
		ok( "not hoverable",
			new MediaQuery({
				hoverable: Hoverable.NO,
			}),
			"(hover: none)",
		)
		ok( "min width",
			new MediaQuery({
				minWidth: 1024,
			}),
			"(min-width: 1024px)",
		)
		ok( "max width",
			new MediaQuery({
				maxWidth: 1024,
			}),
			"(max-width: 1024px)",
		)
		ok( "type and feature order",
			new MediaQuery({
				mediaType: MediaType.SCREEN,
				minWidth: 640,
				maxWidth: 1023,
				hoverable: Hoverable.YES,
			}),
			"screen and (min-width: 640px) and (max-width: 1023px) and (hover: hover)",
		)
	});
});

