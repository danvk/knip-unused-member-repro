import { Binary, Expr, ExpressionVisitor, Literal, visitExpr } from "./interface";

export class Interpreter implements ExpressionVisitor<number> {
	binary(expr: Binary): number {
    const left = this.evaluate(expr.left);
    const right = this.evaluate(expr.right);
    if (expr.operator === '+') {
      return left + right;
    } else if (expr.operator === '*') {
      return left * right;
    }
    throw new Error('unsupported operator');
	}

	literal(expr: Literal): number {
		return expr.value;
	}

	evaluate(expr: Expr): number {
		return visitExpr(expr, this);
	}
}
