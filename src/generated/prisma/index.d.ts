
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Novel
 * 
 */
export type Novel = $Result.DefaultSelection<Prisma.$NovelPayload>
/**
 * Model ContentFile
 * 
 */
export type ContentFile = $Result.DefaultSelection<Prisma.$ContentFilePayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.novel`: Exposes CRUD operations for the **Novel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novels
    * const novels = await prisma.novel.findMany()
    * ```
    */
  get novel(): Prisma.NovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentFile`: Exposes CRUD operations for the **ContentFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentFiles
    * const contentFiles = await prisma.contentFile.findMany()
    * ```
    */
  get contentFile(): Prisma.ContentFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Novel: 'Novel',
    ContentFile: 'ContentFile',
    Chapter: 'Chapter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "novel" | "contentFile" | "chapter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Novel: {
        payload: Prisma.$NovelPayload<ExtArgs>
        fields: Prisma.NovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          findFirst: {
            args: Prisma.NovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          findMany: {
            args: Prisma.NovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          create: {
            args: Prisma.NovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          createMany: {
            args: Prisma.NovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NovelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          delete: {
            args: Prisma.NovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          update: {
            args: Prisma.NovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          deleteMany: {
            args: Prisma.NovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NovelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          upsert: {
            args: Prisma.NovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          aggregate: {
            args: Prisma.NovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovel>
          }
          groupBy: {
            args: Prisma.NovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NovelCountArgs<ExtArgs>
            result: $Utils.Optional<NovelCountAggregateOutputType> | number
          }
        }
      }
      ContentFile: {
        payload: Prisma.$ContentFilePayload<ExtArgs>
        fields: Prisma.ContentFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          findFirst: {
            args: Prisma.ContentFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          findMany: {
            args: Prisma.ContentFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>[]
          }
          create: {
            args: Prisma.ContentFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          createMany: {
            args: Prisma.ContentFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>[]
          }
          delete: {
            args: Prisma.ContentFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          update: {
            args: Prisma.ContentFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          deleteMany: {
            args: Prisma.ContentFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>[]
          }
          upsert: {
            args: Prisma.ContentFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentFilePayload>
          }
          aggregate: {
            args: Prisma.ContentFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentFile>
          }
          groupBy: {
            args: Prisma.ContentFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentFileCountArgs<ExtArgs>
            result: $Utils.Optional<ContentFileCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    novel?: NovelOmit
    contentFile?: ContentFileOmit
    chapter?: ChapterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    novels: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novels?: boolean | UserCountOutputTypeCountNovelsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNovelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovelWhereInput
  }


  /**
   * Count Type NovelCountOutputType
   */

  export type NovelCountOutputType = {
    novelContentFiles: number
    Chapter: number
  }

  export type NovelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novelContentFiles?: boolean | NovelCountOutputTypeCountNovelContentFilesArgs
    Chapter?: boolean | NovelCountOutputTypeCountChapterArgs
  }

  // Custom InputTypes
  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NovelCountOutputType
     */
    select?: NovelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountNovelContentFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentFileWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profileUrl: string | null
    type: string | null
    date: Date | null
    isBanned: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profileUrl: string | null
    type: string | null
    date: Date | null
    isBanned: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profileUrl: number
    type: number
    date: number
    isBanned: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileUrl?: true
    type?: true
    date?: true
    isBanned?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileUrl?: true
    type?: true
    date?: true
    isBanned?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profileUrl?: true
    type?: true
    date?: true
    isBanned?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type: string
    date: Date
    isBanned: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileUrl?: boolean
    type?: boolean
    date?: boolean
    isBanned?: boolean
    novels?: boolean | User$novelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileUrl?: boolean
    type?: boolean
    date?: boolean
    isBanned?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileUrl?: boolean
    type?: boolean
    date?: boolean
    isBanned?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileUrl?: boolean
    type?: boolean
    date?: boolean
    isBanned?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "profileUrl" | "type" | "date" | "isBanned", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novels?: boolean | User$novelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      novels: Prisma.$NovelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      profileUrl: string
      type: string
      date: Date
      isBanned: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novels<T extends User$novelsArgs<ExtArgs> = {}>(args?: Subset<T, User$novelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileUrl: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'String'>
    readonly date: FieldRef<"User", 'DateTime'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.novels
   */
  export type User$novelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    where?: NovelWhereInput
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    cursor?: NovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Novel
   */

  export type AggregateNovel = {
    _count: NovelCountAggregateOutputType | null
    _avg: NovelAvgAggregateOutputType | null
    _sum: NovelSumAggregateOutputType | null
    _min: NovelMinAggregateOutputType | null
    _max: NovelMaxAggregateOutputType | null
  }

  export type NovelAvgAggregateOutputType = {
    id: number | null
  }

  export type NovelSumAggregateOutputType = {
    id: number | null
  }

  export type NovelMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    author: string | null
    translator: string | null
    mc: string | null
    desc: string | null
    coverUrl: string | null
    date: Date | null
    isAnyoneCanUploaded: boolean | null
    isPublished: boolean | null
  }

  export type NovelMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    author: string | null
    translator: string | null
    mc: string | null
    desc: string | null
    coverUrl: string | null
    date: Date | null
    isAnyoneCanUploaded: boolean | null
    isPublished: boolean | null
  }

  export type NovelCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    author: number
    translator: number
    mc: number
    desc: number
    coverUrl: number
    date: number
    isAnyoneCanUploaded: number
    isPublished: number
    _all: number
  }


  export type NovelAvgAggregateInputType = {
    id?: true
  }

  export type NovelSumAggregateInputType = {
    id?: true
  }

  export type NovelMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    author?: true
    translator?: true
    mc?: true
    desc?: true
    coverUrl?: true
    date?: true
    isAnyoneCanUploaded?: true
    isPublished?: true
  }

  export type NovelMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    author?: true
    translator?: true
    mc?: true
    desc?: true
    coverUrl?: true
    date?: true
    isAnyoneCanUploaded?: true
    isPublished?: true
  }

  export type NovelCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    author?: true
    translator?: true
    mc?: true
    desc?: true
    coverUrl?: true
    date?: true
    isAnyoneCanUploaded?: true
    isPublished?: true
    _all?: true
  }

  export type NovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novel to aggregate.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Novels
    **/
    _count?: true | NovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovelMaxAggregateInputType
  }

  export type GetNovelAggregateType<T extends NovelAggregateArgs> = {
        [P in keyof T & keyof AggregateNovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovel[P]>
      : GetScalarType<T[P], AggregateNovel[P]>
  }




  export type NovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovelWhereInput
    orderBy?: NovelOrderByWithAggregationInput | NovelOrderByWithAggregationInput[]
    by: NovelScalarFieldEnum[] | NovelScalarFieldEnum
    having?: NovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovelCountAggregateInputType | true
    _avg?: NovelAvgAggregateInputType
    _sum?: NovelSumAggregateInputType
    _min?: NovelMinAggregateInputType
    _max?: NovelMaxAggregateInputType
  }

  export type NovelGroupByOutputType = {
    id: number
    userId: string
    title: string
    author: string
    translator: string
    mc: string
    desc: string
    coverUrl: string
    date: Date
    isAnyoneCanUploaded: boolean
    isPublished: boolean
    _count: NovelCountAggregateOutputType | null
    _avg: NovelAvgAggregateOutputType | null
    _sum: NovelSumAggregateOutputType | null
    _min: NovelMinAggregateOutputType | null
    _max: NovelMaxAggregateOutputType | null
  }

  type GetNovelGroupByPayload<T extends NovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovelGroupByOutputType[P]>
            : GetScalarType<T[P], NovelGroupByOutputType[P]>
        }
      >
    >


  export type NovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    author?: boolean
    translator?: boolean
    mc?: boolean
    desc?: boolean
    coverUrl?: boolean
    date?: boolean
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: boolean | Novel$userArgs<ExtArgs>
    novelContentFiles?: boolean | Novel$novelContentFilesArgs<ExtArgs>
    Chapter?: boolean | Novel$ChapterArgs<ExtArgs>
    _count?: boolean | NovelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    author?: boolean
    translator?: boolean
    mc?: boolean
    desc?: boolean
    coverUrl?: boolean
    date?: boolean
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: boolean | Novel$userArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    author?: boolean
    translator?: boolean
    mc?: boolean
    desc?: boolean
    coverUrl?: boolean
    date?: boolean
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: boolean | Novel$userArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    author?: boolean
    translator?: boolean
    mc?: boolean
    desc?: boolean
    coverUrl?: boolean
    date?: boolean
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
  }

  export type NovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "author" | "translator" | "mc" | "desc" | "coverUrl" | "date" | "isAnyoneCanUploaded" | "isPublished", ExtArgs["result"]["novel"]>
  export type NovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Novel$userArgs<ExtArgs>
    novelContentFiles?: boolean | Novel$novelContentFilesArgs<ExtArgs>
    Chapter?: boolean | Novel$ChapterArgs<ExtArgs>
    _count?: boolean | NovelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NovelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Novel$userArgs<ExtArgs>
  }
  export type NovelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Novel$userArgs<ExtArgs>
  }

  export type $NovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Novel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      novelContentFiles: Prisma.$ContentFilePayload<ExtArgs>[]
      Chapter: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      author: string
      translator: string
      mc: string
      desc: string
      coverUrl: string
      date: Date
      isAnyoneCanUploaded: boolean
      isPublished: boolean
    }, ExtArgs["result"]["novel"]>
    composites: {}
  }

  type NovelGetPayload<S extends boolean | null | undefined | NovelDefaultArgs> = $Result.GetResult<Prisma.$NovelPayload, S>

  type NovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovelCountAggregateInputType | true
    }

  export interface NovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Novel'], meta: { name: 'Novel' } }
    /**
     * Find zero or one Novel that matches the filter.
     * @param {NovelFindUniqueArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NovelFindUniqueArgs>(args: SelectSubset<T, NovelFindUniqueArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Novel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NovelFindUniqueOrThrowArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NovelFindUniqueOrThrowArgs>(args: SelectSubset<T, NovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindFirstArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NovelFindFirstArgs>(args?: SelectSubset<T, NovelFindFirstArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindFirstOrThrowArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NovelFindFirstOrThrowArgs>(args?: SelectSubset<T, NovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novels
     * const novels = await prisma.novel.findMany()
     * 
     * // Get first 10 Novels
     * const novels = await prisma.novel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const novelWithIdOnly = await prisma.novel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NovelFindManyArgs>(args?: SelectSubset<T, NovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Novel.
     * @param {NovelCreateArgs} args - Arguments to create a Novel.
     * @example
     * // Create one Novel
     * const Novel = await prisma.novel.create({
     *   data: {
     *     // ... data to create a Novel
     *   }
     * })
     * 
     */
    create<T extends NovelCreateArgs>(args: SelectSubset<T, NovelCreateArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novels.
     * @param {NovelCreateManyArgs} args - Arguments to create many Novels.
     * @example
     * // Create many Novels
     * const novel = await prisma.novel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NovelCreateManyArgs>(args?: SelectSubset<T, NovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novels and returns the data saved in the database.
     * @param {NovelCreateManyAndReturnArgs} args - Arguments to create many Novels.
     * @example
     * // Create many Novels
     * const novel = await prisma.novel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novels and only return the `id`
     * const novelWithIdOnly = await prisma.novel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NovelCreateManyAndReturnArgs>(args?: SelectSubset<T, NovelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Novel.
     * @param {NovelDeleteArgs} args - Arguments to delete one Novel.
     * @example
     * // Delete one Novel
     * const Novel = await prisma.novel.delete({
     *   where: {
     *     // ... filter to delete one Novel
     *   }
     * })
     * 
     */
    delete<T extends NovelDeleteArgs>(args: SelectSubset<T, NovelDeleteArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Novel.
     * @param {NovelUpdateArgs} args - Arguments to update one Novel.
     * @example
     * // Update one Novel
     * const novel = await prisma.novel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NovelUpdateArgs>(args: SelectSubset<T, NovelUpdateArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novels.
     * @param {NovelDeleteManyArgs} args - Arguments to filter Novels to delete.
     * @example
     * // Delete a few Novels
     * const { count } = await prisma.novel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NovelDeleteManyArgs>(args?: SelectSubset<T, NovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novels
     * const novel = await prisma.novel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NovelUpdateManyArgs>(args: SelectSubset<T, NovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novels and returns the data updated in the database.
     * @param {NovelUpdateManyAndReturnArgs} args - Arguments to update many Novels.
     * @example
     * // Update many Novels
     * const novel = await prisma.novel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novels and only return the `id`
     * const novelWithIdOnly = await prisma.novel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NovelUpdateManyAndReturnArgs>(args: SelectSubset<T, NovelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Novel.
     * @param {NovelUpsertArgs} args - Arguments to update or create a Novel.
     * @example
     * // Update or create a Novel
     * const novel = await prisma.novel.upsert({
     *   create: {
     *     // ... data to create a Novel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Novel we want to update
     *   }
     * })
     */
    upsert<T extends NovelUpsertArgs>(args: SelectSubset<T, NovelUpsertArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelCountArgs} args - Arguments to filter Novels to count.
     * @example
     * // Count the number of Novels
     * const count = await prisma.novel.count({
     *   where: {
     *     // ... the filter for the Novels we want to count
     *   }
     * })
    **/
    count<T extends NovelCountArgs>(
      args?: Subset<T, NovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Novel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NovelAggregateArgs>(args: Subset<T, NovelAggregateArgs>): Prisma.PrismaPromise<GetNovelAggregateType<T>>

    /**
     * Group by Novel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NovelGroupByArgs['orderBy'] }
        : { orderBy?: NovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Novel model
   */
  readonly fields: NovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Novel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Novel$userArgs<ExtArgs> = {}>(args?: Subset<T, Novel$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    novelContentFiles<T extends Novel$novelContentFilesArgs<ExtArgs> = {}>(args?: Subset<T, Novel$novelContentFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Chapter<T extends Novel$ChapterArgs<ExtArgs> = {}>(args?: Subset<T, Novel$ChapterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Novel model
   */
  interface NovelFieldRefs {
    readonly id: FieldRef<"Novel", 'Int'>
    readonly userId: FieldRef<"Novel", 'String'>
    readonly title: FieldRef<"Novel", 'String'>
    readonly author: FieldRef<"Novel", 'String'>
    readonly translator: FieldRef<"Novel", 'String'>
    readonly mc: FieldRef<"Novel", 'String'>
    readonly desc: FieldRef<"Novel", 'String'>
    readonly coverUrl: FieldRef<"Novel", 'String'>
    readonly date: FieldRef<"Novel", 'DateTime'>
    readonly isAnyoneCanUploaded: FieldRef<"Novel", 'Boolean'>
    readonly isPublished: FieldRef<"Novel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Novel findUnique
   */
  export type NovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel findUniqueOrThrow
   */
  export type NovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel findFirst
   */
  export type NovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novels.
     */
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel findFirstOrThrow
   */
  export type NovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novels.
     */
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel findMany
   */
  export type NovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novels to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel create
   */
  export type NovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The data needed to create a Novel.
     */
    data: XOR<NovelCreateInput, NovelUncheckedCreateInput>
  }

  /**
   * Novel createMany
   */
  export type NovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Novels.
     */
    data: NovelCreateManyInput | NovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Novel createManyAndReturn
   */
  export type NovelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * The data used to create many Novels.
     */
    data: NovelCreateManyInput | NovelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novel update
   */
  export type NovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The data needed to update a Novel.
     */
    data: XOR<NovelUpdateInput, NovelUncheckedUpdateInput>
    /**
     * Choose, which Novel to update.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel updateMany
   */
  export type NovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Novels.
     */
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyInput>
    /**
     * Filter which Novels to update
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to update.
     */
    limit?: number
  }

  /**
   * Novel updateManyAndReturn
   */
  export type NovelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * The data used to update Novels.
     */
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyInput>
    /**
     * Filter which Novels to update
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novel upsert
   */
  export type NovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The filter to search for the Novel to update in case it exists.
     */
    where: NovelWhereUniqueInput
    /**
     * In case the Novel found by the `where` argument doesn't exist, create a new Novel with this data.
     */
    create: XOR<NovelCreateInput, NovelUncheckedCreateInput>
    /**
     * In case the Novel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NovelUpdateInput, NovelUncheckedUpdateInput>
  }

  /**
   * Novel delete
   */
  export type NovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter which Novel to delete.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel deleteMany
   */
  export type NovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novels to delete
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to delete.
     */
    limit?: number
  }

  /**
   * Novel.user
   */
  export type Novel$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Novel.novelContentFiles
   */
  export type Novel$novelContentFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    where?: ContentFileWhereInput
    orderBy?: ContentFileOrderByWithRelationInput | ContentFileOrderByWithRelationInput[]
    cursor?: ContentFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentFileScalarFieldEnum | ContentFileScalarFieldEnum[]
  }

  /**
   * Novel.Chapter
   */
  export type Novel$ChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Novel without action
   */
  export type NovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
  }


  /**
   * Model ContentFile
   */

  export type AggregateContentFile = {
    _count: ContentFileCountAggregateOutputType | null
    _avg: ContentFileAvgAggregateOutputType | null
    _sum: ContentFileSumAggregateOutputType | null
    _min: ContentFileMinAggregateOutputType | null
    _max: ContentFileMaxAggregateOutputType | null
  }

  export type ContentFileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
  }

  export type ContentFileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
  }

  export type ContentFileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
    title: string | null
    coverUrl: string | null
    content: string | null
    desc: string | null
    type: string | null
    date: Date | null
    isPublished: boolean | null
  }

  export type ContentFileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
    title: string | null
    coverUrl: string | null
    content: string | null
    desc: string | null
    type: string | null
    date: Date | null
    isPublished: boolean | null
  }

  export type ContentFileCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    title: number
    coverUrl: number
    content: number
    desc: number
    type: number
    date: number
    isPublished: number
    _all: number
  }


  export type ContentFileAvgAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ContentFileSumAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ContentFileMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    coverUrl?: true
    content?: true
    desc?: true
    type?: true
    date?: true
    isPublished?: true
  }

  export type ContentFileMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    coverUrl?: true
    content?: true
    desc?: true
    type?: true
    date?: true
    isPublished?: true
  }

  export type ContentFileCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    coverUrl?: true
    content?: true
    desc?: true
    type?: true
    date?: true
    isPublished?: true
    _all?: true
  }

  export type ContentFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentFile to aggregate.
     */
    where?: ContentFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentFiles to fetch.
     */
    orderBy?: ContentFileOrderByWithRelationInput | ContentFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentFiles
    **/
    _count?: true | ContentFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentFileMaxAggregateInputType
  }

  export type GetContentFileAggregateType<T extends ContentFileAggregateArgs> = {
        [P in keyof T & keyof AggregateContentFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentFile[P]>
      : GetScalarType<T[P], AggregateContentFile[P]>
  }




  export type ContentFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentFileWhereInput
    orderBy?: ContentFileOrderByWithAggregationInput | ContentFileOrderByWithAggregationInput[]
    by: ContentFileScalarFieldEnum[] | ContentFileScalarFieldEnum
    having?: ContentFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentFileCountAggregateInputType | true
    _avg?: ContentFileAvgAggregateInputType
    _sum?: ContentFileSumAggregateInputType
    _min?: ContentFileMinAggregateInputType
    _max?: ContentFileMaxAggregateInputType
  }

  export type ContentFileGroupByOutputType = {
    id: number
    userId: number
    novelId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date: Date
    isPublished: boolean
    _count: ContentFileCountAggregateOutputType | null
    _avg: ContentFileAvgAggregateOutputType | null
    _sum: ContentFileSumAggregateOutputType | null
    _min: ContentFileMinAggregateOutputType | null
    _max: ContentFileMaxAggregateOutputType | null
  }

  type GetContentFileGroupByPayload<T extends ContentFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentFileGroupByOutputType[P]>
            : GetScalarType<T[P], ContentFileGroupByOutputType[P]>
        }
      >
    >


  export type ContentFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    coverUrl?: boolean
    content?: boolean
    desc?: boolean
    type?: boolean
    date?: boolean
    isPublished?: boolean
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }, ExtArgs["result"]["contentFile"]>

  export type ContentFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    coverUrl?: boolean
    content?: boolean
    desc?: boolean
    type?: boolean
    date?: boolean
    isPublished?: boolean
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }, ExtArgs["result"]["contentFile"]>

  export type ContentFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    coverUrl?: boolean
    content?: boolean
    desc?: boolean
    type?: boolean
    date?: boolean
    isPublished?: boolean
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }, ExtArgs["result"]["contentFile"]>

  export type ContentFileSelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    coverUrl?: boolean
    content?: boolean
    desc?: boolean
    type?: boolean
    date?: boolean
    isPublished?: boolean
  }

  export type ContentFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId" | "title" | "coverUrl" | "content" | "desc" | "type" | "date" | "isPublished", ExtArgs["result"]["contentFile"]>
  export type ContentFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }
  export type ContentFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }
  export type ContentFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | ContentFile$novelArgs<ExtArgs>
  }

  export type $ContentFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentFile"
    objects: {
      novel: Prisma.$NovelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      novelId: number
      title: string
      coverUrl: string
      content: string
      desc: string
      type: string
      date: Date
      isPublished: boolean
    }, ExtArgs["result"]["contentFile"]>
    composites: {}
  }

  type ContentFileGetPayload<S extends boolean | null | undefined | ContentFileDefaultArgs> = $Result.GetResult<Prisma.$ContentFilePayload, S>

  type ContentFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentFileCountAggregateInputType | true
    }

  export interface ContentFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentFile'], meta: { name: 'ContentFile' } }
    /**
     * Find zero or one ContentFile that matches the filter.
     * @param {ContentFileFindUniqueArgs} args - Arguments to find a ContentFile
     * @example
     * // Get one ContentFile
     * const contentFile = await prisma.contentFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFileFindUniqueArgs>(args: SelectSubset<T, ContentFileFindUniqueArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFileFindUniqueOrThrowArgs} args - Arguments to find a ContentFile
     * @example
     * // Get one ContentFile
     * const contentFile = await prisma.contentFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileFindFirstArgs} args - Arguments to find a ContentFile
     * @example
     * // Get one ContentFile
     * const contentFile = await prisma.contentFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFileFindFirstArgs>(args?: SelectSubset<T, ContentFileFindFirstArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileFindFirstOrThrowArgs} args - Arguments to find a ContentFile
     * @example
     * // Get one ContentFile
     * const contentFile = await prisma.contentFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentFiles
     * const contentFiles = await prisma.contentFile.findMany()
     * 
     * // Get first 10 ContentFiles
     * const contentFiles = await prisma.contentFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentFileWithIdOnly = await prisma.contentFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFileFindManyArgs>(args?: SelectSubset<T, ContentFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentFile.
     * @param {ContentFileCreateArgs} args - Arguments to create a ContentFile.
     * @example
     * // Create one ContentFile
     * const ContentFile = await prisma.contentFile.create({
     *   data: {
     *     // ... data to create a ContentFile
     *   }
     * })
     * 
     */
    create<T extends ContentFileCreateArgs>(args: SelectSubset<T, ContentFileCreateArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentFiles.
     * @param {ContentFileCreateManyArgs} args - Arguments to create many ContentFiles.
     * @example
     * // Create many ContentFiles
     * const contentFile = await prisma.contentFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentFileCreateManyArgs>(args?: SelectSubset<T, ContentFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentFiles and returns the data saved in the database.
     * @param {ContentFileCreateManyAndReturnArgs} args - Arguments to create many ContentFiles.
     * @example
     * // Create many ContentFiles
     * const contentFile = await prisma.contentFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentFiles and only return the `id`
     * const contentFileWithIdOnly = await prisma.contentFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentFile.
     * @param {ContentFileDeleteArgs} args - Arguments to delete one ContentFile.
     * @example
     * // Delete one ContentFile
     * const ContentFile = await prisma.contentFile.delete({
     *   where: {
     *     // ... filter to delete one ContentFile
     *   }
     * })
     * 
     */
    delete<T extends ContentFileDeleteArgs>(args: SelectSubset<T, ContentFileDeleteArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentFile.
     * @param {ContentFileUpdateArgs} args - Arguments to update one ContentFile.
     * @example
     * // Update one ContentFile
     * const contentFile = await prisma.contentFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentFileUpdateArgs>(args: SelectSubset<T, ContentFileUpdateArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentFiles.
     * @param {ContentFileDeleteManyArgs} args - Arguments to filter ContentFiles to delete.
     * @example
     * // Delete a few ContentFiles
     * const { count } = await prisma.contentFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentFileDeleteManyArgs>(args?: SelectSubset<T, ContentFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentFiles
     * const contentFile = await prisma.contentFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentFileUpdateManyArgs>(args: SelectSubset<T, ContentFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentFiles and returns the data updated in the database.
     * @param {ContentFileUpdateManyAndReturnArgs} args - Arguments to update many ContentFiles.
     * @example
     * // Update many ContentFiles
     * const contentFile = await prisma.contentFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentFiles and only return the `id`
     * const contentFileWithIdOnly = await prisma.contentFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentFile.
     * @param {ContentFileUpsertArgs} args - Arguments to update or create a ContentFile.
     * @example
     * // Update or create a ContentFile
     * const contentFile = await prisma.contentFile.upsert({
     *   create: {
     *     // ... data to create a ContentFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentFile we want to update
     *   }
     * })
     */
    upsert<T extends ContentFileUpsertArgs>(args: SelectSubset<T, ContentFileUpsertArgs<ExtArgs>>): Prisma__ContentFileClient<$Result.GetResult<Prisma.$ContentFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileCountArgs} args - Arguments to filter ContentFiles to count.
     * @example
     * // Count the number of ContentFiles
     * const count = await prisma.contentFile.count({
     *   where: {
     *     // ... the filter for the ContentFiles we want to count
     *   }
     * })
    **/
    count<T extends ContentFileCountArgs>(
      args?: Subset<T, ContentFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentFileAggregateArgs>(args: Subset<T, ContentFileAggregateArgs>): Prisma.PrismaPromise<GetContentFileAggregateType<T>>

    /**
     * Group by ContentFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentFileGroupByArgs['orderBy'] }
        : { orderBy?: ContentFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentFile model
   */
  readonly fields: ContentFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novel<T extends ContentFile$novelArgs<ExtArgs> = {}>(args?: Subset<T, ContentFile$novelArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentFile model
   */
  interface ContentFileFieldRefs {
    readonly id: FieldRef<"ContentFile", 'Int'>
    readonly userId: FieldRef<"ContentFile", 'Int'>
    readonly novelId: FieldRef<"ContentFile", 'Int'>
    readonly title: FieldRef<"ContentFile", 'String'>
    readonly coverUrl: FieldRef<"ContentFile", 'String'>
    readonly content: FieldRef<"ContentFile", 'String'>
    readonly desc: FieldRef<"ContentFile", 'String'>
    readonly type: FieldRef<"ContentFile", 'String'>
    readonly date: FieldRef<"ContentFile", 'DateTime'>
    readonly isPublished: FieldRef<"ContentFile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ContentFile findUnique
   */
  export type ContentFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter, which ContentFile to fetch.
     */
    where: ContentFileWhereUniqueInput
  }

  /**
   * ContentFile findUniqueOrThrow
   */
  export type ContentFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter, which ContentFile to fetch.
     */
    where: ContentFileWhereUniqueInput
  }

  /**
   * ContentFile findFirst
   */
  export type ContentFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter, which ContentFile to fetch.
     */
    where?: ContentFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentFiles to fetch.
     */
    orderBy?: ContentFileOrderByWithRelationInput | ContentFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentFiles.
     */
    cursor?: ContentFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentFiles.
     */
    distinct?: ContentFileScalarFieldEnum | ContentFileScalarFieldEnum[]
  }

  /**
   * ContentFile findFirstOrThrow
   */
  export type ContentFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter, which ContentFile to fetch.
     */
    where?: ContentFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentFiles to fetch.
     */
    orderBy?: ContentFileOrderByWithRelationInput | ContentFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentFiles.
     */
    cursor?: ContentFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentFiles.
     */
    distinct?: ContentFileScalarFieldEnum | ContentFileScalarFieldEnum[]
  }

  /**
   * ContentFile findMany
   */
  export type ContentFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter, which ContentFiles to fetch.
     */
    where?: ContentFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentFiles to fetch.
     */
    orderBy?: ContentFileOrderByWithRelationInput | ContentFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentFiles.
     */
    cursor?: ContentFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentFiles.
     */
    skip?: number
    distinct?: ContentFileScalarFieldEnum | ContentFileScalarFieldEnum[]
  }

  /**
   * ContentFile create
   */
  export type ContentFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentFile.
     */
    data: XOR<ContentFileCreateInput, ContentFileUncheckedCreateInput>
  }

  /**
   * ContentFile createMany
   */
  export type ContentFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentFiles.
     */
    data: ContentFileCreateManyInput | ContentFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentFile createManyAndReturn
   */
  export type ContentFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * The data used to create many ContentFiles.
     */
    data: ContentFileCreateManyInput | ContentFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentFile update
   */
  export type ContentFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentFile.
     */
    data: XOR<ContentFileUpdateInput, ContentFileUncheckedUpdateInput>
    /**
     * Choose, which ContentFile to update.
     */
    where: ContentFileWhereUniqueInput
  }

  /**
   * ContentFile updateMany
   */
  export type ContentFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentFiles.
     */
    data: XOR<ContentFileUpdateManyMutationInput, ContentFileUncheckedUpdateManyInput>
    /**
     * Filter which ContentFiles to update
     */
    where?: ContentFileWhereInput
    /**
     * Limit how many ContentFiles to update.
     */
    limit?: number
  }

  /**
   * ContentFile updateManyAndReturn
   */
  export type ContentFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * The data used to update ContentFiles.
     */
    data: XOR<ContentFileUpdateManyMutationInput, ContentFileUncheckedUpdateManyInput>
    /**
     * Filter which ContentFiles to update
     */
    where?: ContentFileWhereInput
    /**
     * Limit how many ContentFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentFile upsert
   */
  export type ContentFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentFile to update in case it exists.
     */
    where: ContentFileWhereUniqueInput
    /**
     * In case the ContentFile found by the `where` argument doesn't exist, create a new ContentFile with this data.
     */
    create: XOR<ContentFileCreateInput, ContentFileUncheckedCreateInput>
    /**
     * In case the ContentFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentFileUpdateInput, ContentFileUncheckedUpdateInput>
  }

  /**
   * ContentFile delete
   */
  export type ContentFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
    /**
     * Filter which ContentFile to delete.
     */
    where: ContentFileWhereUniqueInput
  }

  /**
   * ContentFile deleteMany
   */
  export type ContentFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentFiles to delete
     */
    where?: ContentFileWhereInput
    /**
     * Limit how many ContentFiles to delete.
     */
    limit?: number
  }

  /**
   * ContentFile.novel
   */
  export type ContentFile$novelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    where?: NovelWhereInput
  }

  /**
   * ContentFile without action
   */
  export type ContentFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentFile
     */
    select?: ContentFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentFile
     */
    omit?: ContentFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentFileInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
    title: string | null
    content: string | null
    isPublished: boolean | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    novelId: number | null
    title: string | null
    content: string | null
    isPublished: boolean | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    title: number
    content: number
    isPublished: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    content?: true
    isPublished?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    content?: true
    isPublished?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    title?: true
    content?: true
    isPublished?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: number
    userId: number
    novelId: number
    title: string
    content: string
    isPublished: boolean
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId" | "title" | "content" | "isPublished", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | Chapter$novelArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      novel: Prisma.$NovelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      novelId: number
      title: string
      content: string
      isPublished: boolean
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novel<T extends Chapter$novelArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$novelArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'Int'>
    readonly userId: FieldRef<"Chapter", 'Int'>
    readonly novelId: FieldRef<"Chapter", 'Int'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly content: FieldRef<"Chapter", 'String'>
    readonly isPublished: FieldRef<"Chapter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.novel
   */
  export type Chapter$novelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    where?: NovelWhereInput
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profileUrl: 'profileUrl',
    type: 'type',
    date: 'date',
    isBanned: 'isBanned'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NovelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    author: 'author',
    translator: 'translator',
    mc: 'mc',
    desc: 'desc',
    coverUrl: 'coverUrl',
    date: 'date',
    isAnyoneCanUploaded: 'isAnyoneCanUploaded',
    isPublished: 'isPublished'
  };

  export type NovelScalarFieldEnum = (typeof NovelScalarFieldEnum)[keyof typeof NovelScalarFieldEnum]


  export const ContentFileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId',
    title: 'title',
    coverUrl: 'coverUrl',
    content: 'content',
    desc: 'desc',
    type: 'type',
    date: 'date',
    isPublished: 'isPublished'
  };

  export type ContentFileScalarFieldEnum = (typeof ContentFileScalarFieldEnum)[keyof typeof ContentFileScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId',
    title: 'title',
    content: 'content',
    isPublished: 'isPublished'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileUrl?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
    date?: DateTimeFilter<"User"> | Date | string
    isBanned?: BoolFilter<"User"> | boolean
    novels?: NovelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileUrl?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isBanned?: SortOrder
    novels?: NovelOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileUrl?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
    date?: DateTimeFilter<"User"> | Date | string
    isBanned?: BoolFilter<"User"> | boolean
    novels?: NovelListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileUrl?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isBanned?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileUrl?: StringWithAggregatesFilter<"User"> | string
    type?: StringWithAggregatesFilter<"User"> | string
    date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type NovelWhereInput = {
    AND?: NovelWhereInput | NovelWhereInput[]
    OR?: NovelWhereInput[]
    NOT?: NovelWhereInput | NovelWhereInput[]
    id?: IntFilter<"Novel"> | number
    userId?: StringFilter<"Novel"> | string
    title?: StringFilter<"Novel"> | string
    author?: StringFilter<"Novel"> | string
    translator?: StringFilter<"Novel"> | string
    mc?: StringFilter<"Novel"> | string
    desc?: StringFilter<"Novel"> | string
    coverUrl?: StringFilter<"Novel"> | string
    date?: DateTimeFilter<"Novel"> | Date | string
    isAnyoneCanUploaded?: BoolFilter<"Novel"> | boolean
    isPublished?: BoolFilter<"Novel"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    novelContentFiles?: ContentFileListRelationFilter
    Chapter?: ChapterListRelationFilter
  }

  export type NovelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    translator?: SortOrder
    mc?: SortOrder
    desc?: SortOrder
    coverUrl?: SortOrder
    date?: SortOrder
    isAnyoneCanUploaded?: SortOrder
    isPublished?: SortOrder
    user?: UserOrderByWithRelationInput
    novelContentFiles?: ContentFileOrderByRelationAggregateInput
    Chapter?: ChapterOrderByRelationAggregateInput
  }

  export type NovelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: NovelWhereInput | NovelWhereInput[]
    OR?: NovelWhereInput[]
    NOT?: NovelWhereInput | NovelWhereInput[]
    userId?: StringFilter<"Novel"> | string
    author?: StringFilter<"Novel"> | string
    translator?: StringFilter<"Novel"> | string
    mc?: StringFilter<"Novel"> | string
    desc?: StringFilter<"Novel"> | string
    coverUrl?: StringFilter<"Novel"> | string
    date?: DateTimeFilter<"Novel"> | Date | string
    isAnyoneCanUploaded?: BoolFilter<"Novel"> | boolean
    isPublished?: BoolFilter<"Novel"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    novelContentFiles?: ContentFileListRelationFilter
    Chapter?: ChapterListRelationFilter
  }, "id" | "title">

  export type NovelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    translator?: SortOrder
    mc?: SortOrder
    desc?: SortOrder
    coverUrl?: SortOrder
    date?: SortOrder
    isAnyoneCanUploaded?: SortOrder
    isPublished?: SortOrder
    _count?: NovelCountOrderByAggregateInput
    _avg?: NovelAvgOrderByAggregateInput
    _max?: NovelMaxOrderByAggregateInput
    _min?: NovelMinOrderByAggregateInput
    _sum?: NovelSumOrderByAggregateInput
  }

  export type NovelScalarWhereWithAggregatesInput = {
    AND?: NovelScalarWhereWithAggregatesInput | NovelScalarWhereWithAggregatesInput[]
    OR?: NovelScalarWhereWithAggregatesInput[]
    NOT?: NovelScalarWhereWithAggregatesInput | NovelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Novel"> | number
    userId?: StringWithAggregatesFilter<"Novel"> | string
    title?: StringWithAggregatesFilter<"Novel"> | string
    author?: StringWithAggregatesFilter<"Novel"> | string
    translator?: StringWithAggregatesFilter<"Novel"> | string
    mc?: StringWithAggregatesFilter<"Novel"> | string
    desc?: StringWithAggregatesFilter<"Novel"> | string
    coverUrl?: StringWithAggregatesFilter<"Novel"> | string
    date?: DateTimeWithAggregatesFilter<"Novel"> | Date | string
    isAnyoneCanUploaded?: BoolWithAggregatesFilter<"Novel"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Novel"> | boolean
  }

  export type ContentFileWhereInput = {
    AND?: ContentFileWhereInput | ContentFileWhereInput[]
    OR?: ContentFileWhereInput[]
    NOT?: ContentFileWhereInput | ContentFileWhereInput[]
    id?: IntFilter<"ContentFile"> | number
    userId?: IntFilter<"ContentFile"> | number
    novelId?: IntFilter<"ContentFile"> | number
    title?: StringFilter<"ContentFile"> | string
    coverUrl?: StringFilter<"ContentFile"> | string
    content?: StringFilter<"ContentFile"> | string
    desc?: StringFilter<"ContentFile"> | string
    type?: StringFilter<"ContentFile"> | string
    date?: DateTimeFilter<"ContentFile"> | Date | string
    isPublished?: BoolFilter<"ContentFile"> | boolean
    novel?: XOR<NovelNullableScalarRelationFilter, NovelWhereInput> | null
  }

  export type ContentFileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    content?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
    novel?: NovelOrderByWithRelationInput
  }

  export type ContentFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentFileWhereInput | ContentFileWhereInput[]
    OR?: ContentFileWhereInput[]
    NOT?: ContentFileWhereInput | ContentFileWhereInput[]
    userId?: IntFilter<"ContentFile"> | number
    novelId?: IntFilter<"ContentFile"> | number
    title?: StringFilter<"ContentFile"> | string
    coverUrl?: StringFilter<"ContentFile"> | string
    content?: StringFilter<"ContentFile"> | string
    desc?: StringFilter<"ContentFile"> | string
    type?: StringFilter<"ContentFile"> | string
    date?: DateTimeFilter<"ContentFile"> | Date | string
    isPublished?: BoolFilter<"ContentFile"> | boolean
    novel?: XOR<NovelNullableScalarRelationFilter, NovelWhereInput> | null
  }, "id">

  export type ContentFileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    content?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
    _count?: ContentFileCountOrderByAggregateInput
    _avg?: ContentFileAvgOrderByAggregateInput
    _max?: ContentFileMaxOrderByAggregateInput
    _min?: ContentFileMinOrderByAggregateInput
    _sum?: ContentFileSumOrderByAggregateInput
  }

  export type ContentFileScalarWhereWithAggregatesInput = {
    AND?: ContentFileScalarWhereWithAggregatesInput | ContentFileScalarWhereWithAggregatesInput[]
    OR?: ContentFileScalarWhereWithAggregatesInput[]
    NOT?: ContentFileScalarWhereWithAggregatesInput | ContentFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContentFile"> | number
    userId?: IntWithAggregatesFilter<"ContentFile"> | number
    novelId?: IntWithAggregatesFilter<"ContentFile"> | number
    title?: StringWithAggregatesFilter<"ContentFile"> | string
    coverUrl?: StringWithAggregatesFilter<"ContentFile"> | string
    content?: StringWithAggregatesFilter<"ContentFile"> | string
    desc?: StringWithAggregatesFilter<"ContentFile"> | string
    type?: StringWithAggregatesFilter<"ContentFile"> | string
    date?: DateTimeWithAggregatesFilter<"ContentFile"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"ContentFile"> | boolean
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: IntFilter<"Chapter"> | number
    userId?: IntFilter<"Chapter"> | number
    novelId?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    isPublished?: BoolFilter<"Chapter"> | boolean
    novel?: XOR<NovelNullableScalarRelationFilter, NovelWhereInput> | null
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    novel?: NovelOrderByWithRelationInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    userId?: IntFilter<"Chapter"> | number
    novelId?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    isPublished?: BoolFilter<"Chapter"> | boolean
    novel?: XOR<NovelNullableScalarRelationFilter, NovelWhereInput> | null
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chapter"> | number
    userId?: IntWithAggregatesFilter<"Chapter"> | number
    novelId?: IntWithAggregatesFilter<"Chapter"> | number
    title?: StringWithAggregatesFilter<"Chapter"> | string
    content?: StringWithAggregatesFilter<"Chapter"> | string
    isPublished?: BoolWithAggregatesFilter<"Chapter"> | boolean
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type?: string
    date?: Date | string
    isBanned?: boolean
    novels?: NovelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type?: string
    date?: Date | string
    isBanned?: boolean
    novels?: NovelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    novels?: NovelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    novels?: NovelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type?: string
    date?: Date | string
    isBanned?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NovelCreateInput = {
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: UserCreateNestedOneWithoutNovelsInput
    novelContentFiles?: ContentFileCreateNestedManyWithoutNovelInput
    Chapter?: ChapterCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    novelContentFiles?: ContentFileUncheckedCreateNestedManyWithoutNovelInput
    Chapter?: ChapterUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutNovelsNestedInput
    novelContentFiles?: ContentFileUpdateManyWithoutNovelNestedInput
    Chapter?: ChapterUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novelContentFiles?: ContentFileUncheckedUpdateManyWithoutNovelNestedInput
    Chapter?: ChapterUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelCreateManyInput = {
    id?: number
    userId: string
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
  }

  export type NovelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileCreateInput = {
    userId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
    novel?: NovelCreateNestedOneWithoutNovelContentFilesInput
  }

  export type ContentFileUncheckedCreateInput = {
    id?: number
    userId: number
    novelId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
  }

  export type ContentFileUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novel?: NovelUpdateOneWithoutNovelContentFilesNestedInput
  }

  export type ContentFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    novelId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileCreateManyInput = {
    id?: number
    userId: number
    novelId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
  }

  export type ContentFileUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    novelId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterCreateInput = {
    userId: number
    title: string
    content: string
    isPublished?: boolean
    novel?: NovelCreateNestedOneWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: number
    userId: number
    novelId: number
    title: string
    content: string
    isPublished?: boolean
  }

  export type ChapterUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novel?: NovelUpdateOneWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    novelId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterCreateManyInput = {
    id?: number
    userId: number
    novelId: number
    title: string
    content: string
    isPublished?: boolean
  }

  export type ChapterUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    novelId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NovelListRelationFilter = {
    every?: NovelWhereInput
    some?: NovelWhereInput
    none?: NovelWhereInput
  }

  export type NovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileUrl?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isBanned?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileUrl?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isBanned?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileUrl?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isBanned?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ContentFileListRelationFilter = {
    every?: ContentFileWhereInput
    some?: ContentFileWhereInput
    none?: ContentFileWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ContentFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NovelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    translator?: SortOrder
    mc?: SortOrder
    desc?: SortOrder
    coverUrl?: SortOrder
    date?: SortOrder
    isAnyoneCanUploaded?: SortOrder
    isPublished?: SortOrder
  }

  export type NovelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NovelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    translator?: SortOrder
    mc?: SortOrder
    desc?: SortOrder
    coverUrl?: SortOrder
    date?: SortOrder
    isAnyoneCanUploaded?: SortOrder
    isPublished?: SortOrder
  }

  export type NovelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    translator?: SortOrder
    mc?: SortOrder
    desc?: SortOrder
    coverUrl?: SortOrder
    date?: SortOrder
    isAnyoneCanUploaded?: SortOrder
    isPublished?: SortOrder
  }

  export type NovelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NovelNullableScalarRelationFilter = {
    is?: NovelWhereInput | null
    isNot?: NovelWhereInput | null
  }

  export type ContentFileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    content?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type ContentFileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type ContentFileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    content?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type ContentFileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    content?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type ContentFileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type NovelCreateNestedManyWithoutUserInput = {
    create?: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput> | NovelCreateWithoutUserInput[] | NovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutUserInput | NovelCreateOrConnectWithoutUserInput[]
    createMany?: NovelCreateManyUserInputEnvelope
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type NovelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput> | NovelCreateWithoutUserInput[] | NovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutUserInput | NovelCreateOrConnectWithoutUserInput[]
    createMany?: NovelCreateManyUserInputEnvelope
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NovelUpdateManyWithoutUserNestedInput = {
    create?: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput> | NovelCreateWithoutUserInput[] | NovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutUserInput | NovelCreateOrConnectWithoutUserInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutUserInput | NovelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NovelCreateManyUserInputEnvelope
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutUserInput | NovelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutUserInput | NovelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type NovelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput> | NovelCreateWithoutUserInput[] | NovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutUserInput | NovelCreateOrConnectWithoutUserInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutUserInput | NovelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NovelCreateManyUserInputEnvelope
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutUserInput | NovelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutUserInput | NovelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNovelsInput = {
    create?: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovelsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentFileCreateNestedManyWithoutNovelInput = {
    create?: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput> | ContentFileCreateWithoutNovelInput[] | ContentFileUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ContentFileCreateOrConnectWithoutNovelInput | ContentFileCreateOrConnectWithoutNovelInput[]
    createMany?: ContentFileCreateManyNovelInputEnvelope
    connect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
  }

  export type ChapterCreateNestedManyWithoutNovelInput = {
    create?: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput> | ChapterCreateWithoutNovelInput[] | ChapterUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutNovelInput | ChapterCreateOrConnectWithoutNovelInput[]
    createMany?: ChapterCreateManyNovelInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ContentFileUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput> | ContentFileCreateWithoutNovelInput[] | ContentFileUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ContentFileCreateOrConnectWithoutNovelInput | ContentFileCreateOrConnectWithoutNovelInput[]
    createMany?: ContentFileCreateManyNovelInputEnvelope
    connect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput> | ChapterCreateWithoutNovelInput[] | ChapterUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutNovelInput | ChapterCreateOrConnectWithoutNovelInput[]
    createMany?: ChapterCreateManyNovelInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutNovelsNestedInput = {
    create?: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovelsInput
    upsert?: UserUpsertWithoutNovelsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNovelsInput, UserUpdateWithoutNovelsInput>, UserUncheckedUpdateWithoutNovelsInput>
  }

  export type ContentFileUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput> | ContentFileCreateWithoutNovelInput[] | ContentFileUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ContentFileCreateOrConnectWithoutNovelInput | ContentFileCreateOrConnectWithoutNovelInput[]
    upsert?: ContentFileUpsertWithWhereUniqueWithoutNovelInput | ContentFileUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ContentFileCreateManyNovelInputEnvelope
    set?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    disconnect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    delete?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    connect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    update?: ContentFileUpdateWithWhereUniqueWithoutNovelInput | ContentFileUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ContentFileUpdateManyWithWhereWithoutNovelInput | ContentFileUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ContentFileScalarWhereInput | ContentFileScalarWhereInput[]
  }

  export type ChapterUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput> | ChapterCreateWithoutNovelInput[] | ChapterUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutNovelInput | ChapterCreateOrConnectWithoutNovelInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutNovelInput | ChapterUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ChapterCreateManyNovelInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutNovelInput | ChapterUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutNovelInput | ChapterUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContentFileUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput> | ContentFileCreateWithoutNovelInput[] | ContentFileUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ContentFileCreateOrConnectWithoutNovelInput | ContentFileCreateOrConnectWithoutNovelInput[]
    upsert?: ContentFileUpsertWithWhereUniqueWithoutNovelInput | ContentFileUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ContentFileCreateManyNovelInputEnvelope
    set?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    disconnect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    delete?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    connect?: ContentFileWhereUniqueInput | ContentFileWhereUniqueInput[]
    update?: ContentFileUpdateWithWhereUniqueWithoutNovelInput | ContentFileUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ContentFileUpdateManyWithWhereWithoutNovelInput | ContentFileUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ContentFileScalarWhereInput | ContentFileScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput> | ChapterCreateWithoutNovelInput[] | ChapterUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutNovelInput | ChapterCreateOrConnectWithoutNovelInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutNovelInput | ChapterUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ChapterCreateManyNovelInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutNovelInput | ChapterUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutNovelInput | ChapterUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type NovelCreateNestedOneWithoutNovelContentFilesInput = {
    create?: XOR<NovelCreateWithoutNovelContentFilesInput, NovelUncheckedCreateWithoutNovelContentFilesInput>
    connectOrCreate?: NovelCreateOrConnectWithoutNovelContentFilesInput
    connect?: NovelWhereUniqueInput
  }

  export type NovelUpdateOneWithoutNovelContentFilesNestedInput = {
    create?: XOR<NovelCreateWithoutNovelContentFilesInput, NovelUncheckedCreateWithoutNovelContentFilesInput>
    connectOrCreate?: NovelCreateOrConnectWithoutNovelContentFilesInput
    upsert?: NovelUpsertWithoutNovelContentFilesInput
    disconnect?: NovelWhereInput | boolean
    delete?: NovelWhereInput | boolean
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutNovelContentFilesInput, NovelUpdateWithoutNovelContentFilesInput>, NovelUncheckedUpdateWithoutNovelContentFilesInput>
  }

  export type NovelCreateNestedOneWithoutChapterInput = {
    create?: XOR<NovelCreateWithoutChapterInput, NovelUncheckedCreateWithoutChapterInput>
    connectOrCreate?: NovelCreateOrConnectWithoutChapterInput
    connect?: NovelWhereUniqueInput
  }

  export type NovelUpdateOneWithoutChapterNestedInput = {
    create?: XOR<NovelCreateWithoutChapterInput, NovelUncheckedCreateWithoutChapterInput>
    connectOrCreate?: NovelCreateOrConnectWithoutChapterInput
    upsert?: NovelUpsertWithoutChapterInput
    disconnect?: NovelWhereInput | boolean
    delete?: NovelWhereInput | boolean
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutChapterInput, NovelUpdateWithoutChapterInput>, NovelUncheckedUpdateWithoutChapterInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NovelCreateWithoutUserInput = {
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    novelContentFiles?: ContentFileCreateNestedManyWithoutNovelInput
    Chapter?: ChapterCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    novelContentFiles?: ContentFileUncheckedCreateNestedManyWithoutNovelInput
    Chapter?: ChapterUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutUserInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput>
  }

  export type NovelCreateManyUserInputEnvelope = {
    data: NovelCreateManyUserInput | NovelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NovelUpsertWithWhereUniqueWithoutUserInput = {
    where: NovelWhereUniqueInput
    update: XOR<NovelUpdateWithoutUserInput, NovelUncheckedUpdateWithoutUserInput>
    create: XOR<NovelCreateWithoutUserInput, NovelUncheckedCreateWithoutUserInput>
  }

  export type NovelUpdateWithWhereUniqueWithoutUserInput = {
    where: NovelWhereUniqueInput
    data: XOR<NovelUpdateWithoutUserInput, NovelUncheckedUpdateWithoutUserInput>
  }

  export type NovelUpdateManyWithWhereWithoutUserInput = {
    where: NovelScalarWhereInput
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyWithoutUserInput>
  }

  export type NovelScalarWhereInput = {
    AND?: NovelScalarWhereInput | NovelScalarWhereInput[]
    OR?: NovelScalarWhereInput[]
    NOT?: NovelScalarWhereInput | NovelScalarWhereInput[]
    id?: IntFilter<"Novel"> | number
    userId?: StringFilter<"Novel"> | string
    title?: StringFilter<"Novel"> | string
    author?: StringFilter<"Novel"> | string
    translator?: StringFilter<"Novel"> | string
    mc?: StringFilter<"Novel"> | string
    desc?: StringFilter<"Novel"> | string
    coverUrl?: StringFilter<"Novel"> | string
    date?: DateTimeFilter<"Novel"> | Date | string
    isAnyoneCanUploaded?: BoolFilter<"Novel"> | boolean
    isPublished?: BoolFilter<"Novel"> | boolean
  }

  export type UserCreateWithoutNovelsInput = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type?: string
    date?: Date | string
    isBanned?: boolean
  }

  export type UserUncheckedCreateWithoutNovelsInput = {
    id: string
    name: string
    email: string
    password: string
    profileUrl: string
    type?: string
    date?: Date | string
    isBanned?: boolean
  }

  export type UserCreateOrConnectWithoutNovelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
  }

  export type ContentFileCreateWithoutNovelInput = {
    userId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
  }

  export type ContentFileUncheckedCreateWithoutNovelInput = {
    id?: number
    userId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
  }

  export type ContentFileCreateOrConnectWithoutNovelInput = {
    where: ContentFileWhereUniqueInput
    create: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput>
  }

  export type ContentFileCreateManyNovelInputEnvelope = {
    data: ContentFileCreateManyNovelInput | ContentFileCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type ChapterCreateWithoutNovelInput = {
    userId: number
    title: string
    content: string
    isPublished?: boolean
  }

  export type ChapterUncheckedCreateWithoutNovelInput = {
    id?: number
    userId: number
    title: string
    content: string
    isPublished?: boolean
  }

  export type ChapterCreateOrConnectWithoutNovelInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput>
  }

  export type ChapterCreateManyNovelInputEnvelope = {
    data: ChapterCreateManyNovelInput | ChapterCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNovelsInput = {
    update: XOR<UserUpdateWithoutNovelsInput, UserUncheckedUpdateWithoutNovelsInput>
    create: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNovelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNovelsInput, UserUncheckedUpdateWithoutNovelsInput>
  }

  export type UserUpdateWithoutNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileUpsertWithWhereUniqueWithoutNovelInput = {
    where: ContentFileWhereUniqueInput
    update: XOR<ContentFileUpdateWithoutNovelInput, ContentFileUncheckedUpdateWithoutNovelInput>
    create: XOR<ContentFileCreateWithoutNovelInput, ContentFileUncheckedCreateWithoutNovelInput>
  }

  export type ContentFileUpdateWithWhereUniqueWithoutNovelInput = {
    where: ContentFileWhereUniqueInput
    data: XOR<ContentFileUpdateWithoutNovelInput, ContentFileUncheckedUpdateWithoutNovelInput>
  }

  export type ContentFileUpdateManyWithWhereWithoutNovelInput = {
    where: ContentFileScalarWhereInput
    data: XOR<ContentFileUpdateManyMutationInput, ContentFileUncheckedUpdateManyWithoutNovelInput>
  }

  export type ContentFileScalarWhereInput = {
    AND?: ContentFileScalarWhereInput | ContentFileScalarWhereInput[]
    OR?: ContentFileScalarWhereInput[]
    NOT?: ContentFileScalarWhereInput | ContentFileScalarWhereInput[]
    id?: IntFilter<"ContentFile"> | number
    userId?: IntFilter<"ContentFile"> | number
    novelId?: IntFilter<"ContentFile"> | number
    title?: StringFilter<"ContentFile"> | string
    coverUrl?: StringFilter<"ContentFile"> | string
    content?: StringFilter<"ContentFile"> | string
    desc?: StringFilter<"ContentFile"> | string
    type?: StringFilter<"ContentFile"> | string
    date?: DateTimeFilter<"ContentFile"> | Date | string
    isPublished?: BoolFilter<"ContentFile"> | boolean
  }

  export type ChapterUpsertWithWhereUniqueWithoutNovelInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutNovelInput, ChapterUncheckedUpdateWithoutNovelInput>
    create: XOR<ChapterCreateWithoutNovelInput, ChapterUncheckedCreateWithoutNovelInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutNovelInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutNovelInput, ChapterUncheckedUpdateWithoutNovelInput>
  }

  export type ChapterUpdateManyWithWhereWithoutNovelInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutNovelInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: IntFilter<"Chapter"> | number
    userId?: IntFilter<"Chapter"> | number
    novelId?: IntFilter<"Chapter"> | number
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    isPublished?: BoolFilter<"Chapter"> | boolean
  }

  export type NovelCreateWithoutNovelContentFilesInput = {
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: UserCreateNestedOneWithoutNovelsInput
    Chapter?: ChapterCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutNovelContentFilesInput = {
    id?: number
    userId: string
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    Chapter?: ChapterUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutNovelContentFilesInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutNovelContentFilesInput, NovelUncheckedCreateWithoutNovelContentFilesInput>
  }

  export type NovelUpsertWithoutNovelContentFilesInput = {
    update: XOR<NovelUpdateWithoutNovelContentFilesInput, NovelUncheckedUpdateWithoutNovelContentFilesInput>
    create: XOR<NovelCreateWithoutNovelContentFilesInput, NovelUncheckedCreateWithoutNovelContentFilesInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutNovelContentFilesInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutNovelContentFilesInput, NovelUncheckedUpdateWithoutNovelContentFilesInput>
  }

  export type NovelUpdateWithoutNovelContentFilesInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutNovelsNestedInput
    Chapter?: ChapterUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutNovelContentFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    Chapter?: ChapterUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelCreateWithoutChapterInput = {
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    user?: UserCreateNestedOneWithoutNovelsInput
    novelContentFiles?: ContentFileCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutChapterInput = {
    id?: number
    userId: string
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
    novelContentFiles?: ContentFileUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutChapterInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutChapterInput, NovelUncheckedCreateWithoutChapterInput>
  }

  export type NovelUpsertWithoutChapterInput = {
    update: XOR<NovelUpdateWithoutChapterInput, NovelUncheckedUpdateWithoutChapterInput>
    create: XOR<NovelCreateWithoutChapterInput, NovelUncheckedCreateWithoutChapterInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutChapterInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutChapterInput, NovelUncheckedUpdateWithoutChapterInput>
  }

  export type NovelUpdateWithoutChapterInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutNovelsNestedInput
    novelContentFiles?: ContentFileUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novelContentFiles?: ContentFileUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelCreateManyUserInput = {
    id?: number
    title: string
    author?: string
    translator?: string
    mc?: string
    desc: string
    coverUrl: string
    date?: Date | string
    isAnyoneCanUploaded?: boolean
    isPublished?: boolean
  }

  export type NovelUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novelContentFiles?: ContentFileUpdateManyWithoutNovelNestedInput
    Chapter?: ChapterUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    novelContentFiles?: ContentFileUncheckedUpdateManyWithoutNovelNestedInput
    Chapter?: ChapterUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    translator?: StringFieldUpdateOperationsInput | string
    mc?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnyoneCanUploaded?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileCreateManyNovelInput = {
    id?: number
    userId: number
    title: string
    coverUrl: string
    content: string
    desc: string
    type: string
    date?: Date | string
    isPublished?: boolean
  }

  export type ChapterCreateManyNovelInput = {
    id?: number
    userId: number
    title: string
    content: string
    isPublished?: boolean
  }

  export type ContentFileUpdateWithoutNovelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileUncheckedUpdateWithoutNovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContentFileUncheckedUpdateManyWithoutNovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterUpdateWithoutNovelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterUncheckedUpdateWithoutNovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChapterUncheckedUpdateManyWithoutNovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}