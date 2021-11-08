"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73671],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,y=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Using QueryBuilder"},u=void 0,s={unversionedId:"query-builder",id:"version-2.7/query-builder",isDocsHomePage:!1,title:"Using QueryBuilder",description:"When you need to execute some SQL query without all the ORM stuff involved, you can either",source:"@site/versioned_docs/version-2.7/query-builder.md",sourceDirName:".",slug:"/query-builder",permalink:"/docs/2.7/query-builder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/query-builder.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636410599,formattedLastUpdatedAt:"11/8/2021",frontMatter:{title:"Using QueryBuilder"},sidebar:"version-2.7/docs",previous:{title:"Smart query conditions",permalink:"/docs/2.7/query-conditions"},next:{title:"Serializing",permalink:"/docs/2.7/serializing"}},d=[{value:"Running native SQL query",id:"running-native-sql-query",children:[],level:2},{value:"Executing the query",id:"executing-the-query",children:[],level:2},{value:"Mapping raw results to entities",id:"mapping-raw-results-to-entities",children:[],level:2},{value:"Implicit joining",id:"implicit-joining",children:[],level:2},{value:"Explicit joining",id:"explicit-joining",children:[],level:2},{value:"Complex where conditions",id:"complex-where-conditions",children:[{value:"Custom SQL in where",id:"custom-sql-in-where",children:[],level:3},{value:"andWhere() and orWhere()",id:"andwhere-and-orwhere",children:[],level:3},{value:"Condition object",id:"condition-object",children:[],level:3}],level:2},{value:"Locking support",id:"locking-support",children:[],level:2},{value:"QueryBuilder API",id:"querybuilder-api",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," also supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/query-conditions"},"smart query conditions"),"."),(0,i.kt)("h2",{id:"running-native-sql-query"},"Running native SQL query"),(0,i.kt)("p",null,"You can run native SQL via underlying connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const connection = orm.em.getConnection();\nconst res = await connection.execute('SELECT 1 as count');\nconsole.log(res); // res is array of objects: `[ { count: 1 } ]`\n")),(0,i.kt)("h2",{id:"executing-the-query"},"Executing the query"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"execute(method = 'all', mapResults = true)"),"'s parameters to control form of result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res1 = await qb.execute('all'); // returns array of objects, default behavior\nconst res2 = await qb.execute('get'); // returns single object\nconst res3 = await qb.execute('run'); // returns object like `{ affectedRows: number, insertId: number, row: any }`\n")),(0,i.kt)("p",null,"Second argument can be used to disable mapping of database columns to property names (which\nis enabled by default). In following example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity has ",(0,i.kt)("inlineCode",{parentName:"p"},"createdAt")," property defined\nwith implicit underscored field name ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res4 = await orm.em.createQueryBuilder(Book).select('*').execute('get', true);\nconsole.log(res4); // `createdAt` will be defined, while `created_at` will be missing\nconst res5 = await orm.em.createQueryBuilder(Book).select('*').execute('get', false);\nconsole.log(res5); // `created_at` will be defined, while `createdAt` will be missing\n")),(0,i.kt)("p",null,"To create entities from query builder result, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"merge()")," method of ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res6 = await orm.em.createQueryBuilder(Book).select('*').execute();\nconst entities = res6.map(data => orm.em.merge(Book, data));\nconsole.log(entities); // array of Book entities\n")),(0,i.kt)("h2",{id:"mapping-raw-results-to-entities"},"Mapping raw results to entities"),(0,i.kt)("p",null,"Another way to create entity from raw results (that are not necessarily mapped to entity properties)\nis to use ",(0,i.kt)("inlineCode",{parentName:"p"},"map()")," method of ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),", that is basically a shortcut for mapping results\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," (which converts field names to property names - e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"createdAt"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"merge()")," which converts the data to entity instance and makes it managed. "),(0,i.kt)("p",null,"This method comes handy when you want to use 3rd party query builder like ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/"},"Knex.js"),",\nwhere the result is not mapped to entity properties automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));\nconst users = results.map(user => orm.em.map(User, user));\n\n// or use EntityRepository.map()\nconst repo = orm.em.getRepository(User);\nconst users = results.map(user => repo.map(user));\n")),(0,i.kt)("h2",{id:"implicit-joining"},"Implicit joining"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," supports automatic joining based on entity metadata:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select('*').where({ books: 123 });\n\nconsole.log(qb.getQuery());\n// SELECT `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk`\n// FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// WHERE `e1`.`book_uuid_pk` = ?\n")),(0,i.kt)("h2",{id:"explicit-joining"},"Explicit joining"),(0,i.kt)("p",null,"Another way is to manually specify join property via ",(0,i.kt)("inlineCode",{parentName:"p"},"join()"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"leftJoin()")," methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.uuid', 'b.*', 't.*'], true)\n  .join('t.books', 'b')\n  .where({ 'b.title': 'test 123' })\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT DISTINCT `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE `b`.`title` = ?\n// LIMIT ? OFFSET ?\n")),(0,i.kt)("h2",{id:"complex-where-conditions"},"Complex where conditions"),(0,i.kt)("p",null,"There are multiple ways to construct complex query conditions. You can either write parts of SQL\nmanually, use ",(0,i.kt)("inlineCode",{parentName:"p"},"andWhere()"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"orWhere()"),", or provide condition object:"),(0,i.kt)("h3",{id:"custom-sql-in-where"},"Custom SQL in where"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? OR b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// LEFT JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE (((b.title = ? OR b.title = ?) AND (1 = 1)) OR (1 = 2))\n// LIMIT ? OFFSET ?\n")),(0,i.kt)("h3",{id:"andwhere-and-orwhere"},"andWhere() and orWhere()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? OR b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// LEFT JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE (((b.title = ? OR b.title = ?) AND (1 = 1)) OR (1 = 2))\n// LIMIT ? OFFSET ?\n")),(0,i.kt)("h3",{id:"condition-object"},"Condition object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// SELECT `e0`.* FROM `test` AS `e0` WHERE (`e0`.`id` NOT IN (?, ?) AND `e0`.`id` > ?)\n")),(0,i.kt)("h2",{id:"locking-support"},"Locking support"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ name: 'Lol 321' }).setLockMode(LockMode.PESSIMISTIC_READ);\n\nconsole.log(qb.getQuery()); // for MySQL\n// SELECT `e0`.* FROM `test` AS `e0` WHERE `e0`.`name` = ? LOCK IN SHARE MODE\n")),(0,i.kt)("h2",{id:"querybuilder-api"},"QueryBuilder API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"QueryBuilder.select(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.insert(data: any): QueryBuilder;\nQueryBuilder.update(data: any): QueryBuilder;\nQueryBuilder.delete(cond: any): QueryBuilder;\nQueryBuilder.count(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.join(field: string, alias?: string): QueryBuilder;\nQueryBuilder.leftJoin(field: string, alias?: string): QueryBuilder;\nQueryBuilder.where(cond: any, operator: '$and' | '$or'): QueryBuilder;\nQueryBuilder.andWhere(cond: any): QueryBuilder;\nQueryBuilder.orWhere(cond: any): QueryBuilder;\nQueryBuilder.groupBy(fields: string | string[]): QueryBuilder;\nQueryBuilder.having(cond: any): QueryBuilder;\nQueryBuilder.populate(populate: string[]): QueryBuilder;\nQueryBuilder.limit(limit: number, offset?: number): QueryBuilder;\nQueryBuilder.offset(offset: number): QueryBuilder;\nQueryBuilder.setLockMode(mode: LockMode): QueryBuilder;\nQueryBuilder.getQuery(): string;\nQueryBuilder.getParams(): any;\nQueryBuilder.clone(): QueryBuilder;\n")))}p.isMDXComponent=!0}}]);