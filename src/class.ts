import { Binary, ExpressionVisitor, Grouping, Literal, Unary } from "./interface";

export class Interpreter implements ExpressionVisitor<unknown> {
	binary(expr: Binary): unknown {
    return 4;
	}

	grouping(expr: Grouping): unknown {
		return 3;
	}

	literal(expr: Literal): unknown {
		return 2;
	}

	unary(expr: Unary): unknown {
		return 1;
	}
}
