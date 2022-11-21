
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AuthorScalarFieldEnum = makeEnum({
  id: 'id',
  displayName: 'displayName',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  userId: 'userId',
  communityId: 'communityId'
});

exports.Prisma.CommunityScalarFieldEnum = makeEnum({
  id: 'id',
  link: 'link',
  displayName: 'displayName',
  onlineProfiles: 'onlineProfiles',
  ruleSet: 'ruleSet',
  disallowedWords: 'disallowedWords',
  createdAt: 'createdAt',
  ownerId: 'ownerId'
});

exports.Prisma.CommunityUserScalarFieldEnum = makeEnum({
  communityId: 'communityId',
  userId: 'userId',
  createdAt: 'createdAt'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  content: 'content',
  description: 'description',
  savedImageURL: 'savedImageURL',
  authorId: 'authorId',
  communityId: 'communityId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RefreshTokenScalarFieldEnum = makeEnum({
  userId: 'userId',
  id: 'id',
  description: 'description',
  accessPoint: 'accessPoint',
  createdAt: 'createdAt',
  expireDate: 'expireDate',
  refreshToken: 'refreshToken'
});

exports.Prisma.RunningInstancesScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  lastHearBeat: 'lastHearBeat'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StoryScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  content: 'content',
  videoURL: 'videoURL'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  createdAt: 'createdAt'
});
exports.PostType = makeEnum({
  text: 'text',
  image: 'image',
  reflink: 'reflink'
});

exports.Prisma.ModelName = makeEnum({
  Community: 'Community',
  CommunityUser: 'CommunityUser',
  User: 'User',
  Author: 'Author',
  Post: 'Post',
  Story: 'Story',
  RefreshToken: 'RefreshToken',
  runningInstances: 'runningInstances'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
