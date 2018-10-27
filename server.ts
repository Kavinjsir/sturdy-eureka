import * as Koa from 'koa';
import * as send from 'koa-send';

const STATIC_PREFIX = '/static/';
const INDEX_FILENAME = 'index.html';

async function staticFileHandler(ctx: Koa.Context): Promise<void> {
  if (ctx.method.toUpperCase() !== 'GET') ctx.throw(400, 'Invalid Request');

  const path = ctx.path.startsWith(STATIC_PREFIX)
    ? ctx.path.substr(STATIC_PREFIX.length)
    : INDEX_FILENAME;
  const root = __dirname + '/static';
  await send(ctx, path, { root });
}

const app = new Koa();

app.use(staticFileHandler);

app.listen(10000);
