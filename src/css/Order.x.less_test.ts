import Order from './Order';

describe('Order.less()', function() {
	it('should correctly sort rules', function() {
		let less = function(o1: Order, o2: Order) {
			let [ less, equal ] = o1.less(o2);
			if (equal) {
				throw new Error("unexpected: orders equal ["+o1+"] ["+o2+"]");
			}
			if ( ! less) {
				throw new Error("expected ["+o1+"] to be less than ["+o2+"]");
			}
		}
		let equal = function(o1: Order, o2: Order) {
			let [ , equal ] = o1.less(o2);
			if ( ! equal) {
				throw new Error("expected ["+o1+"] to be equal ["+o2+"]");
			}
		}

		// Base utilities
		less(
			new Order(1),
			new Order(2),
		)

		// Base utility vs user defined utility
		less(
			new Order(2, 3),
			new Order(1),
		)
		less(
			new Order(1, 1),
			new Order(2),
		)

		// Same base utility with different user defined utilities
		less(
			new Order(1, 2),
			new Order(1, 3),
		)

		// Equal
		equal(
			new Order(1),
			new Order(1),
		)
		equal(
			new Order(2),
			new Order(2),
		)
		equal(
			new Order(1, 2, 3),
			new Order(1, 2, 3),
		)
	});
});

