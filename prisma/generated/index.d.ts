
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Community
 * 
 */
export type Community = {
  id: number
  link: string | null
  displayName: string
  onlineProfiles: string[]
  ruleSet: Prisma.JsonValue | null
  disallowedWords: string[]
  createdAt: Date
  ownerId: number
}

/**
 * Model CommunityUser
 * 
 */
export type CommunityUser = {
  communityId: number
  userId: number
  createdAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string | null
  passwordHash: string | null
  createdAt: Date
}

/**
 * Model Author
 * 
 */
export type Author = {
  id: number
  displayName: string
  imageUrl: string | null
  createdAt: Date
  userId: number | null
  communityId: number | null
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: bigint
  type: PostType
  content: string
  description: string
  savedImageURL: string
  authorId: number | null
  communityId: number | null
}

/**
 * Model Story
 * 
 */
export type Story = {
  id: number
  type: PostType
  content: string
  videoURL: string
}

/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = {
  userId: number
  id: number
  description: string | null
  accessPoint: string
  createdAt: Date
  expireDate: Date
  refreshToken: string
}

/**
 * Model runningInstances
 * 
 */
export type runningInstances = {
  id: number
  createdAt: Date
  lastHearBeat: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PostType: {
  text: 'text',
  image: 'image',
  reflink: 'reflink'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Communities
 * const communities = await prisma.community.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Communities
   * const communities = await prisma.community.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<GlobalReject>;

  /**
   * `prisma.communityUser`: Exposes CRUD operations for the **CommunityUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityUsers
    * const communityUsers = await prisma.communityUser.findMany()
    * ```
    */
  get communityUser(): Prisma.CommunityUserDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<GlobalReject>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<GlobalReject>;

  /**
   * `prisma.runningInstances`: Exposes CRUD operations for the **runningInstances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunningInstances
    * const runningInstances = await prisma.runningInstances.findMany()
    * ```
    */
  get runningInstances(): Prisma.runningInstancesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Community: 'Community',
    CommunityUser: 'CommunityUser',
    User: 'User',
    Author: 'Author',
    Post: 'Post',
    Story: 'Story',
    RefreshToken: 'RefreshToken',
    runningInstances: 'runningInstances'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommunityCountOutputType
   */


  export type CommunityCountOutputType = {
    users: number
    authors: number
    posts: number
  }

  export type CommunityCountOutputTypeSelect = {
    users?: boolean
    authors?: boolean
    posts?: boolean
  }

  export type CommunityCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CommunityCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CommunityCountOutputType
    : S extends undefined
    ? never
    : S extends CommunityCountOutputTypeArgs
    ?'include' extends U
    ? CommunityCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CommunityCountOutputType ? CommunityCountOutputType[P] : never
  } 
    : CommunityCountOutputType
  : CommunityCountOutputType




  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     * 
    **/
    select?: CommunityCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    ownedCommunities: number
    communities: number
    RefreshTokens: number
    ownedAuthors: number
  }

  export type UserCountOutputTypeSelect = {
    ownedCommunities?: boolean
    communities?: boolean
    RefreshTokens?: boolean
    ownedAuthors?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type AuthorCountOutputType
   */


  export type AuthorCountOutputType = {
    Post: number
  }

  export type AuthorCountOutputTypeSelect = {
    Post?: boolean
  }

  export type AuthorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AuthorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AuthorCountOutputType
    : S extends undefined
    ? never
    : S extends AuthorCountOutputTypeArgs
    ?'include' extends U
    ? AuthorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AuthorCountOutputType ? AuthorCountOutputType[P] : never
  } 
    : AuthorCountOutputType
  : AuthorCountOutputType




  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     * 
    **/
    select?: AuthorCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Community
   */


  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    link: string | null
    displayName: string | null
    createdAt: Date | null
    ownerId: number | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    link: string | null
    displayName: string | null
    createdAt: Date | null
    ownerId: number | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    link: number
    displayName: number
    onlineProfiles: number
    ruleSet: number
    disallowedWords: number
    createdAt: number
    ownerId: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    link?: true
    displayName?: true
    createdAt?: true
    ownerId?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    link?: true
    displayName?: true
    createdAt?: true
    ownerId?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    link?: true
    displayName?: true
    onlineProfiles?: true
    ruleSet?: true
    disallowedWords?: true
    createdAt?: true
    ownerId?: true
    _all?: true
  }

  export type CommunityAggregateArgs = {
    /**
     * Filter which Community to aggregate.
     * 
    **/
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs = {
    where?: CommunityWhereInput
    orderBy?: Enumerable<CommunityOrderByWithAggregationInput>
    by: Array<CommunityScalarFieldEnum>
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }


  export type CommunityGroupByOutputType = {
    id: number
    link: string | null
    displayName: string
    onlineProfiles: string[]
    ruleSet: JsonValue | null
    disallowedWords: string[]
    createdAt: Date
    ownerId: number
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect = {
    id?: boolean
    link?: boolean
    displayName?: boolean
    onlineProfiles?: boolean
    ruleSet?: boolean
    disallowedWords?: boolean
    createdAt?: boolean
    owner?: boolean | UserArgs
    ownerId?: boolean
    users?: boolean | CommunityUserFindManyArgs
    authors?: boolean | AuthorFindManyArgs
    posts?: boolean | PostFindManyArgs
    _count?: boolean | CommunityCountOutputTypeArgs
  }

  export type CommunityInclude = {
    owner?: boolean | UserArgs
    users?: boolean | CommunityUserFindManyArgs
    authors?: boolean | AuthorFindManyArgs
    posts?: boolean | PostFindManyArgs
    _count?: boolean | CommunityCountOutputTypeArgs
  }

  export type CommunityGetPayload<
    S extends boolean | null | undefined | CommunityArgs,
    U = keyof S
      > = S extends true
        ? Community
    : S extends undefined
    ? never
    : S extends CommunityArgs | CommunityFindManyArgs
    ?'include' extends U
    ? Community  & {
    [P in TrueKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'users' ? Array < CommunityUserGetPayload<S['include'][P]>>  :
        P extends 'authors' ? Array < AuthorGetPayload<S['include'][P]>>  :
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? CommunityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'users' ? Array < CommunityUserGetPayload<S['select'][P]>>  :
        P extends 'authors' ? Array < AuthorGetPayload<S['select'][P]>>  :
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? CommunityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Community ? Community[P] : never
  } 
    : Community
  : Community


  type CommunityCountArgs = Merge<
    Omit<CommunityFindManyArgs, 'select' | 'include'> & {
      select?: CommunityCountAggregateInputType | true
    }
  >

  export interface CommunityDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommunityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Community'> extends True ? CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>> : CheckSelect<T, Prisma__CommunityClient<Community | null >, Prisma__CommunityClient<CommunityGetPayload<T> | null >>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommunityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Community'> extends True ? CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>> : CheckSelect<T, Prisma__CommunityClient<Community | null >, Prisma__CommunityClient<CommunityGetPayload<T> | null >>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs>(
      args?: SelectSubset<T, CommunityFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Community>>, PrismaPromise<Array<CommunityGetPayload<T>>>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs>(
      args: SelectSubset<T, CommunityCreateArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs>(
      args?: SelectSubset<T, CommunityCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs>(
      args: SelectSubset<T, CommunityDeleteArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs>(
      args: SelectSubset<T, CommunityUpdateArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs>(
      args?: SelectSubset<T, CommunityDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs>(
      args: SelectSubset<T, CommunityUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs>(
      args: SelectSubset<T, CommunityUpsertArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Find one Community that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Find the first Community that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CommunityClient<Community>, Prisma__CommunityClient<CommunityGetPayload<T>>>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommunityClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    users<T extends CommunityUserFindManyArgs = {}>(args?: Subset<T, CommunityUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CommunityUser>>, PrismaPromise<Array<CommunityUserGetPayload<T>>>>;

    authors<T extends AuthorFindManyArgs = {}>(args?: Subset<T, AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Community base type for findUnique actions
   */
  export type CommunityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * Filter, which Community to fetch.
     * 
    **/
    where: CommunityWhereUniqueInput
  }

  /**
   * Community: findUnique
   */
  export interface CommunityFindUniqueArgs extends CommunityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Community base type for findFirst actions
   */
  export type CommunityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * Filter, which Community to fetch.
     * 
    **/
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     * 
    **/
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     * 
    **/
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }

  /**
   * Community: findFirst
   */
  export interface CommunityFindFirstArgs extends CommunityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * Filter, which Communities to fetch.
     * 
    **/
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     * 
    **/
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * The data needed to create a Community.
     * 
    **/
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs = {
    /**
     * The data used to create many Communities.
     * 
    **/
    data: Enumerable<CommunityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * The data needed to update a Community.
     * 
    **/
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     * 
    **/
    where: CommunityWhereUniqueInput
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs = {
    /**
     * The data used to update Communities.
     * 
    **/
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     * 
    **/
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * The filter to search for the Community to update in case it exists.
     * 
    **/
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     * 
    **/
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
    /**
     * Filter which Community to delete.
     * 
    **/
    where: CommunityWhereUniqueInput
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs = {
    /**
     * Filter which Communities to delete
     * 
    **/
    where?: CommunityWhereInput
  }


  /**
   * Community: findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs = CommunityFindUniqueArgsBase
      

  /**
   * Community: findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs = CommunityFindFirstArgsBase
      

  /**
   * Community without action
   */
  export type CommunityArgs = {
    /**
     * Select specific fields to fetch from the Community
     * 
    **/
    select?: CommunitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityInclude | null
  }



  /**
   * Model CommunityUser
   */


  export type AggregateCommunityUser = {
    _count: CommunityUserCountAggregateOutputType | null
    _avg: CommunityUserAvgAggregateOutputType | null
    _sum: CommunityUserSumAggregateOutputType | null
    _min: CommunityUserMinAggregateOutputType | null
    _max: CommunityUserMaxAggregateOutputType | null
  }

  export type CommunityUserAvgAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type CommunityUserSumAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type CommunityUserMinAggregateOutputType = {
    communityId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CommunityUserMaxAggregateOutputType = {
    communityId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CommunityUserCountAggregateOutputType = {
    communityId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommunityUserAvgAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type CommunityUserSumAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type CommunityUserMinAggregateInputType = {
    communityId?: true
    userId?: true
    createdAt?: true
  }

  export type CommunityUserMaxAggregateInputType = {
    communityId?: true
    userId?: true
    createdAt?: true
  }

  export type CommunityUserCountAggregateInputType = {
    communityId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityUserAggregateArgs = {
    /**
     * Filter which CommunityUser to aggregate.
     * 
    **/
    where?: CommunityUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommunityUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityUsers
    **/
    _count?: true | CommunityUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunityUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityUserMaxAggregateInputType
  }

  export type GetCommunityUserAggregateType<T extends CommunityUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityUser[P]>
      : GetScalarType<T[P], AggregateCommunityUser[P]>
  }




  export type CommunityUserGroupByArgs = {
    where?: CommunityUserWhereInput
    orderBy?: Enumerable<CommunityUserOrderByWithAggregationInput>
    by: Array<CommunityUserScalarFieldEnum>
    having?: CommunityUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityUserCountAggregateInputType | true
    _avg?: CommunityUserAvgAggregateInputType
    _sum?: CommunityUserSumAggregateInputType
    _min?: CommunityUserMinAggregateInputType
    _max?: CommunityUserMaxAggregateInputType
  }


  export type CommunityUserGroupByOutputType = {
    communityId: number
    userId: number
    createdAt: Date
    _count: CommunityUserCountAggregateOutputType | null
    _avg: CommunityUserAvgAggregateOutputType | null
    _sum: CommunityUserSumAggregateOutputType | null
    _min: CommunityUserMinAggregateOutputType | null
    _max: CommunityUserMaxAggregateOutputType | null
  }

  type GetCommunityUserGroupByPayload<T extends CommunityUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommunityUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityUserGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityUserGroupByOutputType[P]>
        }
      >
    >


  export type CommunityUserSelect = {
    community?: boolean | CommunityArgs
    communityId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    createdAt?: boolean
  }

  export type CommunityUserInclude = {
    community?: boolean | CommunityArgs
    user?: boolean | UserArgs
  }

  export type CommunityUserGetPayload<
    S extends boolean | null | undefined | CommunityUserArgs,
    U = keyof S
      > = S extends true
        ? CommunityUser
    : S extends undefined
    ? never
    : S extends CommunityUserArgs | CommunityUserFindManyArgs
    ?'include' extends U
    ? CommunityUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'community' ? CommunityGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'community' ? CommunityGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof CommunityUser ? CommunityUser[P] : never
  } 
    : CommunityUser
  : CommunityUser


  type CommunityUserCountArgs = Merge<
    Omit<CommunityUserFindManyArgs, 'select' | 'include'> & {
      select?: CommunityUserCountAggregateInputType | true
    }
  >

  export interface CommunityUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CommunityUser that matches the filter.
     * @param {CommunityUserFindUniqueArgs} args - Arguments to find a CommunityUser
     * @example
     * // Get one CommunityUser
     * const communityUser = await prisma.communityUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommunityUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CommunityUser'> extends True ? CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>> : CheckSelect<T, Prisma__CommunityUserClient<CommunityUser | null >, Prisma__CommunityUserClient<CommunityUserGetPayload<T> | null >>

    /**
     * Find the first CommunityUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserFindFirstArgs} args - Arguments to find a CommunityUser
     * @example
     * // Get one CommunityUser
     * const communityUser = await prisma.communityUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommunityUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CommunityUser'> extends True ? CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>> : CheckSelect<T, Prisma__CommunityUserClient<CommunityUser | null >, Prisma__CommunityUserClient<CommunityUserGetPayload<T> | null >>

    /**
     * Find zero or more CommunityUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityUsers
     * const communityUsers = await prisma.communityUser.findMany()
     * 
     * // Get first 10 CommunityUsers
     * const communityUsers = await prisma.communityUser.findMany({ take: 10 })
     * 
     * // Only select the `communityId`
     * const communityUserWithCommunityIdOnly = await prisma.communityUser.findMany({ select: { communityId: true } })
     * 
    **/
    findMany<T extends CommunityUserFindManyArgs>(
      args?: SelectSubset<T, CommunityUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CommunityUser>>, PrismaPromise<Array<CommunityUserGetPayload<T>>>>

    /**
     * Create a CommunityUser.
     * @param {CommunityUserCreateArgs} args - Arguments to create a CommunityUser.
     * @example
     * // Create one CommunityUser
     * const CommunityUser = await prisma.communityUser.create({
     *   data: {
     *     // ... data to create a CommunityUser
     *   }
     * })
     * 
    **/
    create<T extends CommunityUserCreateArgs>(
      args: SelectSubset<T, CommunityUserCreateArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Create many CommunityUsers.
     *     @param {CommunityUserCreateManyArgs} args - Arguments to create many CommunityUsers.
     *     @example
     *     // Create many CommunityUsers
     *     const communityUser = await prisma.communityUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityUserCreateManyArgs>(
      args?: SelectSubset<T, CommunityUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CommunityUser.
     * @param {CommunityUserDeleteArgs} args - Arguments to delete one CommunityUser.
     * @example
     * // Delete one CommunityUser
     * const CommunityUser = await prisma.communityUser.delete({
     *   where: {
     *     // ... filter to delete one CommunityUser
     *   }
     * })
     * 
    **/
    delete<T extends CommunityUserDeleteArgs>(
      args: SelectSubset<T, CommunityUserDeleteArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Update one CommunityUser.
     * @param {CommunityUserUpdateArgs} args - Arguments to update one CommunityUser.
     * @example
     * // Update one CommunityUser
     * const communityUser = await prisma.communityUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUserUpdateArgs>(
      args: SelectSubset<T, CommunityUserUpdateArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Delete zero or more CommunityUsers.
     * @param {CommunityUserDeleteManyArgs} args - Arguments to filter CommunityUsers to delete.
     * @example
     * // Delete a few CommunityUsers
     * const { count } = await prisma.communityUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityUserDeleteManyArgs>(
      args?: SelectSubset<T, CommunityUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityUsers
     * const communityUser = await prisma.communityUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUserUpdateManyArgs>(
      args: SelectSubset<T, CommunityUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CommunityUser.
     * @param {CommunityUserUpsertArgs} args - Arguments to update or create a CommunityUser.
     * @example
     * // Update or create a CommunityUser
     * const communityUser = await prisma.communityUser.upsert({
     *   create: {
     *     // ... data to create a CommunityUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityUser we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUserUpsertArgs>(
      args: SelectSubset<T, CommunityUserUpsertArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Find one CommunityUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CommunityUserFindUniqueOrThrowArgs} args - Arguments to find a CommunityUser
     * @example
     * // Get one CommunityUser
     * const communityUser = await prisma.communityUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommunityUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Find the first CommunityUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserFindFirstOrThrowArgs} args - Arguments to find a CommunityUser
     * @example
     * // Get one CommunityUser
     * const communityUser = await prisma.communityUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommunityUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CommunityUserClient<CommunityUser>, Prisma__CommunityUserClient<CommunityUserGetPayload<T>>>

    /**
     * Count the number of CommunityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserCountArgs} args - Arguments to filter CommunityUsers to count.
     * @example
     * // Count the number of CommunityUsers
     * const count = await prisma.communityUser.count({
     *   where: {
     *     // ... the filter for the CommunityUsers we want to count
     *   }
     * })
    **/
    count<T extends CommunityUserCountArgs>(
      args?: Subset<T, CommunityUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityUserAggregateArgs>(args: Subset<T, CommunityUserAggregateArgs>): PrismaPromise<GetCommunityUserAggregateType<T>>

    /**
     * Group by CommunityUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUserGroupByArgs} args - Group by arguments.
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
      T extends CommunityUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityUserGroupByArgs['orderBy'] }
        : { orderBy?: CommunityUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommunityUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommunityUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    community<T extends CommunityArgs = {}>(args?: Subset<T, CommunityArgs>): CheckSelect<T, Prisma__CommunityClient<Community | null >, Prisma__CommunityClient<CommunityGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CommunityUser base type for findUnique actions
   */
  export type CommunityUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * Filter, which CommunityUser to fetch.
     * 
    **/
    where: CommunityUserWhereUniqueInput
  }

  /**
   * CommunityUser: findUnique
   */
  export interface CommunityUserFindUniqueArgs extends CommunityUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CommunityUser base type for findFirst actions
   */
  export type CommunityUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * Filter, which CommunityUser to fetch.
     * 
    **/
    where?: CommunityUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityUsers.
     * 
    **/
    cursor?: CommunityUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityUsers.
     * 
    **/
    distinct?: Enumerable<CommunityUserScalarFieldEnum>
  }

  /**
   * CommunityUser: findFirst
   */
  export interface CommunityUserFindFirstArgs extends CommunityUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CommunityUser findMany
   */
  export type CommunityUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * Filter, which CommunityUsers to fetch.
     * 
    **/
    where?: CommunityUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CommunityUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityUsers.
     * 
    **/
    cursor?: CommunityUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommunityUserScalarFieldEnum>
  }


  /**
   * CommunityUser create
   */
  export type CommunityUserCreateArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * The data needed to create a CommunityUser.
     * 
    **/
    data: XOR<CommunityUserCreateInput, CommunityUserUncheckedCreateInput>
  }


  /**
   * CommunityUser createMany
   */
  export type CommunityUserCreateManyArgs = {
    /**
     * The data used to create many CommunityUsers.
     * 
    **/
    data: Enumerable<CommunityUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CommunityUser update
   */
  export type CommunityUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * The data needed to update a CommunityUser.
     * 
    **/
    data: XOR<CommunityUserUpdateInput, CommunityUserUncheckedUpdateInput>
    /**
     * Choose, which CommunityUser to update.
     * 
    **/
    where: CommunityUserWhereUniqueInput
  }


  /**
   * CommunityUser updateMany
   */
  export type CommunityUserUpdateManyArgs = {
    /**
     * The data used to update CommunityUsers.
     * 
    **/
    data: XOR<CommunityUserUpdateManyMutationInput, CommunityUserUncheckedUpdateManyInput>
    /**
     * Filter which CommunityUsers to update
     * 
    **/
    where?: CommunityUserWhereInput
  }


  /**
   * CommunityUser upsert
   */
  export type CommunityUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * The filter to search for the CommunityUser to update in case it exists.
     * 
    **/
    where: CommunityUserWhereUniqueInput
    /**
     * In case the CommunityUser found by the `where` argument doesn't exist, create a new CommunityUser with this data.
     * 
    **/
    create: XOR<CommunityUserCreateInput, CommunityUserUncheckedCreateInput>
    /**
     * In case the CommunityUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommunityUserUpdateInput, CommunityUserUncheckedUpdateInput>
  }


  /**
   * CommunityUser delete
   */
  export type CommunityUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
    /**
     * Filter which CommunityUser to delete.
     * 
    **/
    where: CommunityUserWhereUniqueInput
  }


  /**
   * CommunityUser deleteMany
   */
  export type CommunityUserDeleteManyArgs = {
    /**
     * Filter which CommunityUsers to delete
     * 
    **/
    where?: CommunityUserWhereInput
  }


  /**
   * CommunityUser: findUniqueOrThrow
   */
  export type CommunityUserFindUniqueOrThrowArgs = CommunityUserFindUniqueArgsBase
      

  /**
   * CommunityUser: findFirstOrThrow
   */
  export type CommunityUserFindFirstOrThrowArgs = CommunityUserFindFirstArgsBase
      

  /**
   * CommunityUser without action
   */
  export type CommunityUserArgs = {
    /**
     * Select specific fields to fetch from the CommunityUser
     * 
    **/
    select?: CommunityUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommunityUserInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string | null
    passwordHash: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    ownedCommunities?: boolean | CommunityFindManyArgs
    communities?: boolean | CommunityUserFindManyArgs
    RefreshTokens?: boolean | RefreshTokenFindManyArgs
    ownedAuthors?: boolean | AuthorFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    ownedCommunities?: boolean | CommunityFindManyArgs
    communities?: boolean | CommunityUserFindManyArgs
    RefreshTokens?: boolean | RefreshTokenFindManyArgs
    ownedAuthors?: boolean | AuthorFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ownedCommunities' ? Array < CommunityGetPayload<S['include'][P]>>  :
        P extends 'communities' ? Array < CommunityUserGetPayload<S['include'][P]>>  :
        P extends 'RefreshTokens' ? Array < RefreshTokenGetPayload<S['include'][P]>>  :
        P extends 'ownedAuthors' ? Array < AuthorGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ownedCommunities' ? Array < CommunityGetPayload<S['select'][P]>>  :
        P extends 'communities' ? Array < CommunityUserGetPayload<S['select'][P]>>  :
        P extends 'RefreshTokens' ? Array < RefreshTokenGetPayload<S['select'][P]>>  :
        P extends 'ownedAuthors' ? Array < AuthorGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ownedCommunities<T extends CommunityFindManyArgs = {}>(args?: Subset<T, CommunityFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Community>>, PrismaPromise<Array<CommunityGetPayload<T>>>>;

    communities<T extends CommunityUserFindManyArgs = {}>(args?: Subset<T, CommunityUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CommunityUser>>, PrismaPromise<Array<CommunityUserGetPayload<T>>>>;

    RefreshTokens<T extends RefreshTokenFindManyArgs = {}>(args?: Subset<T, RefreshTokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RefreshToken>>, PrismaPromise<Array<RefreshTokenGetPayload<T>>>>;

    ownedAuthors<T extends AuthorFindManyArgs = {}>(args?: Subset<T, AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Author
   */


  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    displayName: string | null
    imageUrl: string | null
    createdAt: Date | null
    userId: number | null
    communityId: number | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    displayName: string | null
    imageUrl: string | null
    createdAt: Date | null
    userId: number | null
    communityId: number | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    displayName: number
    imageUrl: number
    createdAt: number
    userId: number
    communityId: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    displayName?: true
    imageUrl?: true
    createdAt?: true
    userId?: true
    communityId?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    displayName?: true
    imageUrl?: true
    createdAt?: true
    userId?: true
    communityId?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    displayName?: true
    imageUrl?: true
    createdAt?: true
    userId?: true
    communityId?: true
    _all?: true
  }

  export type AuthorAggregateArgs = {
    /**
     * Filter which Author to aggregate.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs = {
    where?: AuthorWhereInput
    orderBy?: Enumerable<AuthorOrderByWithAggregationInput>
    by: Array<AuthorScalarFieldEnum>
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }


  export type AuthorGroupByOutputType = {
    id: number
    displayName: string
    imageUrl: string | null
    createdAt: Date
    userId: number | null
    communityId: number | null
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect = {
    id?: boolean
    displayName?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    owner?: boolean | UserArgs
    userId?: boolean
    community?: boolean | CommunityArgs
    communityId?: boolean
    Post?: boolean | PostFindManyArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorInclude = {
    owner?: boolean | UserArgs
    community?: boolean | CommunityArgs
    Post?: boolean | PostFindManyArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorArgs,
    U = keyof S
      > = S extends true
        ? Author
    : S extends undefined
    ? never
    : S extends AuthorArgs | AuthorFindManyArgs
    ?'include' extends U
    ? Author  & {
    [P in TrueKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> | null :
        P extends 'community' ? CommunityGetPayload<S['include'][P]> | null :
        P extends 'Post' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> | null :
        P extends 'community' ? CommunityGetPayload<S['select'][P]> | null :
        P extends 'Post' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Author ? Author[P] : never
  } 
    : Author
  : Author


  type AuthorCountArgs = Merge<
    Omit<AuthorFindManyArgs, 'select' | 'include'> & {
      select?: AuthorCountAggregateInputType | true
    }
  >

  export interface AuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Find one Author that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Find the first Author that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    community<T extends CommunityArgs = {}>(args?: Subset<T, CommunityArgs>): CheckSelect<T, Prisma__CommunityClient<Community | null >, Prisma__CommunityClient<CommunityGetPayload<T> | null >>;

    Post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Author base type for findUnique actions
   */
  export type AuthorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where: AuthorWhereUniqueInput
  }

  /**
   * Author: findUnique
   */
  export interface AuthorFindUniqueArgs extends AuthorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author base type for findFirst actions
   */
  export type AuthorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     * 
    **/
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }

  /**
   * Author: findFirst
   */
  export interface AuthorFindFirstArgs extends AuthorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Authors to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to create a Author.
     * 
    **/
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs = {
    /**
     * The data used to create many Authors.
     * 
    **/
    data: Enumerable<AuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to update a Author.
     * 
    **/
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs = {
    /**
     * The data used to update Authors.
     * 
    **/
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The filter to search for the Author to update in case it exists.
     * 
    **/
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     * 
    **/
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter which Author to delete.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs = {
    /**
     * Filter which Authors to delete
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author: findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs = AuthorFindUniqueArgsBase
      

  /**
   * Author: findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs = AuthorFindFirstArgsBase
      

  /**
   * Author without action
   */
  export type AuthorArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    communityId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: bigint | null
    authorId: number | null
    communityId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: bigint | null
    type: PostType | null
    content: string | null
    description: string | null
    savedImageURL: string | null
    authorId: number | null
    communityId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: bigint | null
    type: PostType | null
    content: string | null
    description: string | null
    savedImageURL: string | null
    authorId: number | null
    communityId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    type: number
    content: number
    description: number
    savedImageURL: number
    authorId: number
    communityId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
    communityId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
    communityId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    description?: true
    savedImageURL?: true
    authorId?: true
    communityId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    description?: true
    savedImageURL?: true
    authorId?: true
    communityId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    description?: true
    savedImageURL?: true
    authorId?: true
    communityId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: bigint
    type: PostType
    content: string
    description: string
    savedImageURL: string
    authorId: number | null
    communityId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    type?: boolean
    content?: boolean
    description?: boolean
    savedImageURL?: boolean
    author?: boolean | AuthorArgs
    authorId?: boolean
    community?: boolean | CommunityArgs
    communityId?: boolean
  }

  export type PostInclude = {
    author?: boolean | AuthorArgs
    community?: boolean | CommunityArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? AuthorGetPayload<S['include'][P]> | null :
        P extends 'community' ? CommunityGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? AuthorGetPayload<S['select'][P]> | null :
        P extends 'community' ? CommunityGetPayload<S['select'][P]> | null :  P extends keyof Post ? Post[P] : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Find one Post that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends AuthorArgs = {}>(args?: Subset<T, AuthorArgs>): CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>;

    community<T extends CommunityArgs = {}>(args?: Subset<T, CommunityArgs>): CheckSelect<T, Prisma__CommunityClient<Community | null >, Prisma__CommunityClient<CommunityGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }

  /**
   * Post: findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post: findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     * 
    **/
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     * 
    **/
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post: findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = PostFindUniqueArgsBase
      

  /**
   * Post: findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = PostFindFirstArgsBase
      

  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model Story
   */


  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    type: PostType | null
    content: string | null
    videoURL: string | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    type: PostType | null
    content: string | null
    videoURL: string | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    type: number
    content: number
    videoURL: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    videoURL?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    videoURL?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    videoURL?: true
    _all?: true
  }

  export type StoryAggregateArgs = {
    /**
     * Filter which Story to aggregate.
     * 
    **/
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     * 
    **/
    orderBy?: Enumerable<StoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs = {
    where?: StoryWhereInput
    orderBy?: Enumerable<StoryOrderByWithAggregationInput>
    by: Array<StoryScalarFieldEnum>
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }


  export type StoryGroupByOutputType = {
    id: number
    type: PostType
    content: string
    videoURL: string
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect = {
    id?: boolean
    type?: boolean
    content?: boolean
    videoURL?: boolean
  }

  export type StoryGetPayload<
    S extends boolean | null | undefined | StoryArgs,
    U = keyof S
      > = S extends true
        ? Story
    : S extends undefined
    ? never
    : S extends StoryArgs | StoryFindManyArgs
    ?'include' extends U
    ? Story 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Story ? Story[P] : never
  } 
    : Story
  : Story


  type StoryCountArgs = Merge<
    Omit<StoryFindManyArgs, 'select' | 'include'> & {
      select?: StoryCountAggregateInputType | true
    }
  >

  export interface StoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Story'> extends True ? CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>> : CheckSelect<T, Prisma__StoryClient<Story | null >, Prisma__StoryClient<StoryGetPayload<T> | null >>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Story'> extends True ? CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>> : CheckSelect<T, Prisma__StoryClient<Story | null >, Prisma__StoryClient<StoryGetPayload<T> | null >>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoryFindManyArgs>(
      args?: SelectSubset<T, StoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Story>>, PrismaPromise<Array<StoryGetPayload<T>>>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
    **/
    create<T extends StoryCreateArgs>(
      args: SelectSubset<T, StoryCreateArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Create many Stories.
     *     @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     *     @example
     *     // Create many Stories
     *     const story = await prisma.story.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoryCreateManyArgs>(
      args?: SelectSubset<T, StoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
    **/
    delete<T extends StoryDeleteArgs>(
      args: SelectSubset<T, StoryDeleteArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoryUpdateArgs>(
      args: SelectSubset<T, StoryUpdateArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoryDeleteManyArgs>(
      args?: SelectSubset<T, StoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoryUpdateManyArgs>(
      args: SelectSubset<T, StoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
    **/
    upsert<T extends StoryUpsertArgs>(
      args: SelectSubset<T, StoryUpsertArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Find one Story that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StoryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Find the first Story that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StoryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StoryClient<Story>, Prisma__StoryClient<StoryGetPayload<T>>>

    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
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
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Story base type for findUnique actions
   */
  export type StoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * Filter, which Story to fetch.
     * 
    **/
    where: StoryWhereUniqueInput
  }

  /**
   * Story: findUnique
   */
  export interface StoryFindUniqueArgs extends StoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Story base type for findFirst actions
   */
  export type StoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * Filter, which Story to fetch.
     * 
    **/
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     * 
    **/
    orderBy?: Enumerable<StoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     * 
    **/
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     * 
    **/
    distinct?: Enumerable<StoryScalarFieldEnum>
  }

  /**
   * Story: findFirst
   */
  export interface StoryFindFirstArgs extends StoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Story findMany
   */
  export type StoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * Filter, which Stories to fetch.
     * 
    **/
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     * 
    **/
    orderBy?: Enumerable<StoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     * 
    **/
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StoryScalarFieldEnum>
  }


  /**
   * Story create
   */
  export type StoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * The data needed to create a Story.
     * 
    **/
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }


  /**
   * Story createMany
   */
  export type StoryCreateManyArgs = {
    /**
     * The data used to create many Stories.
     * 
    **/
    data: Enumerable<StoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Story update
   */
  export type StoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * The data needed to update a Story.
     * 
    **/
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     * 
    **/
    where: StoryWhereUniqueInput
  }


  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs = {
    /**
     * The data used to update Stories.
     * 
    **/
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     * 
    **/
    where?: StoryWhereInput
  }


  /**
   * Story upsert
   */
  export type StoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * The filter to search for the Story to update in case it exists.
     * 
    **/
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     * 
    **/
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }


  /**
   * Story delete
   */
  export type StoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
    /**
     * Filter which Story to delete.
     * 
    **/
    where: StoryWhereUniqueInput
  }


  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs = {
    /**
     * Filter which Stories to delete
     * 
    **/
    where?: StoryWhereInput
  }


  /**
   * Story: findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs = StoryFindUniqueArgsBase
      

  /**
   * Story: findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs = StoryFindFirstArgsBase
      

  /**
   * Story without action
   */
  export type StoryArgs = {
    /**
     * Select specific fields to fetch from the Story
     * 
    **/
    select?: StorySelect | null
  }



  /**
   * Model RefreshToken
   */


  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    userId: number | null
    id: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    userId: number | null
    id: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    userId: number | null
    id: number | null
    description: string | null
    accessPoint: string | null
    createdAt: Date | null
    expireDate: Date | null
    refreshToken: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    userId: number | null
    id: number | null
    description: string | null
    accessPoint: string | null
    createdAt: Date | null
    expireDate: Date | null
    refreshToken: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    userId: number
    id: number
    description: number
    accessPoint: number
    createdAt: number
    expireDate: number
    refreshToken: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    userId?: true
    id?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    userId?: true
    id?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    userId?: true
    id?: true
    description?: true
    accessPoint?: true
    createdAt?: true
    expireDate?: true
    refreshToken?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    userId?: true
    id?: true
    description?: true
    accessPoint?: true
    createdAt?: true
    expireDate?: true
    refreshToken?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    userId?: true
    id?: true
    description?: true
    accessPoint?: true
    createdAt?: true
    expireDate?: true
    refreshToken?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs = {
    /**
     * Filter which RefreshToken to aggregate.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs = {
    where?: RefreshTokenWhereInput
    orderBy?: Enumerable<RefreshTokenOrderByWithAggregationInput>
    by: Array<RefreshTokenScalarFieldEnum>
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }


  export type RefreshTokenGroupByOutputType = {
    userId: number
    id: number
    description: string | null
    accessPoint: string
    createdAt: Date
    expireDate: Date
    refreshToken: string
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect = {
    user?: boolean | UserArgs
    userId?: boolean
    id?: boolean
    description?: boolean
    accessPoint?: boolean
    createdAt?: boolean
    expireDate?: boolean
    refreshToken?: boolean
  }

  export type RefreshTokenInclude = {
    user?: boolean | UserArgs
  }

  export type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenArgs,
    U = keyof S
      > = S extends true
        ? RefreshToken
    : S extends undefined
    ? never
    : S extends RefreshTokenArgs | RefreshTokenFindManyArgs
    ?'include' extends U
    ? RefreshToken  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof RefreshToken ? RefreshToken[P] : never
  } 
    : RefreshToken
  : RefreshToken


  type RefreshTokenCountArgs = Merge<
    Omit<RefreshTokenFindManyArgs, 'select' | 'include'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }
  >

  export interface RefreshTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RefreshToken'> extends True ? CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken | null >, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null >>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RefreshToken'> extends True ? CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken | null >, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null >>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const refreshTokenWithUserIdOnly = await prisma.refreshToken.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RefreshToken>>, PrismaPromise<Array<RefreshTokenGetPayload<T>>>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
    **/
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Create many RefreshTokens.
     *     @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     *     @example
     *     // Create many RefreshTokens
     *     const refreshToken = await prisma.refreshToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
    **/
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Find one RefreshToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefreshTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RefreshToken base type for findUnique actions
   */
  export type RefreshTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken: findUnique
   */
  export interface RefreshTokenFindUniqueArgs extends RefreshTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken base type for findFirst actions
   */
  export type RefreshTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     * 
    **/
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }

  /**
   * RefreshToken: findFirst
   */
  export interface RefreshTokenFindFirstArgs extends RefreshTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshTokens to fetch.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }


  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The data needed to create a RefreshToken.
     * 
    **/
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }


  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs = {
    /**
     * The data used to create many RefreshTokens.
     * 
    **/
    data: Enumerable<RefreshTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The data needed to update a RefreshToken.
     * 
    **/
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs = {
    /**
     * The data used to update RefreshTokens.
     * 
    **/
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     * 
    **/
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     * 
    **/
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }


  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter which RefreshToken to delete.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs = {
    /**
     * Filter which RefreshTokens to delete
     * 
    **/
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken: findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs = RefreshTokenFindUniqueArgsBase
      

  /**
   * RefreshToken: findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs = RefreshTokenFindFirstArgsBase
      

  /**
   * RefreshToken without action
   */
  export type RefreshTokenArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
  }



  /**
   * Model runningInstances
   */


  export type AggregateRunningInstances = {
    _count: RunningInstancesCountAggregateOutputType | null
    _avg: RunningInstancesAvgAggregateOutputType | null
    _sum: RunningInstancesSumAggregateOutputType | null
    _min: RunningInstancesMinAggregateOutputType | null
    _max: RunningInstancesMaxAggregateOutputType | null
  }

  export type RunningInstancesAvgAggregateOutputType = {
    id: number | null
  }

  export type RunningInstancesSumAggregateOutputType = {
    id: number | null
  }

  export type RunningInstancesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    lastHearBeat: Date | null
  }

  export type RunningInstancesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    lastHearBeat: Date | null
  }

  export type RunningInstancesCountAggregateOutputType = {
    id: number
    createdAt: number
    lastHearBeat: number
    _all: number
  }


  export type RunningInstancesAvgAggregateInputType = {
    id?: true
  }

  export type RunningInstancesSumAggregateInputType = {
    id?: true
  }

  export type RunningInstancesMinAggregateInputType = {
    id?: true
    createdAt?: true
    lastHearBeat?: true
  }

  export type RunningInstancesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    lastHearBeat?: true
  }

  export type RunningInstancesCountAggregateInputType = {
    id?: true
    createdAt?: true
    lastHearBeat?: true
    _all?: true
  }

  export type RunningInstancesAggregateArgs = {
    /**
     * Filter which runningInstances to aggregate.
     * 
    **/
    where?: runningInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runningInstances to fetch.
     * 
    **/
    orderBy?: Enumerable<runningInstancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: runningInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runningInstances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runningInstances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned runningInstances
    **/
    _count?: true | RunningInstancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunningInstancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunningInstancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunningInstancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunningInstancesMaxAggregateInputType
  }

  export type GetRunningInstancesAggregateType<T extends RunningInstancesAggregateArgs> = {
        [P in keyof T & keyof AggregateRunningInstances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunningInstances[P]>
      : GetScalarType<T[P], AggregateRunningInstances[P]>
  }




  export type RunningInstancesGroupByArgs = {
    where?: runningInstancesWhereInput
    orderBy?: Enumerable<runningInstancesOrderByWithAggregationInput>
    by: Array<RunningInstancesScalarFieldEnum>
    having?: runningInstancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunningInstancesCountAggregateInputType | true
    _avg?: RunningInstancesAvgAggregateInputType
    _sum?: RunningInstancesSumAggregateInputType
    _min?: RunningInstancesMinAggregateInputType
    _max?: RunningInstancesMaxAggregateInputType
  }


  export type RunningInstancesGroupByOutputType = {
    id: number
    createdAt: Date
    lastHearBeat: Date
    _count: RunningInstancesCountAggregateOutputType | null
    _avg: RunningInstancesAvgAggregateOutputType | null
    _sum: RunningInstancesSumAggregateOutputType | null
    _min: RunningInstancesMinAggregateOutputType | null
    _max: RunningInstancesMaxAggregateOutputType | null
  }

  type GetRunningInstancesGroupByPayload<T extends RunningInstancesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RunningInstancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunningInstancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunningInstancesGroupByOutputType[P]>
            : GetScalarType<T[P], RunningInstancesGroupByOutputType[P]>
        }
      >
    >


  export type runningInstancesSelect = {
    id?: boolean
    createdAt?: boolean
    lastHearBeat?: boolean
  }

  export type runningInstancesGetPayload<
    S extends boolean | null | undefined | runningInstancesArgs,
    U = keyof S
      > = S extends true
        ? runningInstances
    : S extends undefined
    ? never
    : S extends runningInstancesArgs | runningInstancesFindManyArgs
    ?'include' extends U
    ? runningInstances 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof runningInstances ? runningInstances[P] : never
  } 
    : runningInstances
  : runningInstances


  type runningInstancesCountArgs = Merge<
    Omit<runningInstancesFindManyArgs, 'select' | 'include'> & {
      select?: RunningInstancesCountAggregateInputType | true
    }
  >

  export interface runningInstancesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RunningInstances that matches the filter.
     * @param {runningInstancesFindUniqueArgs} args - Arguments to find a RunningInstances
     * @example
     * // Get one RunningInstances
     * const runningInstances = await prisma.runningInstances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends runningInstancesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, runningInstancesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'runningInstances'> extends True ? CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>> : CheckSelect<T, Prisma__runningInstancesClient<runningInstances | null >, Prisma__runningInstancesClient<runningInstancesGetPayload<T> | null >>

    /**
     * Find the first RunningInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runningInstancesFindFirstArgs} args - Arguments to find a RunningInstances
     * @example
     * // Get one RunningInstances
     * const runningInstances = await prisma.runningInstances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends runningInstancesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, runningInstancesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'runningInstances'> extends True ? CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>> : CheckSelect<T, Prisma__runningInstancesClient<runningInstances | null >, Prisma__runningInstancesClient<runningInstancesGetPayload<T> | null >>

    /**
     * Find zero or more RunningInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runningInstancesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunningInstances
     * const runningInstances = await prisma.runningInstances.findMany()
     * 
     * // Get first 10 RunningInstances
     * const runningInstances = await prisma.runningInstances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runningInstancesWithIdOnly = await prisma.runningInstances.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends runningInstancesFindManyArgs>(
      args?: SelectSubset<T, runningInstancesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<runningInstances>>, PrismaPromise<Array<runningInstancesGetPayload<T>>>>

    /**
     * Create a RunningInstances.
     * @param {runningInstancesCreateArgs} args - Arguments to create a RunningInstances.
     * @example
     * // Create one RunningInstances
     * const RunningInstances = await prisma.runningInstances.create({
     *   data: {
     *     // ... data to create a RunningInstances
     *   }
     * })
     * 
    **/
    create<T extends runningInstancesCreateArgs>(
      args: SelectSubset<T, runningInstancesCreateArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Create many RunningInstances.
     *     @param {runningInstancesCreateManyArgs} args - Arguments to create many RunningInstances.
     *     @example
     *     // Create many RunningInstances
     *     const runningInstances = await prisma.runningInstances.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends runningInstancesCreateManyArgs>(
      args?: SelectSubset<T, runningInstancesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RunningInstances.
     * @param {runningInstancesDeleteArgs} args - Arguments to delete one RunningInstances.
     * @example
     * // Delete one RunningInstances
     * const RunningInstances = await prisma.runningInstances.delete({
     *   where: {
     *     // ... filter to delete one RunningInstances
     *   }
     * })
     * 
    **/
    delete<T extends runningInstancesDeleteArgs>(
      args: SelectSubset<T, runningInstancesDeleteArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Update one RunningInstances.
     * @param {runningInstancesUpdateArgs} args - Arguments to update one RunningInstances.
     * @example
     * // Update one RunningInstances
     * const runningInstances = await prisma.runningInstances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends runningInstancesUpdateArgs>(
      args: SelectSubset<T, runningInstancesUpdateArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Delete zero or more RunningInstances.
     * @param {runningInstancesDeleteManyArgs} args - Arguments to filter RunningInstances to delete.
     * @example
     * // Delete a few RunningInstances
     * const { count } = await prisma.runningInstances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends runningInstancesDeleteManyArgs>(
      args?: SelectSubset<T, runningInstancesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunningInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runningInstancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunningInstances
     * const runningInstances = await prisma.runningInstances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends runningInstancesUpdateManyArgs>(
      args: SelectSubset<T, runningInstancesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RunningInstances.
     * @param {runningInstancesUpsertArgs} args - Arguments to update or create a RunningInstances.
     * @example
     * // Update or create a RunningInstances
     * const runningInstances = await prisma.runningInstances.upsert({
     *   create: {
     *     // ... data to create a RunningInstances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunningInstances we want to update
     *   }
     * })
    **/
    upsert<T extends runningInstancesUpsertArgs>(
      args: SelectSubset<T, runningInstancesUpsertArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Find one RunningInstances that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {runningInstancesFindUniqueOrThrowArgs} args - Arguments to find a RunningInstances
     * @example
     * // Get one RunningInstances
     * const runningInstances = await prisma.runningInstances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends runningInstancesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, runningInstancesFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Find the first RunningInstances that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runningInstancesFindFirstOrThrowArgs} args - Arguments to find a RunningInstances
     * @example
     * // Get one RunningInstances
     * const runningInstances = await prisma.runningInstances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends runningInstancesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, runningInstancesFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__runningInstancesClient<runningInstances>, Prisma__runningInstancesClient<runningInstancesGetPayload<T>>>

    /**
     * Count the number of RunningInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runningInstancesCountArgs} args - Arguments to filter RunningInstances to count.
     * @example
     * // Count the number of RunningInstances
     * const count = await prisma.runningInstances.count({
     *   where: {
     *     // ... the filter for the RunningInstances we want to count
     *   }
     * })
    **/
    count<T extends runningInstancesCountArgs>(
      args?: Subset<T, runningInstancesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunningInstancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunningInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunningInstancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunningInstancesAggregateArgs>(args: Subset<T, RunningInstancesAggregateArgs>): PrismaPromise<GetRunningInstancesAggregateType<T>>

    /**
     * Group by RunningInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunningInstancesGroupByArgs} args - Group by arguments.
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
      T extends RunningInstancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunningInstancesGroupByArgs['orderBy'] }
        : { orderBy?: RunningInstancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RunningInstancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunningInstancesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for runningInstances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__runningInstancesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * runningInstances base type for findUnique actions
   */
  export type runningInstancesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * Filter, which runningInstances to fetch.
     * 
    **/
    where: runningInstancesWhereUniqueInput
  }

  /**
   * runningInstances: findUnique
   */
  export interface runningInstancesFindUniqueArgs extends runningInstancesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * runningInstances base type for findFirst actions
   */
  export type runningInstancesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * Filter, which runningInstances to fetch.
     * 
    **/
    where?: runningInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runningInstances to fetch.
     * 
    **/
    orderBy?: Enumerable<runningInstancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for runningInstances.
     * 
    **/
    cursor?: runningInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runningInstances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runningInstances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of runningInstances.
     * 
    **/
    distinct?: Enumerable<RunningInstancesScalarFieldEnum>
  }

  /**
   * runningInstances: findFirst
   */
  export interface runningInstancesFindFirstArgs extends runningInstancesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * runningInstances findMany
   */
  export type runningInstancesFindManyArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * Filter, which runningInstances to fetch.
     * 
    **/
    where?: runningInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runningInstances to fetch.
     * 
    **/
    orderBy?: Enumerable<runningInstancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing runningInstances.
     * 
    **/
    cursor?: runningInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runningInstances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runningInstances.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RunningInstancesScalarFieldEnum>
  }


  /**
   * runningInstances create
   */
  export type runningInstancesCreateArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * The data needed to create a runningInstances.
     * 
    **/
    data: XOR<runningInstancesCreateInput, runningInstancesUncheckedCreateInput>
  }


  /**
   * runningInstances createMany
   */
  export type runningInstancesCreateManyArgs = {
    /**
     * The data used to create many runningInstances.
     * 
    **/
    data: Enumerable<runningInstancesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * runningInstances update
   */
  export type runningInstancesUpdateArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * The data needed to update a runningInstances.
     * 
    **/
    data: XOR<runningInstancesUpdateInput, runningInstancesUncheckedUpdateInput>
    /**
     * Choose, which runningInstances to update.
     * 
    **/
    where: runningInstancesWhereUniqueInput
  }


  /**
   * runningInstances updateMany
   */
  export type runningInstancesUpdateManyArgs = {
    /**
     * The data used to update runningInstances.
     * 
    **/
    data: XOR<runningInstancesUpdateManyMutationInput, runningInstancesUncheckedUpdateManyInput>
    /**
     * Filter which runningInstances to update
     * 
    **/
    where?: runningInstancesWhereInput
  }


  /**
   * runningInstances upsert
   */
  export type runningInstancesUpsertArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * The filter to search for the runningInstances to update in case it exists.
     * 
    **/
    where: runningInstancesWhereUniqueInput
    /**
     * In case the runningInstances found by the `where` argument doesn't exist, create a new runningInstances with this data.
     * 
    **/
    create: XOR<runningInstancesCreateInput, runningInstancesUncheckedCreateInput>
    /**
     * In case the runningInstances was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<runningInstancesUpdateInput, runningInstancesUncheckedUpdateInput>
  }


  /**
   * runningInstances delete
   */
  export type runningInstancesDeleteArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
    /**
     * Filter which runningInstances to delete.
     * 
    **/
    where: runningInstancesWhereUniqueInput
  }


  /**
   * runningInstances deleteMany
   */
  export type runningInstancesDeleteManyArgs = {
    /**
     * Filter which runningInstances to delete
     * 
    **/
    where?: runningInstancesWhereInput
  }


  /**
   * runningInstances: findUniqueOrThrow
   */
  export type runningInstancesFindUniqueOrThrowArgs = runningInstancesFindUniqueArgsBase
      

  /**
   * runningInstances: findFirstOrThrow
   */
  export type runningInstancesFindFirstOrThrowArgs = runningInstancesFindFirstArgsBase
      

  /**
   * runningInstances without action
   */
  export type runningInstancesArgs = {
    /**
     * Select specific fields to fetch from the runningInstances
     * 
    **/
    select?: runningInstancesSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuthorScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    userId: 'userId',
    communityId: 'communityId'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    link: 'link',
    displayName: 'displayName',
    onlineProfiles: 'onlineProfiles',
    ruleSet: 'ruleSet',
    disallowedWords: 'disallowedWords',
    createdAt: 'createdAt',
    ownerId: 'ownerId'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const CommunityUserScalarFieldEnum: {
    communityId: 'communityId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommunityUserScalarFieldEnum = (typeof CommunityUserScalarFieldEnum)[keyof typeof CommunityUserScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const PostScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    description: 'description',
    savedImageURL: 'savedImageURL',
    authorId: 'authorId',
    communityId: 'communityId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RefreshTokenScalarFieldEnum: {
    userId: 'userId',
    id: 'id',
    description: 'description',
    accessPoint: 'accessPoint',
    createdAt: 'createdAt',
    expireDate: 'expireDate',
    refreshToken: 'refreshToken'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const RunningInstancesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    lastHearBeat: 'lastHearBeat'
  };

  export type RunningInstancesScalarFieldEnum = (typeof RunningInstancesScalarFieldEnum)[keyof typeof RunningInstancesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    videoURL: 'videoURL'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CommunityWhereInput = {
    AND?: Enumerable<CommunityWhereInput>
    OR?: Enumerable<CommunityWhereInput>
    NOT?: Enumerable<CommunityWhereInput>
    id?: IntFilter | number
    link?: StringNullableFilter | string | null
    displayName?: StringFilter | string
    onlineProfiles?: StringNullableListFilter
    ruleSet?: JsonNullableFilter
    disallowedWords?: StringNullableListFilter
    createdAt?: DateTimeFilter | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    ownerId?: IntFilter | number
    users?: CommunityUserListRelationFilter
    authors?: AuthorListRelationFilter
    posts?: PostListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    displayName?: SortOrder
    onlineProfiles?: SortOrder
    ruleSet?: SortOrder
    disallowedWords?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    ownerId?: SortOrder
    users?: CommunityUserOrderByRelationAggregateInput
    authors?: AuthorOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = {
    id?: number
    link?: string
  }

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    displayName?: SortOrder
    onlineProfiles?: SortOrder
    ruleSet?: SortOrder
    disallowedWords?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    link?: StringNullableWithAggregatesFilter | string | null
    displayName?: StringWithAggregatesFilter | string
    onlineProfiles?: StringNullableListFilter
    ruleSet?: JsonNullableWithAggregatesFilter
    disallowedWords?: StringNullableListFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: IntWithAggregatesFilter | number
  }

  export type CommunityUserWhereInput = {
    AND?: Enumerable<CommunityUserWhereInput>
    OR?: Enumerable<CommunityUserWhereInput>
    NOT?: Enumerable<CommunityUserWhereInput>
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    communityId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type CommunityUserOrderByWithRelationInput = {
    community?: CommunityOrderByWithRelationInput
    communityId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityUserWhereUniqueInput = {
    communityId_userId?: CommunityUserCommunityIdUserIdCompoundUniqueInput
  }

  export type CommunityUserOrderByWithAggregationInput = {
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CommunityUserCountOrderByAggregateInput
    _avg?: CommunityUserAvgOrderByAggregateInput
    _max?: CommunityUserMaxOrderByAggregateInput
    _min?: CommunityUserMinOrderByAggregateInput
    _sum?: CommunityUserSumOrderByAggregateInput
  }

  export type CommunityUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommunityUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommunityUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommunityUserScalarWhereWithAggregatesInput>
    communityId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringNullableFilter | string | null
    passwordHash?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    ownedCommunities?: CommunityListRelationFilter
    communities?: CommunityUserListRelationFilter
    RefreshTokens?: RefreshTokenListRelationFilter
    ownedAuthors?: AuthorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    ownedCommunities?: CommunityOrderByRelationAggregateInput
    communities?: CommunityUserOrderByRelationAggregateInput
    RefreshTokens?: RefreshTokenOrderByRelationAggregateInput
    ownedAuthors?: AuthorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringNullableWithAggregatesFilter | string | null
    passwordHash?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuthorWhereInput = {
    AND?: Enumerable<AuthorWhereInput>
    OR?: Enumerable<AuthorWhereInput>
    NOT?: Enumerable<AuthorWhereInput>
    id?: IntFilter | number
    displayName?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: IntNullableFilter | number | null
    community?: XOR<CommunityRelationFilter, CommunityWhereInput> | null
    communityId?: IntNullableFilter | number | null
    Post?: PostListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    userId?: SortOrder
    community?: CommunityOrderByWithRelationInput
    communityId?: SortOrder
    Post?: PostOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = {
    id?: number
  }

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    displayName?: StringWithAggregatesFilter | string
    imageUrl?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntNullableWithAggregatesFilter | number | null
    communityId?: IntNullableWithAggregatesFilter | number | null
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: BigIntFilter | bigint | number
    type?: EnumPostTypeFilter | PostType
    content?: StringFilter | string
    description?: StringFilter | string
    savedImageURL?: StringFilter | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput> | null
    authorId?: IntNullableFilter | number | null
    community?: XOR<CommunityRelationFilter, CommunityWhereInput> | null
    communityId?: IntNullableFilter | number | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    description?: SortOrder
    savedImageURL?: SortOrder
    author?: AuthorOrderByWithRelationInput
    authorId?: SortOrder
    community?: CommunityOrderByWithRelationInput
    communityId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: bigint | number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    description?: SortOrder
    savedImageURL?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    type?: EnumPostTypeWithAggregatesFilter | PostType
    content?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    savedImageURL?: StringWithAggregatesFilter | string
    authorId?: IntNullableWithAggregatesFilter | number | null
    communityId?: IntNullableWithAggregatesFilter | number | null
  }

  export type StoryWhereInput = {
    AND?: Enumerable<StoryWhereInput>
    OR?: Enumerable<StoryWhereInput>
    NOT?: Enumerable<StoryWhereInput>
    id?: IntFilter | number
    type?: EnumPostTypeFilter | PostType
    content?: StringFilter | string
    videoURL?: StringFilter | string
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    videoURL?: SortOrder
  }

  export type StoryWhereUniqueInput = {
    id?: number
  }

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    videoURL?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<StoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: EnumPostTypeWithAggregatesFilter | PostType
    content?: StringWithAggregatesFilter | string
    videoURL?: StringWithAggregatesFilter | string
  }

  export type RefreshTokenWhereInput = {
    AND?: Enumerable<RefreshTokenWhereInput>
    OR?: Enumerable<RefreshTokenWhereInput>
    NOT?: Enumerable<RefreshTokenWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    id?: IntFilter | number
    description?: StringNullableFilter | string | null
    accessPoint?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    expireDate?: DateTimeFilter | Date | string
    refreshToken?: StringFilter | string
  }

  export type RefreshTokenOrderByWithRelationInput = {
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    id?: SortOrder
    description?: SortOrder
    accessPoint?: SortOrder
    createdAt?: SortOrder
    expireDate?: SortOrder
    refreshToken?: SortOrder
  }

  export type RefreshTokenWhereUniqueInput = {
    id?: number
    refreshToken?: string
  }

  export type RefreshTokenOrderByWithAggregationInput = {
    userId?: SortOrder
    id?: SortOrder
    description?: SortOrder
    accessPoint?: SortOrder
    createdAt?: SortOrder
    expireDate?: SortOrder
    refreshToken?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    id?: IntWithAggregatesFilter | number
    description?: StringNullableWithAggregatesFilter | string | null
    accessPoint?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    expireDate?: DateTimeWithAggregatesFilter | Date | string
    refreshToken?: StringWithAggregatesFilter | string
  }

  export type runningInstancesWhereInput = {
    AND?: Enumerable<runningInstancesWhereInput>
    OR?: Enumerable<runningInstancesWhereInput>
    NOT?: Enumerable<runningInstancesWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    lastHearBeat?: DateTimeFilter | Date | string
  }

  export type runningInstancesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastHearBeat?: SortOrder
  }

  export type runningInstancesWhereUniqueInput = {
    id?: number
  }

  export type runningInstancesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastHearBeat?: SortOrder
    _count?: runningInstancesCountOrderByAggregateInput
    _avg?: runningInstancesAvgOrderByAggregateInput
    _max?: runningInstancesMaxOrderByAggregateInput
    _min?: runningInstancesMinOrderByAggregateInput
    _sum?: runningInstancesSumOrderByAggregateInput
  }

  export type runningInstancesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<runningInstancesScalarWhereWithAggregatesInput>
    OR?: Enumerable<runningInstancesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<runningInstancesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    lastHearBeat?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommunityCreateInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCommunitiesInput
    users?: CommunityUserCreateNestedManyWithoutCommunityInput
    authors?: AuthorCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    ownerId: number
    users?: CommunityUserUncheckedCreateNestedManyWithoutCommunityInput
    authors?: AuthorUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCommunitiesNestedInput
    users?: CommunityUserUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    users?: CommunityUserUncheckedUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    ownerId: number
  }

  export type CommunityUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityUserCreateInput = {
    community: CommunityCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutCommunitiesInput
    createdAt?: Date | string
  }

  export type CommunityUserUncheckedCreateInput = {
    communityId: number
    userId: number
    createdAt?: Date | string
  }

  export type CommunityUserUpdateInput = {
    community?: CommunityUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserCreateManyInput = {
    communityId: number
    userId: number
    createdAt?: Date | string
  }

  export type CommunityUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateManyInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityUncheckedCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserUncheckedCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUncheckedUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUncheckedUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorCreateInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedAuthorsInput
    community?: CommunityCreateNestedOneWithoutAuthorsInput
    Post?: PostCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    userId?: number | null
    communityId?: number | null
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedAuthorsNestedInput
    community?: CommunityUpdateOneWithoutAuthorsNestedInput
    Post?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    userId?: number | null
    communityId?: number | null
  }

  export type AuthorUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    author?: AuthorCreateNestedOneWithoutPostInput
    community?: CommunityCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    authorId?: number | null
    communityId?: number | null
  }

  export type PostUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    author?: AuthorUpdateOneWithoutPostNestedInput
    community?: CommunityUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    authorId?: number | null
    communityId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StoryCreateInput = {
    id: number
    type: PostType
    content: string
    videoURL: string
  }

  export type StoryUncheckedCreateInput = {
    id: number
    type: PostType
    content: string
    videoURL: string
  }

  export type StoryUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    videoURL?: StringFieldUpdateOperationsInput | string
  }

  export type StoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    videoURL?: StringFieldUpdateOperationsInput | string
  }

  export type StoryCreateManyInput = {
    id: number
    type: PostType
    content: string
    videoURL: string
  }

  export type StoryUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    videoURL?: StringFieldUpdateOperationsInput | string
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    videoURL?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateInput = {
    user: UserCreateNestedOneWithoutRefreshTokensInput
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type RefreshTokenUncheckedCreateInput = {
    userId: number
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type RefreshTokenUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateManyInput = {
    userId: number
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type runningInstancesCreateInput = {
    createdAt?: Date | string
    lastHearBeat: Date | string
  }

  export type runningInstancesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    lastHearBeat: Date | string
  }

  export type runningInstancesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHearBeat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type runningInstancesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHearBeat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type runningInstancesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    lastHearBeat: Date | string
  }

  export type runningInstancesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHearBeat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type runningInstancesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHearBeat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommunityUserListRelationFilter = {
    every?: CommunityUserWhereInput
    some?: CommunityUserWhereInput
    none?: CommunityUserWhereInput
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommunityUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    displayName?: SortOrder
    onlineProfiles?: SortOrder
    ruleSet?: SortOrder
    disallowedWords?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type CommunityUserCommunityIdUserIdCompoundUniqueInput = {
    communityId: number
    userId: number
  }

  export type CommunityUserCountOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityUserAvgOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type CommunityUserMaxOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityUserMinOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityUserSumOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type EnumPostTypeFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeFilter | PostType
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    description?: SortOrder
    savedImageURL?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    description?: SortOrder
    savedImageURL?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    description?: SortOrder
    savedImageURL?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type EnumPostTypeWithAggregatesFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeWithAggregatesFilter | PostType
    _count?: NestedIntFilter
    _min?: NestedEnumPostTypeFilter
    _max?: NestedEnumPostTypeFilter
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    videoURL?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    videoURL?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    videoURL?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    description?: SortOrder
    accessPoint?: SortOrder
    createdAt?: SortOrder
    expireDate?: SortOrder
    refreshToken?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    description?: SortOrder
    accessPoint?: SortOrder
    createdAt?: SortOrder
    expireDate?: SortOrder
    refreshToken?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    description?: SortOrder
    accessPoint?: SortOrder
    createdAt?: SortOrder
    expireDate?: SortOrder
    refreshToken?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
  }

  export type runningInstancesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastHearBeat?: SortOrder
  }

  export type runningInstancesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type runningInstancesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastHearBeat?: SortOrder
  }

  export type runningInstancesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastHearBeat?: SortOrder
  }

  export type runningInstancesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommunityCreateonlineProfilesInput = {
    set: Enumerable<string>
  }

  export type CommunityCreatedisallowedWordsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutOwnedCommunitiesInput = {
    create?: XOR<UserCreateWithoutOwnedCommunitiesInput, UserUncheckedCreateWithoutOwnedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityUserCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutCommunityInput>, Enumerable<CommunityUserUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutCommunityInput>
    createMany?: CommunityUserCreateManyCommunityInputEnvelope
    connect?: Enumerable<CommunityUserWhereUniqueInput>
  }

  export type AuthorCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCommunityInput>, Enumerable<AuthorUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCommunityInput>
    createMany?: AuthorCreateManyCommunityInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<PostCreateWithoutCommunityInput>, Enumerable<PostUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCommunityInput>
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommunityUserUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutCommunityInput>, Enumerable<CommunityUserUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutCommunityInput>
    createMany?: CommunityUserCreateManyCommunityInputEnvelope
    connect?: Enumerable<CommunityUserWhereUniqueInput>
  }

  export type AuthorUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCommunityInput>, Enumerable<AuthorUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCommunityInput>
    createMany?: AuthorCreateManyCommunityInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<PostCreateWithoutCommunityInput>, Enumerable<PostUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCommunityInput>
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommunityUpdateonlineProfilesInput = {
    set?: Enumerable<string>
  }

  export type CommunityUpdatedisallowedWordsInput = {
    set?: Enumerable<string>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOwnedCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedCommunitiesInput, UserUncheckedCreateWithoutOwnedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCommunitiesInput
    upsert?: UserUpsertWithoutOwnedCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedCommunitiesInput, UserUncheckedUpdateWithoutOwnedCommunitiesInput>
  }

  export type CommunityUserUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutCommunityInput>, Enumerable<CommunityUserUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<CommunityUserUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: CommunityUserCreateManyCommunityInputEnvelope
    set?: Enumerable<CommunityUserWhereUniqueInput>
    disconnect?: Enumerable<CommunityUserWhereUniqueInput>
    delete?: Enumerable<CommunityUserWhereUniqueInput>
    connect?: Enumerable<CommunityUserWhereUniqueInput>
    update?: Enumerable<CommunityUserUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<CommunityUserUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<CommunityUserScalarWhereInput>
  }

  export type AuthorUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCommunityInput>, Enumerable<AuthorUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: AuthorCreateManyCommunityInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type PostUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutCommunityInput>, Enumerable<PostUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommunityUserUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutCommunityInput>, Enumerable<CommunityUserUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<CommunityUserUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: CommunityUserCreateManyCommunityInputEnvelope
    set?: Enumerable<CommunityUserWhereUniqueInput>
    disconnect?: Enumerable<CommunityUserWhereUniqueInput>
    delete?: Enumerable<CommunityUserWhereUniqueInput>
    connect?: Enumerable<CommunityUserWhereUniqueInput>
    update?: Enumerable<CommunityUserUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<CommunityUserUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<CommunityUserScalarWhereInput>
  }

  export type AuthorUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutCommunityInput>, Enumerable<AuthorUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: AuthorCreateManyCommunityInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutCommunityInput>, Enumerable<PostUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommunityCreateNestedOneWithoutUsersInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput
    upsert?: CommunityUpsertWithoutUsersInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    upsert?: UserUpsertWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type CommunityCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutOwnerInput>, Enumerable<CommunityUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutOwnerInput>
    createMany?: CommunityCreateManyOwnerInputEnvelope
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type CommunityUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutUserInput>, Enumerable<CommunityUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutUserInput>
    createMany?: CommunityUserCreateManyUserInputEnvelope
    connect?: Enumerable<CommunityUserWhereUniqueInput>
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type AuthorCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutOwnerInput>, Enumerable<AuthorUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutOwnerInput>
    createMany?: AuthorCreateManyOwnerInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type CommunityUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutOwnerInput>, Enumerable<CommunityUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutOwnerInput>
    createMany?: CommunityCreateManyOwnerInputEnvelope
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type CommunityUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutUserInput>, Enumerable<CommunityUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutUserInput>
    createMany?: CommunityUserCreateManyUserInputEnvelope
    connect?: Enumerable<CommunityUserWhereUniqueInput>
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type AuthorUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutOwnerInput>, Enumerable<AuthorUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutOwnerInput>
    createMany?: AuthorCreateManyOwnerInputEnvelope
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type CommunityUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutOwnerInput>, Enumerable<CommunityUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CommunityCreateManyOwnerInputEnvelope
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type CommunityUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutUserInput>, Enumerable<CommunityUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommunityUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommunityUserCreateManyUserInputEnvelope
    set?: Enumerable<CommunityUserWhereUniqueInput>
    disconnect?: Enumerable<CommunityUserWhereUniqueInput>
    delete?: Enumerable<CommunityUserWhereUniqueInput>
    connect?: Enumerable<CommunityUserWhereUniqueInput>
    update?: Enumerable<CommunityUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommunityUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommunityUserScalarWhereInput>
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type AuthorUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutOwnerInput>, Enumerable<AuthorUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: AuthorCreateManyOwnerInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type CommunityUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutOwnerInput>, Enumerable<CommunityUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CommunityCreateManyOwnerInputEnvelope
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type CommunityUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommunityUserCreateWithoutUserInput>, Enumerable<CommunityUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommunityUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommunityUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommunityUserCreateManyUserInputEnvelope
    set?: Enumerable<CommunityUserWhereUniqueInput>
    disconnect?: Enumerable<CommunityUserWhereUniqueInput>
    delete?: Enumerable<CommunityUserWhereUniqueInput>
    connect?: Enumerable<CommunityUserWhereUniqueInput>
    update?: Enumerable<CommunityUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommunityUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommunityUserScalarWhereInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type AuthorUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutOwnerInput>, Enumerable<AuthorUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: AuthorCreateManyOwnerInputEnvelope
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutOwnedAuthorsInput = {
    create?: XOR<UserCreateWithoutOwnedAuthorsInput, UserUncheckedCreateWithoutOwnedAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedAuthorsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<CommunityCreateWithoutAuthorsInput, CommunityUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutAuthorsInput
    connect?: CommunityWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type UserUpdateOneWithoutOwnedAuthorsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedAuthorsInput, UserUncheckedCreateWithoutOwnedAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedAuthorsInput
    upsert?: UserUpsertWithoutOwnedAuthorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedAuthorsInput, UserUncheckedUpdateWithoutOwnedAuthorsInput>
  }

  export type CommunityUpdateOneWithoutAuthorsNestedInput = {
    create?: XOR<CommunityCreateWithoutAuthorsInput, CommunityUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutAuthorsInput
    upsert?: CommunityUpsertWithoutAuthorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<CommunityUpdateWithoutAuthorsInput, CommunityUncheckedUpdateWithoutAuthorsInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type AuthorCreateNestedOneWithoutPostInput = {
    create?: XOR<AuthorCreateWithoutPostInput, AuthorUncheckedCreateWithoutPostInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPostInput
    connect?: AuthorWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    connect?: CommunityWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: PostType
  }

  export type AuthorUpdateOneWithoutPostNestedInput = {
    create?: XOR<AuthorCreateWithoutPostInput, AuthorUncheckedCreateWithoutPostInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPostInput
    upsert?: AuthorUpsertWithoutPostInput
    disconnect?: boolean
    delete?: boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<AuthorUpdateWithoutPostInput, AuthorUncheckedUpdateWithoutPostInput>
  }

  export type CommunityUpdateOneWithoutPostsNestedInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    upsert?: CommunityUpsertWithoutPostsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedEnumPostTypeFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeFilter | PostType
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedEnumPostTypeWithAggregatesFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeWithAggregatesFilter | PostType
    _count?: NestedIntFilter
    _min?: NestedEnumPostTypeFilter
    _max?: NestedEnumPostTypeFilter
  }

  export type UserCreateWithoutOwnedCommunitiesInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    communities?: CommunityUserCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOwnedCommunitiesInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    communities?: CommunityUserUncheckedCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOwnedCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedCommunitiesInput, UserUncheckedCreateWithoutOwnedCommunitiesInput>
  }

  export type CommunityUserCreateWithoutCommunityInput = {
    user: UserCreateNestedOneWithoutCommunitiesInput
    createdAt?: Date | string
  }

  export type CommunityUserUncheckedCreateWithoutCommunityInput = {
    userId: number
    createdAt?: Date | string
  }

  export type CommunityUserCreateOrConnectWithoutCommunityInput = {
    where: CommunityUserWhereUniqueInput
    create: XOR<CommunityUserCreateWithoutCommunityInput, CommunityUserUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityUserCreateManyCommunityInputEnvelope = {
    data: Enumerable<CommunityUserCreateManyCommunityInput>
    skipDuplicates?: boolean
  }

  export type AuthorCreateWithoutCommunityInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedAuthorsInput
    Post?: PostCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutCommunityInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    userId?: number | null
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutCommunityInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutCommunityInput, AuthorUncheckedCreateWithoutCommunityInput>
  }

  export type AuthorCreateManyCommunityInputEnvelope = {
    data: Enumerable<AuthorCreateManyCommunityInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCommunityInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    author?: AuthorCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommunityInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    authorId?: number | null
  }

  export type PostCreateOrConnectWithoutCommunityInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateManyCommunityInputEnvelope = {
    data: Enumerable<PostCreateManyCommunityInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedCommunitiesInput = {
    update: XOR<UserUpdateWithoutOwnedCommunitiesInput, UserUncheckedUpdateWithoutOwnedCommunitiesInput>
    create: XOR<UserCreateWithoutOwnedCommunitiesInput, UserUncheckedCreateWithoutOwnedCommunitiesInput>
  }

  export type UserUpdateWithoutOwnedCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUserUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUserUncheckedUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityUserUpsertWithWhereUniqueWithoutCommunityInput = {
    where: CommunityUserWhereUniqueInput
    update: XOR<CommunityUserUpdateWithoutCommunityInput, CommunityUserUncheckedUpdateWithoutCommunityInput>
    create: XOR<CommunityUserCreateWithoutCommunityInput, CommunityUserUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityUserUpdateWithWhereUniqueWithoutCommunityInput = {
    where: CommunityUserWhereUniqueInput
    data: XOR<CommunityUserUpdateWithoutCommunityInput, CommunityUserUncheckedUpdateWithoutCommunityInput>
  }

  export type CommunityUserUpdateManyWithWhereWithoutCommunityInput = {
    where: CommunityUserScalarWhereInput
    data: XOR<CommunityUserUpdateManyMutationInput, CommunityUserUncheckedUpdateManyWithoutUsersInput>
  }

  export type CommunityUserScalarWhereInput = {
    AND?: Enumerable<CommunityUserScalarWhereInput>
    OR?: Enumerable<CommunityUserScalarWhereInput>
    NOT?: Enumerable<CommunityUserScalarWhereInput>
    communityId?: IntFilter | number
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type AuthorUpsertWithWhereUniqueWithoutCommunityInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutCommunityInput, AuthorUncheckedUpdateWithoutCommunityInput>
    create: XOR<AuthorCreateWithoutCommunityInput, AuthorUncheckedCreateWithoutCommunityInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutCommunityInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutCommunityInput, AuthorUncheckedUpdateWithoutCommunityInput>
  }

  export type AuthorUpdateManyWithWhereWithoutCommunityInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: Enumerable<AuthorScalarWhereInput>
    OR?: Enumerable<AuthorScalarWhereInput>
    NOT?: Enumerable<AuthorScalarWhereInput>
    id?: IntFilter | number
    displayName?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    userId?: IntNullableFilter | number | null
    communityId?: IntNullableFilter | number | null
  }

  export type PostUpsertWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithWhereWithoutCommunityInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: BigIntFilter | bigint | number
    type?: EnumPostTypeFilter | PostType
    content?: StringFilter | string
    description?: StringFilter | string
    savedImageURL?: StringFilter | string
    authorId?: IntNullableFilter | number | null
    communityId?: IntNullableFilter | number | null
  }

  export type CommunityCreateWithoutUsersInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCommunitiesInput
    authors?: AuthorCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutUsersInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    ownerId: number
    authors?: AuthorUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutCommunitiesInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityCreateNestedManyWithoutOwnerInput
    RefreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityUncheckedCreateNestedManyWithoutOwnerInput
    RefreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type CommunityUpsertWithoutUsersInput = {
    update: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type CommunityUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCommunitiesNestedInput
    authors?: AuthorUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    authors?: AuthorUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutCommunitiesInput = {
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserUpdateWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUpdateManyWithoutOwnerNestedInput
    RefreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUncheckedUpdateManyWithoutOwnerNestedInput
    RefreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityCreateWithoutOwnerInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    users?: CommunityUserCreateNestedManyWithoutCommunityInput
    authors?: AuthorCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutOwnerInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    users?: CommunityUserUncheckedCreateNestedManyWithoutCommunityInput
    authors?: AuthorUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutOwnerInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutOwnerInput, CommunityUncheckedCreateWithoutOwnerInput>
  }

  export type CommunityCreateManyOwnerInputEnvelope = {
    data: Enumerable<CommunityCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type CommunityUserCreateWithoutUserInput = {
    community: CommunityCreateNestedOneWithoutUsersInput
    createdAt?: Date | string
  }

  export type CommunityUserUncheckedCreateWithoutUserInput = {
    communityId: number
    createdAt?: Date | string
  }

  export type CommunityUserCreateOrConnectWithoutUserInput = {
    where: CommunityUserWhereUniqueInput
    create: XOR<CommunityUserCreateWithoutUserInput, CommunityUserUncheckedCreateWithoutUserInput>
  }

  export type CommunityUserCreateManyUserInputEnvelope = {
    data: Enumerable<CommunityUserCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: Enumerable<RefreshTokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AuthorCreateWithoutOwnerInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    community?: CommunityCreateNestedOneWithoutAuthorsInput
    Post?: PostCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutOwnerInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    communityId?: number | null
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutOwnerInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutOwnerInput, AuthorUncheckedCreateWithoutOwnerInput>
  }

  export type AuthorCreateManyOwnerInputEnvelope = {
    data: Enumerable<AuthorCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutOwnerInput, CommunityUncheckedUpdateWithoutOwnerInput>
    create: XOR<CommunityCreateWithoutOwnerInput, CommunityUncheckedCreateWithoutOwnerInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutOwnerInput, CommunityUncheckedUpdateWithoutOwnerInput>
  }

  export type CommunityUpdateManyWithWhereWithoutOwnerInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutOwnedCommunitiesInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: Enumerable<CommunityScalarWhereInput>
    OR?: Enumerable<CommunityScalarWhereInput>
    NOT?: Enumerable<CommunityScalarWhereInput>
    id?: IntFilter | number
    link?: StringNullableFilter | string | null
    displayName?: StringFilter | string
    onlineProfiles?: StringNullableListFilter
    ruleSet?: JsonNullableFilter
    disallowedWords?: StringNullableListFilter
    createdAt?: DateTimeFilter | Date | string
    ownerId?: IntFilter | number
  }

  export type CommunityUserUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityUserWhereUniqueInput
    update: XOR<CommunityUserUpdateWithoutUserInput, CommunityUserUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityUserCreateWithoutUserInput, CommunityUserUncheckedCreateWithoutUserInput>
  }

  export type CommunityUserUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityUserWhereUniqueInput
    data: XOR<CommunityUserUpdateWithoutUserInput, CommunityUserUncheckedUpdateWithoutUserInput>
  }

  export type CommunityUserUpdateManyWithWhereWithoutUserInput = {
    where: CommunityUserScalarWhereInput
    data: XOR<CommunityUserUpdateManyMutationInput, CommunityUserUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: Enumerable<RefreshTokenScalarWhereInput>
    OR?: Enumerable<RefreshTokenScalarWhereInput>
    NOT?: Enumerable<RefreshTokenScalarWhereInput>
    userId?: IntFilter | number
    id?: IntFilter | number
    description?: StringNullableFilter | string | null
    accessPoint?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    expireDate?: DateTimeFilter | Date | string
    refreshToken?: StringFilter | string
  }

  export type AuthorUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutOwnerInput, AuthorUncheckedUpdateWithoutOwnerInput>
    create: XOR<AuthorCreateWithoutOwnerInput, AuthorUncheckedCreateWithoutOwnerInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutOwnerInput, AuthorUncheckedUpdateWithoutOwnerInput>
  }

  export type AuthorUpdateManyWithWhereWithoutOwnerInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutOwnedAuthorsInput>
  }

  export type UserCreateWithoutOwnedAuthorsInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedAuthorsInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityUncheckedCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserUncheckedCreateNestedManyWithoutUserInput
    RefreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedAuthorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedAuthorsInput, UserUncheckedCreateWithoutOwnedAuthorsInput>
  }

  export type CommunityCreateWithoutAuthorsInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCommunitiesInput
    users?: CommunityUserCreateNestedManyWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutAuthorsInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    ownerId: number
    users?: CommunityUserUncheckedCreateNestedManyWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutAuthorsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutAuthorsInput, CommunityUncheckedCreateWithoutAuthorsInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    community?: CommunityCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    communityId?: number | null
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedAuthorsInput = {
    update: XOR<UserUpdateWithoutOwnedAuthorsInput, UserUncheckedUpdateWithoutOwnedAuthorsInput>
    create: XOR<UserCreateWithoutOwnedAuthorsInput, UserUncheckedCreateWithoutOwnedAuthorsInput>
  }

  export type UserUpdateWithoutOwnedAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUncheckedUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUncheckedUpdateManyWithoutUserNestedInput
    RefreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutAuthorsInput = {
    update: XOR<CommunityUpdateWithoutAuthorsInput, CommunityUncheckedUpdateWithoutAuthorsInput>
    create: XOR<CommunityCreateWithoutAuthorsInput, CommunityUncheckedCreateWithoutAuthorsInput>
  }

  export type CommunityUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCommunitiesNestedInput
    users?: CommunityUserUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    users?: CommunityUserUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type AuthorCreateWithoutPostInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedAuthorsInput
    community?: CommunityCreateNestedOneWithoutAuthorsInput
  }

  export type AuthorUncheckedCreateWithoutPostInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    userId?: number | null
    communityId?: number | null
  }

  export type AuthorCreateOrConnectWithoutPostInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutPostInput, AuthorUncheckedCreateWithoutPostInput>
  }

  export type CommunityCreateWithoutPostsInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCommunitiesInput
    users?: CommunityUserCreateNestedManyWithoutCommunityInput
    authors?: AuthorCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutPostsInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
    ownerId: number
    users?: CommunityUserUncheckedCreateNestedManyWithoutCommunityInput
    authors?: AuthorUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutPostsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type AuthorUpsertWithoutPostInput = {
    update: XOR<AuthorUpdateWithoutPostInput, AuthorUncheckedUpdateWithoutPostInput>
    create: XOR<AuthorCreateWithoutPostInput, AuthorUncheckedCreateWithoutPostInput>
  }

  export type AuthorUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedAuthorsNestedInput
    community?: CommunityUpdateOneWithoutAuthorsNestedInput
  }

  export type AuthorUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommunityUpsertWithoutPostsInput = {
    update: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type CommunityUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCommunitiesNestedInput
    users?: CommunityUserUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    users?: CommunityUserUncheckedUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id: number
    email?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    ownedCommunities?: CommunityUncheckedCreateNestedManyWithoutOwnerInput
    communities?: CommunityUserUncheckedCreateNestedManyWithoutUserInput
    ownedAuthors?: AuthorUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCommunities?: CommunityUncheckedUpdateManyWithoutOwnerNestedInput
    communities?: CommunityUserUncheckedUpdateManyWithoutUserNestedInput
    ownedAuthors?: AuthorUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityUserCreateManyCommunityInput = {
    userId: number
    createdAt?: Date | string
  }

  export type AuthorCreateManyCommunityInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type PostCreateManyCommunityInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    authorId?: number | null
  }

  export type CommunityUserUpdateWithoutCommunityInput = {
    user?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateWithoutCommunityInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateManyWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedAuthorsNestedInput
    Post?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUpdateWithoutCommunityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    author?: AuthorUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommunityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommunityCreateManyOwnerInput = {
    id: number
    link?: string | null
    displayName: string
    onlineProfiles?: CommunityCreateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityCreatedisallowedWordsInput | Enumerable<string>
    createdAt?: Date | string
  }

  export type CommunityUserCreateManyUserInput = {
    communityId: number
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id: number
    description?: string | null
    accessPoint: string
    createdAt?: Date | string
    expireDate: Date | string
    refreshToken: string
  }

  export type AuthorCreateManyOwnerInput = {
    id: number
    displayName: string
    imageUrl?: string | null
    createdAt?: Date | string
    communityId?: number | null
  }

  export type CommunityUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: CommunityUserUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUpdateManyWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: CommunityUserUncheckedUpdateManyWithoutCommunityNestedInput
    authors?: AuthorUncheckedUpdateManyWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutOwnedCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    onlineProfiles?: CommunityUpdateonlineProfilesInput | Enumerable<string>
    ruleSet?: NullableJsonNullValueInput | InputJsonValue
    disallowedWords?: CommunityUpdatedisallowedWordsInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUpdateWithoutUserInput = {
    community?: CommunityUpdateOneRequiredWithoutUsersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateWithoutUserInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUserUncheckedUpdateManyWithoutCommunitiesInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accessPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneWithoutAuthorsNestedInput
    Post?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutOwnedAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyAuthorInput = {
    id: bigint | number
    type: PostType
    content: string
    description: string
    savedImageURL: string
    communityId?: number | null
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    community?: CommunityUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    savedImageURL?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
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