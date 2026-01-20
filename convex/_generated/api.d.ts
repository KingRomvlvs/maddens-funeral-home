/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin_email from "../admin/email.js";
import type * as admin_emailDb from "../admin/emailDb.js";
import type * as admin_inbox from "../admin/inbox.js";
import type * as admin_overview from "../admin/overview.js";
import type * as agent_chat from "../agent/chat.js";
import type * as agent_db from "../agent/db.js";
import type * as agent_rag from "../agent/rag.js";
import type * as agent_ragDb from "../agent/ragDb.js";
import type * as auth from "../auth.js";
import type * as contact from "../contact.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "admin/email": typeof admin_email;
  "admin/emailDb": typeof admin_emailDb;
  "admin/inbox": typeof admin_inbox;
  "admin/overview": typeof admin_overview;
  "agent/chat": typeof agent_chat;
  "agent/db": typeof agent_db;
  "agent/rag": typeof agent_rag;
  "agent/ragDb": typeof agent_ragDb;
  auth: typeof auth;
  contact: typeof contact;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
