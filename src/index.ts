import {Expr, visitExpr} from './interface';
import {Interpreter} from './class';

const expr: Expr = {
  kind: 'binary',
  operator: '+',
  left: {
    kind: 'literal',
    value: 1,
  },
  right: {
    kind: 'literal',
    value: 2
  },
};

console.log(visitExpr(expr, new Interpreter()));
