import Order from './Order';
import { assert } from 'chai';

describe('Order.toString()', function() {
	it('should serialize order', function() {
		let ok = function(order: Order, exp: string) {
			let act = order.toString();
			assert.equal(act, exp);
		}
		ok(new Order(1), "Order[1]");
		ok(new Order(1, 2), "Order[1, 2]");
		ok(new Order(1, 2, 3), "Order[1, 2, 3]");
		
		ok(new Order(), "Order[<UNDEFINED>]");
	});
});

