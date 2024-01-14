export interface Binary {
	kind: "binary";
	left: Expr;
	operator: '+' | '*';
	right: Expr;
}

export interface Literal {
	kind: "literal";
	value: number;
}

export type Expr = Binary | Literal;

export type ExpressionVisitor<R> = {
	[Kind in Expr["kind"]]: (expr: Extract<Expr, { kind: Kind }>) => R;
};

export function visitExpr<R>(expr: Expr, visitor: ExpressionVisitor<R>): R {
	return visitor[expr.kind](expr as never);
}
